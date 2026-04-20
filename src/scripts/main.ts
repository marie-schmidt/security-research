// Main application JavaScript
import './theme';
import { initToc } from './toc';
import { initSearch } from './search';

// Back to top button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
}

// Sidebar mobile toggle
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mask = document.getElementById('mask');
  const sidebarTrigger = document.getElementById('sidebar-trigger');

  if (!sidebar || !mask || !sidebarTrigger) return;

  let isExpanded = false;

  const toggle = () => {
    isExpanded = !isExpanded;
    document.body.toggleAttribute('sidebar-display', isExpanded);
    sidebar.classList.toggle('z-2', isExpanded);
    mask.classList.toggle('d-none', !isExpanded);
  };

  sidebarTrigger.addEventListener('click', toggle);
  mask.addEventListener('click', toggle);
}

// Image lazy loading with fallback
function initImageLoading() {
  // Add loading error handlers
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.addEventListener('error', function(this: HTMLImageElement) {
      this.style.display = 'none';
    });
  });
}

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
    initSidebar();
    initImageLoading();
    initToc();
    initSearch();
  });

  // Re-initialize on page navigation (for view transitions)
  document.addEventListener('astro:after-swap', () => {
    initBackToTop();
    initSidebar();
    initImageLoading();
    initToc();
    initSearch();
  });
}

// Export for use in other modules
export { initBackToTop, initSidebar, initImageLoading, initToc, initSearch };
