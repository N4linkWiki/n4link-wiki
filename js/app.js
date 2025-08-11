// === ADVANCED DOCUMENTATION SYSTEM ===
class AdvancedDocumentation {
  constructor() {
    this.currentSection = "welcome";
    this.searchIndex = [];
    this.shortcuts = {};
    this.readingProgress = 0;

    this.init();
  }

  init() {
    this.buildSearchIndex();
    this.setupEventListeners();
    this.initializeFeatures();
    this.setupKeyboardShortcuts();
  }

  buildSearchIndex() {
    // Build search index from all content
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
      const title = section.querySelector("h1, h2")?.textContent || "";
      const content = section.textContent.toLowerCase();
      const id = section.id;

      this.searchIndex.push({
        id,
        title,
        content,
        element: section,
      });
    });
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    searchInput.addEventListener("input", (e) => {
      this.handleSearch(e.target.value, searchResults);
    });

    // Reading progress
    window.addEventListener("scroll", () => {
      this.updateReadingProgress();
      this.updateBackToTop();
      this.updateBreadcrumb();
      this.updateTOC();
    });

    // Close search on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        searchResults.classList.remove("show");
      }
    });

    // URL hash handling
    window.addEventListener("hashchange", () => {
      this.handleHashChange();
    });

    // Company logo interactions
    document.querySelectorAll(".company-logo").forEach((logo) => {
      logo.addEventListener("click", () => {
        this.showCompanyInfo(logo.dataset.company);
      });
    });
  }

  handleSearch(query, resultsContainer) {
    if (query.length < 2) {
      resultsContainer.classList.remove("show");
      return;
    }

    const results = this.searchIndex
      .filter(
        (item) =>
          item.content.includes(query.toLowerCase()) ||
          item.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);

    this.displaySearchResults(results, query, resultsContainer);
  }

  displaySearchResults(results, query, container) {
    if (results.length === 0) {
      container.innerHTML =
        '<div class="search-result-item">Nenhum resultado encontrado</div>';
    } else {
      container.innerHTML = results
        .map((result) => {
          const highlightedTitle = this.highlightText(result.title, query);
          const snippet = this.getSnippet(result.content, query);

          return `
                            <div class="search-result-item" onclick="showSection('${result.id}')">
                                <div class="search-result-title">${highlightedTitle}</div>
                                <div class="search-result-content">${snippet}</div>
                            </div>
                        `;
        })
        .join("");
    }
    container.classList.add("show");
  }

  highlightText(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  getSnippet(content, query) {
    const queryIndex = content.toLowerCase().indexOf(query.toLowerCase());
    if (queryIndex === -1) return content.substring(0, 100) + "...";

    const start = Math.max(0, queryIndex - 50);
    const end = Math.min(content.length, queryIndex + query.length + 50);
    let snippet = content.substring(start, end);

    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";

    return this.highlightText(snippet, query);
  }

  updateReadingProgress() {
    const currentSection = document.querySelector(".content-section.active");
    if (!currentSection) return;

    const rect = currentSection.getBoundingClientRect();
    const sectionHeight = currentSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(
      100,
      (scrolled / (sectionHeight - viewportHeight)) * 100
    );

    document.getElementById("reading-progress").style.width = `${Math.max(
      0,
      progress
    )}%`;
  }

  updateBackToTop() {
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  updateBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");
    const current = document.getElementById("breadcrumb-current");

    if (window.scrollY > 200) {
      breadcrumb.classList.add("show");
      const activeSection = document.querySelector(".content-section.active");
      if (activeSection) {
        const title = activeSection.querySelector("h1, h2")?.textContent || "";
        current.textContent = title;
      }
    } else {
      breadcrumb.classList.remove("show");
    }
  }

  updateTOC() {
    const currentSection = document.querySelector(".content-section.active");
    const tocContainer = document.getElementById("toc-container");
    const tocContent = document.getElementById("toc-content");

    if (!currentSection) {
      tocContainer.classList.remove("show");
      return;
    }

    const headings = currentSection.querySelectorAll("h2, h3");
    if (headings.length < 2) {
      tocContainer.classList.remove("show");
      return;
    }

    tocContent.innerHTML = Array.from(headings)
      .map((heading, index) => {
        const id = `toc-${this.currentSection}-${index}`;
        heading.id = id;
        return `<a href="#${id}" class="toc-item">${heading.textContent}</a>`;
      })
      .join("");

    tocContainer.classList.add("show");

    // Update active TOC item
    this.updateActiveTOCItem(headings);
  }

  updateActiveTOCItem(headings) {
    const tocItems = document.querySelectorAll(".toc-item");
    let activeIndex = 0;

    headings.forEach((heading, index) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 100) {
        activeIndex = index;
      }
    });

    tocItems.forEach((item, index) => {
      item.classList.toggle("active", index === activeIndex);
    });
  }

  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      // Ctrl+K or Cmd+K for search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-input").focus();
      }

      // Escape to close dropdowns
      if (e.key === "Escape") {
        document.getElementById("search-results").classList.remove("show");
        document.getElementById("translator-dropdown").classList.remove("show");
      }

      // Home key to scroll to top
      if (e.key === "Home" && !e.target.matches("input, textarea")) {
        e.preventDefault();
        this.scrollToTop();
      }

      // End key to scroll to bottom
      if (e.key === "End" && !e.target.matches("input, textarea")) {
        e.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showCompanyInfo(companyName) {
    console.log(`Showing info for: ${companyName}`);
  }

  handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
      showSection(hash);
    }
  }

  initializeFeatures() {
    setTimeout(() => {
      this.updateReadingProgress();
      this.updateTOC();
    }, 100);
  }
}

