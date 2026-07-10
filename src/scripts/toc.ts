/**
 * TOC (Table of Contents) functionality
 * Handles desktop TOC panel and mobile TOC bar/popup
 */

import tocbot from 'tocbot';

const SCROLL_LOCK = 'overflow-hidden';
const CLOSING = 'closing';

class TocMobile {
  private static invisible = true;
  private static barHeight = 16 * 3; // 3rem

  private static $tocBar: HTMLElement | null;
  private static $soloTrigger: HTMLElement | null;
  private static $triggers: HTMLCollectionOf<Element>;
  private static $popup: HTMLDialogElement | null;
  private static $btnClose: HTMLElement | null;

  static options = {
    tocSelector: '#toc-popup-content',
    contentSelector: '.content',
    ignoreSelector: '[data-toc-skip]',
    headingSelector: 'h2, h3, h4',
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 0, // Collapse nested sections by default
    collapsibleClass: 'is-collapsible',
    isCollapsedClass: 'is-collapsed',
    headingsOffset: this.barHeight
  };

  static init() {
    this.$tocBar = document.getElementById('toc-bar');
    this.$soloTrigger = document.getElementById('toc-solo-trigger');
    this.$triggers = document.getElementsByClassName('toc-trigger');
    this.$popup = document.getElementById('toc-popup') as HTMLDialogElement;
    this.$btnClose = document.getElementById('toc-popup-close');

    if (!this.$tocBar || !this.$soloTrigger || !this.$popup || !this.$btnClose) {
      return;
    }

    tocbot.init(this.options);
    this.listenAnchors();
    this.initComponents();
  }

  static initBar() {
    if (!this.$tocBar || !this.$soloTrigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.$tocBar?.classList.toggle('invisible', entry.isIntersecting);
        });
      },
      { rootMargin: `-${this.barHeight}px 0px 0px 0px` }
    );

    observer.observe(this.$soloTrigger);
    this.invisible = false;
  }

  static listenAnchors() {
    const $anchors = document.getElementsByClassName('toc-link');
    Array.from($anchors).forEach((anchor) => {
      (anchor as HTMLElement).onclick = () => this.hidePopup();
    });
  }

  static refresh() {
    // Re-query DOM elements to ensure they're from the current document
    // This is necessary for View Transitions where the DOM may have been swapped
    this.$tocBar = document.getElementById('toc-bar');
    this.$soloTrigger = document.getElementById('toc-solo-trigger');
    this.$triggers = document.getElementsByClassName('toc-trigger');
    this.$popup = document.getElementById('toc-popup') as HTMLDialogElement;
    this.$btnClose = document.getElementById('toc-popup-close');

    if (this.invisible) {
      this.initComponents();
    }
    tocbot.refresh(this.options);
    this.listenAnchors();
  }

  static get popupOpened() {
    return this.$popup?.open || false;
  }

  static showPopup() {
    if (!this.$popup) return;

    this.lockScroll(true);
    this.$popup.showModal();
    const activeItem = this.$popup.querySelector('li.is-active-li');
    activeItem?.scrollIntoView({ block: 'center' });
  }

  static hidePopup() {
    if (!this.$popup) return;

    this.$popup.toggleAttribute(CLOSING);

    this.$popup.addEventListener(
      'animationend',
      () => {
        this.$popup?.toggleAttribute(CLOSING);
        this.$popup?.close();
      },
      { once: true }
    );

    this.lockScroll(false);
  }

  static lockScroll(enable: boolean) {
    document.documentElement.classList.toggle(SCROLL_LOCK, enable);
    document.body.classList.toggle(SCROLL_LOCK, enable);
  }

  static clickBackdrop(event: MouseEvent) {
    if (!this.$popup || this.$popup.hasAttribute(CLOSING)) {
      return;
    }

    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      this.hidePopup();
    }
  }

  static initComponents() {
    this.initBar();

    // Re-query DOM elements to ensure they're from the current document
    // (refresh() already does this, but do it again for safety)
    this.$triggers = document.getElementsByClassName('toc-trigger');
    this.$popup = document.getElementById('toc-popup') as HTMLDialogElement;
    this.$btnClose = document.getElementById('toc-popup-close');

    Array.from(this.$triggers).forEach((trigger) => {
      (trigger as HTMLElement).onclick = () => this.showPopup();
    });

    if (this.$popup) {
      this.$popup.onclick = (e) => this.clickBackdrop(e);
      this.$popup.oncancel = (e) => {
        e.preventDefault();
        this.hidePopup();
      };
    }

    if (this.$btnClose) {
      this.$btnClose.onclick = () => this.hidePopup();
    }
  }
}

class TocDesktop {
  static options = {
    tocSelector: '#toc',
    contentSelector: '.content',
    ignoreSelector: '[data-toc-skip]',
    headingSelector: 'h2, h3, h4',
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 0, // Collapse nested sections by default
    collapsibleClass: 'is-collapsible',
    isCollapsedClass: 'is-collapsed'
  };

  static init() {
    tocbot.init(this.options);
  }

  static refresh() {
    tocbot.refresh(this.options);
  }
}

// Check if we're in desktop mode (1200px and above)
const desktopMode = matchMedia('(min-width: 1200px)');

function refresh(e: MediaQueryListEvent) {
  if (e.matches) {
    if (TocMobile.popupOpened) {
      TocMobile.hidePopup();
    }
    TocDesktop.refresh();
  } else {
    TocMobile.refresh();
  }
}

export function initToc() {
  // Check if we're on a page with TOC
  if (document.querySelector('main>article[data-toc="true"]') === null) {
    return;
  }

  // Initialize based on screen size
  if (desktopMode.matches) {
    TocDesktop.init();
  } else {
    TocMobile.init();
  }

  // Make TOC wrapper visible
  const $tocWrapper = document.getElementById('toc-wrapper');
  $tocWrapper?.classList.remove('invisible');

  // Listen for screen size changes
  desktopMode.onchange = refresh;
}
