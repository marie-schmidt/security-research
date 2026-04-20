/**
 * This script makes the search functionality work on mobile and desktop.
 * On mobile, it switches between the normal topbar and the search input.
 * Uses FlexSearch for fast, full-text search.
 */

import { Index } from 'flexsearch';

// CSS class names
const LOADED = 'd-block';
const UNLOADED = 'd-none';
const FOCUS = 'input-focus';
const FLEX = 'd-flex';

// Search data and index
let searchData: any[] = [];
let searchIndex: Index | null = null;
let searchDataLoaded = false;

/* Actions in mobile screens */
class MobileSearchBar {
  static on() {
    const btnSbTrigger = document.getElementById('sidebar-trigger');
    const topbarTitle = document.getElementById('topbar-title');
    const btnSearchTrigger = document.getElementById('search-trigger');
    const search = document.getElementById('search');
    const btnCancel = document.getElementById('search-cancel');

    if (!btnSbTrigger || !topbarTitle || !btnSearchTrigger || !search || !btnCancel) {
      return;
    }

    btnSbTrigger.classList.add(UNLOADED);
    topbarTitle.classList.add(UNLOADED);
    btnSearchTrigger.classList.add(UNLOADED);
    search.classList.add(FLEX);
    btnCancel.classList.add(LOADED);
  }

  static off() {
    const btnSbTrigger = document.getElementById('sidebar-trigger');
    const topbarTitle = document.getElementById('topbar-title');
    const btnSearchTrigger = document.getElementById('search-trigger');
    const search = document.getElementById('search');
    const btnCancel = document.getElementById('search-cancel');

    if (!btnSbTrigger || !topbarTitle || !btnSearchTrigger || !search || !btnCancel) {
      return;
    }

    btnCancel.classList.remove(LOADED);
    search.classList.remove(FLEX);
    btnSbTrigger.classList.remove(UNLOADED);
    topbarTitle.classList.remove(UNLOADED);
    btnSearchTrigger.classList.remove(UNLOADED);
  }
}

class ResultSwitch {
  static resultVisible = false;

  static on() {
    const resultWrapper = document.getElementById('search-result-wrapper');
    const content = document.querySelectorAll('#main-wrapper>.container>.row');

    if (!resultWrapper) return;

    if (!this.resultVisible) {
      resultWrapper.classList.remove(UNLOADED);
      content.forEach((el) => {
        el.classList.add(UNLOADED);
      });
      this.resultVisible = true;
    }
  }

  static off() {
    const resultWrapper = document.getElementById('search-result-wrapper');
    const results = document.getElementById('search-results');
    const hints = document.getElementById('search-hints');
    const content = document.querySelectorAll('#main-wrapper>.container>.row');
    const input = document.getElementById('search-input') as HTMLInputElement | null;

    if (!resultWrapper || !results || !input) return;

    if (this.resultVisible) {
      results.innerHTML = '';

      if (hints && hints.classList.contains(UNLOADED)) {
        hints.classList.remove(UNLOADED);
      }

      resultWrapper.classList.add(UNLOADED);
      content.forEach((el) => {
        el.classList.remove(UNLOADED);
      });
      input.value = '';
      this.resultVisible = false;
    }
  }
}

function isMobileView() {
  const btnCancel = document.getElementById('search-cancel');
  return btnCancel ? btnCancel.classList.contains(LOADED) : false;
}

/**
 * Load search data and initialize FlexSearch index
 */
async function loadSearchData() {
  if (searchDataLoaded) return;

  try {
    const response = await fetch('/search.json');
    if (!response.ok) {
      console.error('Failed to load search data');
      return;
    }

    searchData = await response.json();

    // Initialize FlexSearch index
    searchIndex = new Index({
      tokenize: 'forward',
      cache: 100,
      resolution: 9,
      context: true,
    });

    // Add documents to the index
    searchData.forEach((item, index) => {
      const searchableText = `${item.title} ${item.categories} ${item.tags} ${item.content}`;
      searchIndex?.add(index, searchableText);
    });

    searchDataLoaded = true;
  } catch (error) {
    console.error('Error loading search data:', error);
  }
}

/**
 * Perform search and return results
 */
function performSearch(query: string): any[] {
  if (!searchIndex || !searchDataLoaded || !query.trim()) {
    return [];
  }

  try {
    const results = searchIndex.search(query, { limit: 20 });
    return results.map((idx) => searchData[idx as number]).filter(Boolean);
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

/**
 * Render search results to the DOM
 */
function renderSearchResults(results: any[]) {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p class="mt-5">No results found</p>';
    return;
  }

  resultsContainer.innerHTML = results
    .map(
      (post) => `
    <article class="px-1 px-sm-2 px-lg-4 px-xl-0">
      <header>
        <h2><a href="${post.url}">${post.title}</a></h2>
        <div class="post-meta d-flex flex-column flex-sm-row text-muted mt-1 mb-1">
          ${post.categories ? `<div class="me-sm-4"><i class="far fa-folder fa-fw"></i>${post.categories}</div>` : ''}
          ${post.tags ? `<div><i class="fa fa-tag fa-fw"></i>${post.tags}</div>` : ''}
        </div>
      </header>
      <p>${post.content}</p>
    </article>
  `
    )
    .join('');
}

export function initSearch() {
  const btnSearchTrigger = document.getElementById('search-trigger');
  const btnCancel = document.getElementById('search-cancel');
  const search = document.getElementById('search');
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  const hints = document.getElementById('search-hints');
  const results = document.getElementById('search-results');

  if (!btnSearchTrigger || !btnCancel || !search || !input) {
    return;
  }

  // Load search data when user first interacts with search
  let dataLoadTriggered = false;
  const ensureSearchDataLoaded = () => {
    if (!dataLoadTriggered) {
      dataLoadTriggered = true;
      loadSearchData();
    }
  };

  btnSearchTrigger.addEventListener('click', () => {
    ensureSearchDataLoaded();
    MobileSearchBar.on();
    ResultSwitch.on();
    input.focus();
  });

  btnCancel.addEventListener('click', () => {
    MobileSearchBar.off();
    ResultSwitch.off();
  });

  input.addEventListener('focus', () => {
    ensureSearchDataLoaded();
    search.classList.add(FOCUS);
  });

  input.addEventListener('focusout', () => {
    search.classList.remove(FOCUS);
  });

  // Debounce search to avoid too many searches
  let searchTimeout: ReturnType<typeof setTimeout> | null = null;

  input.addEventListener('input', () => {
    const query = input.value.trim();

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (query === '') {
      if (results) results.innerHTML = '';
      if (isMobileView()) {
        hints?.classList.remove(UNLOADED);
      } else {
        ResultSwitch.off();
      }
    } else {
      ResultSwitch.on();
      if (isMobileView()) {
        hints?.classList.add(UNLOADED);
      }

      // Debounce search by 200ms
      searchTimeout = setTimeout(() => {
        const searchResults = performSearch(query);
        renderSearchResults(searchResults);
      }, 200);
    }
  });
}