// === MOBILE MENU SYSTEM ===
function toggleMobileMenu() {
  const overlay = document.getElementById("mobile-menu-overlay");
  const menu = document.getElementById("mobile-menu");
  const button = document.getElementById("mobile-menu-button");
  const hamburger = document.getElementById("hamburger");

  const isOpen = overlay.classList.contains("show");

  if (isOpen) {
    overlay.classList.remove("show");
    menu.classList.remove("show");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    // Copy sidebar content to mobile menu
    const sidebarNav = document.querySelector(".sidebar nav");
    const mobileNavContent = document.getElementById("mobile-nav-content");
    mobileNavContent.innerHTML = sidebarNav.innerHTML;

    overlay.classList.add("show");
    menu.classList.add("show");
    hamburger.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// === TRANSLATION SYSTEM ===
class N4LinkTranslator {
  constructor() {
    this.currentLang = localStorage.getItem("n4link-lang") || "pt-br";
    this.cache = JSON.parse(
      localStorage.getItem("n4link-translations") || "{}"
    );
    this.isTranslating = false;

    this.translations = {
      "pt-pt": {
        "Bem-vindo à Documentação N4LINK": "Bem-vindo à Documentação N4LINK",
        "A plataforma N4LINK é um iPaaS (Integration Platform as a Service) que conecta sistemas legados e modernos de forma ágil, segura e escalável.":
          "A plataforma N4LINK é um iPaaS (Integration Platform as a Service) que conecta sistemas legados e modernos de forma ágil, segura e escalável.",
        "Sistemas já integrados": "Sistemas já integrados",
        Início: "Início",
        "Bem-vindo": "Bem-vindo",
        "Buscar na documentação...": "Pesquisar na documentação...",
        "Nesta seção": "Nesta secção",
        "Traduzindo...": "A traduzir...",
      },
      en: {
        "Bem-vindo à Documentação N4LINK": "Welcome to N4LINK Documentation",
        "A plataforma N4LINK é um iPaaS (Integration Platform as a Service) que conecta sistemas legados e modernos de forma ágil, segura e escalável.":
          "The N4LINK platform is an iPaaS (Integration Platform as a Service) that connects legacy and modern systems in an agile, secure and scalable way.",
        "Sistemas já integrados": "Already integrated systems",
        Início: "Home",
        "Bem-vindo": "Welcome",
        "Buscar na documentação...": "Search documentation...",
        "Nesta seção": "In this section",
        "Traduzindo...": "Translating...",
      },
    };
  }

  async translateContent() {
    if (this.currentLang === "pt-br" || this.isTranslating) return;

    this.showLoading();
    this.isTranslating = true;

    try {
      await this.translateElements();
    } catch (error) {
      console.error("Translation error:", error);
    }

    this.hideLoading();
    this.isTranslating = false;
  }

  async translateElements() {
    const translations = this.translations[this.currentLang];
    if (!translations) return;

    document
      .querySelectorAll("[data-translate], [placeholder], .toc-title")
      .forEach((element) => {
        const text = element.textContent.trim() || element.placeholder;
        if (translations[text]) {
          if (element.placeholder) {
            element.placeholder = translations[text];
          } else {
            element.textContent = translations[text];
          }
        }
      });

    const elementsToTranslate = ["h1", "h2", "h3", "p", "li", "span", "button"];

    elementsToTranslate.forEach((tag) => {
      document.querySelectorAll(tag).forEach((element) => {
        const text = element.textContent.trim();
        if (translations[text] && !element.querySelector("*")) {
          element.textContent = translations[text];
        }
      });
    });
  }

  showLoading() {
    document.getElementById("translation-loading").classList.add("show");
  }

  hideLoading() {
    document.getElementById("translation-loading").classList.remove("show");
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("n4link-lang", lang);
    this.updateUI();
  }

  updateUI() {
    const flags = { "pt-br": "fi-br", "pt-pt": "fi-pt", en: "fi-us" };
    const labels = { "pt-br": "PT-BR", "pt-pt": "PT-PT", en: "EN" };

    document.getElementById("current-flag").className = `fi ${
      flags[this.currentLang]
    }`;
    document.getElementById("current-lang").textContent =
      labels[this.currentLang];

    document.querySelectorAll(".language-option").forEach((opt) => {
      opt.classList.remove("active");
    });
    const activeOption = document.querySelector(
      `[onclick="changeLanguage('${this.currentLang}')"]`
    );
    if (activeOption) {
      activeOption.classList.add("active");
    }
  }
}

// === THEME SYSTEM ===
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem("n4link-theme") || "light";
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.updateUI();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.applyTheme(this.currentTheme);
    this.updateUI();
    localStorage.setItem("n4link-theme", this.currentTheme);
  }

  applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  updateUI() {
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      if (this.currentTheme === "light") {
        themeIcon.innerHTML =
          '<path d="M20.354 15.354A9 9 0 718.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
      } else {
        themeIcon.innerHTML =
          '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
      }
    }
  }
}

// === NAVIGATION SYSTEM ===
function showSection(sectionId) {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
    advancedDocs.currentSection = sectionId;
  }

  document.querySelectorAll(".nav-links button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `[onclick="showSection('${sectionId}')"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  // Update URL hash
  window.history.pushState(null, null, `#${sectionId}`);

  // Close mobile menu if open
  const overlay = document.getElementById("mobile-menu-overlay");
  if (overlay.classList.contains("show")) {
    toggleMobileMenu();
  }

  // Close search results
  document.getElementById("search-results").classList.remove("show");

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update TOC and other features
  setTimeout(() => {
    advancedDocs.updateTOC();
    advancedDocs.updateReadingProgress();
  }, 100);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// === GLOBAL FUNCTIONS ===
function toggleTheme() {
  themeManager.toggleTheme();
}

function toggleTranslator() {
  const dropdown = document.getElementById("translator-dropdown");
  dropdown.classList.toggle("show");
}

async function changeLanguage(lang) {
  translator.setLanguage(lang);
  toggleTranslator();

  setTimeout(() => {
    translator.translateContent();
  }, 300);
}

// Global instances
const translator = new N4LinkTranslator();
const themeManager = new ThemeManager();
let advancedDocs;

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".translator")) {
    document.getElementById("translator-dropdown").classList.remove("show");
  }
});

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  themeManager.init();
  translator.updateUI();

  const firstNavButton = document.querySelector(".nav-links button");
  if (firstNavButton) {
    firstNavButton.classList.add("active");
  }

  if (translator.currentLang !== "pt-br") {
    setTimeout(() => {
      translator.translateContent();
    }, 500);
  }

  // Initialize advanced documentation features
  advancedDocs = new AdvancedDocumentation();

  // Handle initial hash
  const hash = window.location.hash.slice(1);
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  }
});