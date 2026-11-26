/* ==========================================================================
   Melipop Design Lab — Interactive SPA Router & View Renderer
   Supports hash routes:
     #home
     #work | #work/S | #work/M | #work/L | #work/XL | #work/research
     #project/<id>
     #shop
     #studio | #studio/collaborators | #studio/contact
   ========================================================================== */

(function () {
  const DATA = window.MELIPOP_DATA;
  const ART = window.MELIPOP_ART;

  const mainEl = document.getElementById('app-main');
  const navEl = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalBreadcrumb = document.getElementById('modal-breadcrumb');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  const state = {
    view: 'home',
    workTab: 'projects', // 'projects' | 'research'
    scaleFilter: 'ALL',  // 'ALL' | 'S' | 'M' | 'L' | 'XL'
    workCategory: 'ALL',
    homeScale: 'ALL',    // 'ALL' | 'S' | 'M' | 'L' | 'XL'
    homeCategory: 'ALL',
    studentScale: 'ALL',
    activeModalProject: null,
    heroSlide: 0,
  };

  let heroCarouselTimer = null;

  function stopHeroCarousel() {
    if (heroCarouselTimer) {
      clearInterval(heroCarouselTimer);
      heroCarouselTimer = null;
    }
  }

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function applyBrandFont(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let current;
    while ((current = walker.nextNode())) {
      const parent = current.parentElement;
      if (!parent || parent.closest('.brand-word, script, style, textarea, input, option')) continue;
      if (/\bMelipop\b/.test(current.nodeValue)) {
        nodes.push(current);
      }
    }
    nodes.forEach((textNode) => {
      const frag = document.createDocumentFragment();
      const parts = textNode.nodeValue.split(/(\bMelipop\b)/g);
      parts.forEach((part) => {
        if (part === 'Melipop') {
          const span = document.createElement('span');
          span.className = 'brand-word';
          span.textContent = part;
          frag.appendChild(span);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function renderMedia(item, scaleOverride) {
    if (item.image) {
      return `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
    }
    return ART.getArtworkSVG(item.motif, scaleOverride || item.scale || 'S');
  }

  function renderProjectCard(project) {
    const scaleInfo = DATA.scales.find((s) => s.id === project.scale);
    const scaleLabel = scaleInfo ? scaleInfo.label : '';
    const photoCount = project.images && project.images.length > 1 ? project.images.length : 0;
    return `
      <button type="button" class="project-card" data-open-project="${escapeHtml(project.id)}">
        <div class="project-card-scale-bar" data-scale="${escapeHtml(project.scale)}">
          <span class="card-scale-letter">${escapeHtml(project.scale)}</span>
          <span class="card-scale-label">${escapeHtml(scaleLabel)}</span>
        </div>
        <div class="project-card-media">
          ${renderMedia(project)}
          ${photoCount ? `<span class="media-count-pill">${photoCount} images</span>` : ''}
        </div>
        <div class="project-card-body">
          <div class="project-card-meta-row">
            <span class="project-card-sub">${escapeHtml(project.subcategory)}</span>
            <span class="project-card-year">${escapeHtml(project.year)}</span>
          </div>
          <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
          <p class="project-card-context">${escapeHtml(project.studio)}${project.collaborators && project.collaborators !== project.studio ? ' · ' + escapeHtml(project.collaborators) : ''}</p>
          <div class="project-card-footer">
            <span>${escapeHtml(project.role)}</span>
            <span>View →</span>
          </div>
        </div>
      </button>
    `;
  }

  /* ------------------------------------------------------------------------
     SHARED HERO BANNER & ZOOM-IN SCALE STRIP (Used by Home & Work)
     ------------------------------------------------------------------------ */
  function renderHeroBanner({ titleHtml, subtitleText, extraHtml = '', heroClass = '' }) {
    const slides = DATA.heroCarousel || [];
    const activeIndex = slides.length ? state.heroSlide % slides.length : 0;
    const activeSlide = slides[activeIndex];

    return `
      <section class="hero ${slides.length ? 'hero--carousel' : ''} ${heroClass}" aria-roledescription="carousel" aria-label="Featured project highlights">
        ${
          slides.length
            ? `
          <div class="hero-carousel-bg" aria-hidden="true">
            ${slides
              .map(
                (slide, i) => `
              <div class="hero-slide ${i === activeIndex ? 'is-active' : ''}" data-hero-slide="${i}">
                ${
                  slide.image
                    ? `<img src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.alt || slide.caption)}" />`
                    : ART.getArtworkSVG(slide.motif || 'bipv', slide.scale || 'XL').replace(
                        '<svg ',
                        '<svg preserveAspectRatio="xMidYMid slice" '
                      )
                }
              </div>
            `
              )
              .join('')}
          </div>
          <div class="hero-scrim" aria-hidden="true"></div>
        `
            : ''
        }
        <div class="container hero-grid">
          <div class="hero-lockup">
            ${titleHtml}
            <p class="hero-discipline" aria-label="${escapeHtml(subtitleText)}">
              ${Array.from(subtitleText)
                .map((ch) => (ch === ' ' ? '<span aria-hidden="true">&nbsp;</span>' : `<span aria-hidden="true">${escapeHtml(ch)}</span>`))
                .join('')}
            </p>
            ${extraHtml}
          </div>
        </div>
        ${
          slides.length
            ? `
          <div class="hero-carousel-bar">
            <div class="container hero-carousel-bar-inner">
              <button type="button" class="hero-caption-btn" id="hero-caption-btn" data-open-project="${escapeHtml(activeSlide.projectId)}">
                <span class="hero-slide-counter" id="hero-slide-counter">0${activeIndex + 1} / 0${slides.length}</span>
                <span class="hero-slide-title" id="hero-slide-title">${escapeHtml(activeSlide.caption)}</span>
                <span class="hero-slide-cat" id="hero-slide-cat">${escapeHtml(activeSlide.category)}</span>
              </button>
              <div class="hero-carousel-controls">
                <div class="hero-dots" role="tablist" aria-label="Choose hero slide">
                  ${slides
                    .map(
                      (slide, i) => `
                    <button type="button" role="tab" class="hero-dot ${i === activeIndex ? 'is-active' : ''}" data-hero-dot="${i}" aria-selected="${i === activeIndex}" aria-label="Slide ${i + 1}: ${escapeHtml(slide.caption)}"></button>
                  `
                    )
                    .join('')}
                </div>
                <div class="hero-arrows">
                  <button type="button" class="hero-arrow" id="hero-prev" aria-label="Previous background image">←</button>
                  <button type="button" class="hero-arrow" id="hero-next" aria-label="Next background image">→</button>
                </div>
              </div>
            </div>
          </div>
        `
            : ''
        }
      </section>
    `;
  }

  function renderScaleStrip(activeScale) {
    const scaleCounts = DATA.scales.map((s) => ({
      ...s,
      count: DATA.projects.filter((p) => p.scale === s.id).length,
    }));

    return `
      <!-- S / M / L / XL Zoom-In Colour Slider Strip -->
      <section class="scale-strip" aria-label="Filter projects by Scale">
        ${scaleCounts
          .map(
            (s) => `
          <button type="button" class="scale-strip-item ${activeScale === s.id ? 'is-selected' : ''}" data-scale="${s.id}" aria-pressed="${activeScale === s.id}">
            <span class="scale-letter">${s.id}</span>
            <div class="scale-strip-meta">
              <div class="scale-strip-head">
                <strong>${escapeHtml(s.label)}</strong>
                <span class="scale-strip-count">${s.count} PROJECTS</span>
              </div>
              <span class="scale-strip-desc">${escapeHtml(s.shortDesc)}</span>
            </div>
          </button>
        `
          )
          .join('')}
      </section>
    `;
  }

  function getFilteredProjects(scale, category, featuredOnlyWhenAll) {
    let list =
      scale === 'ALL'
        ? featuredOnlyWhenAll
          ? DATA.projects.filter((p) => p.featured)
          : DATA.projects
        : DATA.projects.filter((p) => p.scale === scale);
    if (category && category !== 'ALL') {
      list = list.filter((p) => p.subcategory === category);
    }
    return list;
  }

  function renderHomeProjectsBlock(scale, category) {
    const baseForScale =
      scale === 'ALL' ? DATA.projects.filter((p) => p.featured) : DATA.projects.filter((p) => p.scale === scale);
    const categories = [...new Set(baseForScale.map((p) => p.subcategory))];
    const activeCat = categories.includes(category) ? category : 'ALL';
    const items = getFilteredProjects(scale, activeCat, true);
    const scaleObj = DATA.scales.find((s) => s.id === scale);

    const headingTitle = scaleObj ? `${scaleObj.id} · ${scaleObj.label}` : 'Featured Projects';
    const eyebrowText = scaleObj
      ? `Filtered by Scale ${scaleObj.id} · ${items.length} project${items.length === 1 ? '' : 's'}`
      : 'Selected Across Scales · S / M / L / XL';

    return `
      <div class="section-header">
        <div>
          <span class="eyebrow">${escapeHtml(eyebrowText)}</span>
          <h2 class="section-title">${escapeHtml(headingTitle)}</h2>
        </div>
        <div class="header-actions-group">
          ${
            scale !== 'ALL'
              ? `<button type="button" class="rect-btn" data-home-reset="ALL">All Scales</button>`
              : ''
          }
          <div class="category-select-wrap">
            <select class="category-select" id="home-category-select" aria-label="Filter projects by category">
              <option value="ALL" ${activeCat === 'ALL' ? 'selected' : ''}>All Categories (${baseForScale.length})</option>
              ${categories
                .map((cat) => {
                  const cCount = baseForScale.filter((p) => p.subcategory === cat).length;
                  return `<option value="${escapeHtml(cat)}" ${activeCat === cat ? 'selected' : ''}>${escapeHtml(cat)} (${cCount})</option>`;
                })
                .join('')}
            </select>
          </div>
        </div>
      </div>
      <div class="project-grid">
        ${items.map(renderProjectCard).join('')}
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     VIEW: HOME
     ------------------------------------------------------------------------ */
  function renderHome() {
    return `
      ${renderHeroBanner({
        titleHtml: '<h1 class="hero-title">Melipop</h1>',
        subtitleText: DATA.brand.discipline,
      })}

      ${renderScaleStrip(state.homeScale)}

      <!-- Interactive Featured & Scale-Filtered Project Grid -->
      <section class="section">
        <div class="container" id="home-projects-container">
          ${renderHomeProjectsBlock(state.homeScale, state.homeCategory)}
        </div>
      </section>

      <!-- Direct Access Portals to Work, Shop & Studio -->
      <section class="section section-bordered">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="eyebrow">Navigate the Practice</span>
              <h2 class="section-title">One Studio, Three Doors</h2>
            </div>
          </div>
          <div class="portal-grid">
            <a href="#work" class="portal-card is-yellow">
              <div>
                <span class="eyebrow">01 · Portfolio &amp; Research</span>
                <h3>WORK</h3>
                <p>Projects organised by scale (S, M, L, XL) alongside Computational Design Research, Design Education at FAU UCV, Workshops and Publications.</p>
              </div>
              <span class="portal-cta">Enter Work →</span>
            </a>
            <a href="#shop" class="portal-card is-pink">
              <div>
                <span class="eyebrow">02 · Curated Editions</span>
                <h3>SHOP</h3>
                <p>Games, books, objects and limited editions — including Zooloriko, El viaje de Aurelia, and Feli & Meli’s Palanca / PLANK.</p>
              </div>
              <span class="portal-cta">Browse Shop →</span>
            </a>
            <a href="#studio" class="portal-card is-blue">
              <div>
                <span class="eyebrow">03 · Practice &amp; People</span>
                <h3>STUDIO</h3>
                <p>Profile of Melicia Planchart, selected trajectory across Venezuela and Germany, collaborators, CV, LinkedIn and studio contact.</p>
              </div>
              <span class="portal-cta">Meet the Studio →</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------------------------
     VIEW: WORK (Same Hero Banner & Scale Strip aesthetics + Projects / Research)
     ------------------------------------------------------------------------ */
  function renderWork() {
    const isResearch = state.workTab === 'research';
    const workTabsHtml = `
      <div class="work-mode-tabs hero-work-tabs" role="tablist" aria-label="Work sections">
        <button type="button" role="tab" aria-selected="${!isResearch}" class="work-mode-tab ${!isResearch ? 'is-active' : ''}" data-work-tab="projects">
          Projects by Scale (${DATA.projects.length})
        </button>
        <button type="button" role="tab" aria-selected="${isResearch}" class="work-mode-tab ${isResearch ? 'is-active' : ''}" data-work-tab="research">
          Research &amp; Teaching
        </button>
      </div>
    `;

    return `
      ${renderHeroBanner({
        titleHtml: '<h1 class="hero-title hero-title--work">Projects &amp; Research</h1>',
        subtitleText: 'Work · Scale · Research · Teaching',
        extraHtml: workTabsHtml,
        heroClass: 'hero--work',
      })}

      ${renderScaleStrip(isResearch ? 'NONE' : state.scaleFilter)}

      <section class="section">
        <div class="container" id="work-content-container">
          ${isResearch ? renderResearchAndTeaching() : renderProjectsByScale()}
        </div>
      </section>
    `;
  }

  function renderProjectsByScale() {
    const active = state.scaleFilter;
    const baseList = active === 'ALL' ? DATA.projects : DATA.projects.filter((p) => p.scale === active);
    const categories = [...new Set(baseList.map((p) => p.subcategory))];
    const activeCat = categories.includes(state.workCategory) ? state.workCategory : 'ALL';
    const filtered = activeCat === 'ALL' ? baseList : baseList.filter((p) => p.subcategory === activeCat);

    const filterButtons = `
      <div class="filter-bar">
        <div class="scale-filters" role="group" aria-label="Filter projects by scale">
          <button type="button" class="filter-pill ${active === 'ALL' ? 'is-active' : ''}" data-filter="ALL">
            All Scales (${DATA.projects.length})
          </button>
          ${DATA.scales
            .map((s) => {
              const count = DATA.projects.filter((p) => p.scale === s.id).length;
              return `
                <button type="button" class="filter-pill ${active === s.id ? 'is-active' : ''}" data-filter="${s.id}">
                  <strong>${s.id}</strong> ${escapeHtml(s.label)} (${count})
                </button>
              `;
            })
            .join('')}
        </div>
        <span class="filter-count">Showing ${filtered.length} project${filtered.length === 1 ? '' : 's'}</span>
      </div>
      ${
        active !== 'ALL' && categories.length > 1
          ? `
        <div class="category-filters" role="group" aria-label="Filter by category">
          <button type="button" class="filter-pill ${activeCat === 'ALL' ? 'is-active' : ''}" data-work-category="ALL">
            All Categories (${baseList.length})
          </button>
          ${categories
            .map((cat) => {
              const cCount = baseList.filter((p) => p.subcategory === cat).length;
              return `
                <button type="button" class="filter-pill ${activeCat === cat ? 'is-active' : ''}" data-work-category="${escapeHtml(cat)}">
                  ${escapeHtml(cat)} (${cCount})
                </button>
              `;
            })
            .join('')}
        </div>
      `
          : ''
      }
    `;

    if (active !== 'ALL') {
      const scaleObj = DATA.scales.find((s) => s.id === active);
      return `
        ${filterButtons}
        ${renderScaleGroup(scaleObj, filtered)}
      `;
    }

    return `
      ${filterButtons}
      ${DATA.scales
        .map((scaleObj) => {
          const items = DATA.projects.filter((p) => p.scale === scaleObj.id);
          return renderScaleGroup(scaleObj, items);
        })
        .join('')}
    `;
  }

  function renderScaleGroup(scaleObj, items) {
    // For S Products, preserve the two brief subcategories: Games/toys/books & Object design/prototypes
    if (scaleObj.id === 'S') {
      const subcats = [...new Set(items.map((p) => p.subcategory))];
      return `
        <div class="scale-group">
          <div class="scale-group-header">
            <div class="scale-group-title">
              <span class="scale-badge" data-scale="S">S</span>
              <h2>Products</h2>
            </div>
            <span class="eyebrow">${items.length} projects</span>
          </div>
          ${subcats
            .map((sub) => {
              const subItems = items.filter((p) => p.subcategory === sub);
              return `
                <div class="subgroup-label">${escapeHtml(sub)}</div>
                <div class="project-grid">${subItems.map(renderProjectCard).join('')}</div>
              `;
            })
            .join('')}
        </div>
      `;
    }

    return `
      <div class="scale-group">
        <div class="scale-group-header">
          <div class="scale-group-title">
            <span class="scale-badge" data-scale="${scaleObj.id}">${scaleObj.id}</span>
            <h2>${escapeHtml(scaleObj.label)}</h2>
          </div>
          <span class="eyebrow">${items.length} projects</span>
        </div>
        <div class="project-grid">
          ${items.map(renderProjectCard).join('')}
        </div>
      </div>
    `;
  }

  function renderResearchAndTeaching() {
    const rt = DATA.researchAndTeaching;
    const stScale = state.studentScale;
    const studentItems =
      stScale === 'ALL'
        ? rt.designEducation.parametricDesign.studentWork
        : rt.designEducation.parametricDesign.studentWork.filter((w) => w.scale === stScale);

    return `
      <p class="section-lead" style="margin-top:0; margin-bottom:2rem;">${escapeHtml(rt.intro)}</p>

      <div class="research-grid">
        <!-- 1. Computational Design Research -->
        <article class="research-card">
          <span class="research-num">01</span>
          <h3>Computational Design Research</h3>
          <div class="research-subblock">
            <h4>${escapeHtml(rt.computationalResearch.applied.title)}</h4>
            <ul class="clean-list">
              ${rt.computationalResearch.applied.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}
            </ul>
          </div>
          <div class="research-subblock">
            <h4>${escapeHtml(rt.computationalResearch.academic.title)}</h4>
            <ul class="clean-list">
              ${rt.computationalResearch.academic.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}
            </ul>
          </div>
        </article>

        <!-- 3. Workshops & 4. Publications stacked -->
        <div style="display:grid; gap:1.5rem;">
          <article class="research-card">
            <span class="research-num">03</span>
            <h3>Workshops</h3>
            <ul class="clean-list">
              ${rt.workshops
                .map((w) => `<li><strong>${escapeHtml(w.title)}</strong> — ${escapeHtml(w.desc)}</li>`)
                .join('')}
            </ul>
          </article>

          <article class="research-card">
            <span class="research-num">04</span>
            <h3>Publications</h3>
            <ul class="clean-list">
              ${rt.publications
                .map((pub) => `<li><strong>${escapeHtml(pub.title)}</strong> — ${escapeHtml(pub.desc)}</li>`)
                .join('')}
            </ul>
          </article>
        </div>

        <!-- 2. Design Education (full width with S/M/L student showcase) -->
        <article class="research-card is-wide">
          <span class="research-num">02</span>
          <h3>Design Education</h3>
          <div class="research-subblock">
            <h4>${escapeHtml(rt.designEducation.objectDesign.title)} · <span style="font-weight:400; color:var(--ink-muted)">${escapeHtml(rt.designEducation.objectDesign.institution)}</span></h4>
            <p style="margin:0; color:var(--ink-muted); font-size:0.94rem;">${escapeHtml(rt.designEducation.objectDesign.summary)}</p>
          </div>
          <div class="research-subblock">
            <h4>${escapeHtml(rt.designEducation.parametricDesign.title)} · <span style="font-weight:400; color:var(--ink-muted)">${escapeHtml(rt.designEducation.parametricDesign.institution)}</span></h4>
            <ul class="clean-list">
              ${rt.designEducation.parametricDesign.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}
            </ul>

            <div class="student-showcase">
              <div class="student-showcase-head">
                <strong style="font-size:0.9rem;">Selected Student Work (organised by scale S, M, L)</strong>
                <div class="scale-filters">
                  ${['ALL', 'S', 'M', 'L']
                    .map(
                      (sc) => `
                    <button type="button" class="filter-pill ${stScale === sc ? 'is-active' : ''}" data-student-scale="${sc}" style="padding:0.28rem 0.7rem; font-size:0.78rem;">
                      ${sc === 'ALL' ? 'All' : sc}
                    </button>
                  `
                    )
                    .join('')}
                </div>
              </div>
              <div class="student-grid">
                ${studentItems
                  .map(
                    (st) => `
                  <div class="student-item">
                    <div class="student-item-top">
                      <span class="scale-badge" data-scale="${st.scale}">${st.scale}</span>
                    </div>
                    <strong>${escapeHtml(st.title)}</strong>
                    <span>${escapeHtml(st.method)}</span>
                    <div style="margin-top:0.5rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-soft);">
                      ${escapeHtml(st.student)}
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  /* ------------------------------------------------------------------------
     VIEW: SHOP
     ------------------------------------------------------------------------ */
  function renderShop() {
    return `
      <section class="page-banner banner-shop">
        <div class="container">
          <span class="eyebrow">Shop · Games, Books, Objects &amp; Editions</span>
          <h1 class="section-title">Curated Studio Editions</h1>
          <p class="section-lead">${escapeHtml(DATA.shop.intro)}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="shop-grid">
            ${DATA.shop.items
              .map(
                (item) => `
              <article class="shop-card">
                <div class="shop-card-media">
                  ${renderMedia(item, 'S')}
                </div>
                <div class="shop-card-body">
                  <span class="brand-pill">${escapeHtml(item.brand)}</span>
                  <h2 class="project-card-title" style="margin-top:0.25rem;">${escapeHtml(item.title)}</h2>
                  <p class="project-card-context">${escapeHtml(item.summary)}</p>
                  <div class="shop-card-footer">
                    <span class="shop-status">${escapeHtml(item.status)}</span>
                    <button type="button" class="btn btn-pink" style="padding:0.42rem 0.85rem; font-size:0.8rem;" data-open-shop="${escapeHtml(item.id)}">
                      Details / Inquire
                    </button>
                  </div>
                </div>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- Brand Relationships (PDF page 6) -->
      <section class="section section-bordered">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="eyebrow">Ecosystem</span>
              <h2 class="section-title">Brand Relationships</h2>
            </div>
          </div>
          <div class="brand-rel-grid">
            ${DATA.shop.brandRelationships
              .map(
                (b) => `
              <div class="brand-rel-card">
                <h3>${escapeHtml(b.name).replace(/Design Lab/g, '<span class="brand-sub">DESIGN LAB</span>')}</h3>
                <p>${escapeHtml(b.role)}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------------------------
     VIEW: STUDIO / ABOUT
     ------------------------------------------------------------------------ */
  function renderStudio() {
    const st = DATA.studio;
    return `
      <section class="page-banner banner-studio">
        <div class="container">
          <span class="eyebrow">Studio · Profile, Trajectory &amp; Collaborators</span>
          <h1 class="section-title studio-banner-title">Melipop <span class="studio-banner-sub">DESIGN LAB</span></h1>
          <p class="section-lead">Founded by Melicia Planchart — architect, computational designer, and educator.</p>
        </div>
      </section>

      <section class="section">
        <div class="container studio-layout">
          <div>
            <span class="eyebrow">Profile</span>
            <p class="profile-statement" style="margin-top:0.6rem;">${escapeHtml(st.profile)}</p>

            <div style="margin-top:2.5rem;">
              <span class="eyebrow">Selected Trajectory</span>
              <ol class="trajectory-list" style="margin-top:0.85rem;">
                ${st.trajectory
                  .map(
                    (step, i) => `
                  <li>
                    <span class="trajectory-index">0${i + 1}</span>
                    <strong>${escapeHtml(step)}</strong>
                  </li>
                `
                  )
                  .join('')}
              </ol>
            </div>

            ${
              st.cv
                ? `
              <div id="studio-cv" style="margin-top:2.75rem;">
                <span class="eyebrow">Short CV &amp; Capabilities</span>
                <div class="cv-grid">
                  <div class="cv-block">
                    <h4>Education</h4>
                    <ul class="clean-list">
                      ${st.cv.education.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="cv-block">
                    <h4>Experience</h4>
                    <ul class="clean-list">
                      ${st.cv.experience.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                    </ul>
                  </div>
                </div>
                <div class="skills-grid">
                  ${Object.entries(st.cv.skills)
                    .map(
                      ([group, items]) => `
                    <div class="skills-block">
                      <h4>${escapeHtml(group)}</h4>
                      <div class="skill-tags">
                        ${items.map((sk) => `<span class="skill-tag">${escapeHtml(sk)}</span>`).join('')}
                      </div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }

            <div id="studio-collaborators" style="margin-top:2.75rem;">
              <span class="eyebrow">Credits &amp; Collaborations</span>
              <p style="color:var(--ink-muted); margin:0.65rem 0 0;">${escapeHtml(st.creditsStatement)}</p>
              <div class="collaborator-chips">
                ${st.collaborators
                  .map(
                    (c) => `
                  <div class="collab-chip">
                    <strong>${escapeHtml(c.name)}</strong>
                    <span>${escapeHtml(c.context)}</span>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>

          <aside>
            ${
              st.portrait
                ? `
              <div class="studio-card studio-portrait-card">
                <div class="studio-portrait-frame">
                  <img src="${escapeHtml(st.portrait)}" alt="${escapeHtml(st.portraitAlt || 'Melicia Planchart')}" loading="lazy" />
                </div>
                <div class="studio-portrait-meta">
                  <strong>Melicia Planchart</strong>
                  <span>Arch., M.Eng. Computational Designer + Lecturer</span>
                  <div class="studio-portrait-contact">
                    <span>${escapeHtml(st.links.location || 'Berlin, Germany')}</span>
                    ${st.links.phone ? `<span>· ${escapeHtml(st.links.phone)}</span>` : ''}
                  </div>
                </div>
              </div>
            `
                : ''
            }
            <div class="studio-card">
              <span class="eyebrow">Studio Links</span>
              <h3 style="margin-top:0.4rem;">Connect &amp; Resources</h3>
              <div class="studio-links-grid">
                <a href="#studio/collaborators" class="btn">Collaborators</a>
                <a href="${escapeHtml(st.links.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-blue">LinkedIn ↗</a>
                <button type="button" class="btn btn-yellow" id="download-cv-btn">Download CV ↓</button>
                <a href="mailto:${escapeHtml(st.links.email)}" class="btn btn-pink">Email Studio</a>
              </div>
            </div>

            <div class="studio-card" id="studio-contact">
              <span class="eyebrow">Contact</span>
              <h3 style="margin-top:0.4rem;">Start a Conversation</h3>
              <p style="margin:0; font-size:0.9rem; color:var(--ink-muted);">
                For spatial or product commissions, workshops, research collaborations, or shop editions.
              </p>
              <form class="contact-form" id="contact-form">
                <div class="form-row">
                  <div class="field">
                    <label for="c-name">Name</label>
                    <input id="c-name" name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div class="field">
                    <label for="c-email">Email</label>
                    <input id="c-email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div class="field">
                  <label for="c-topic">Topic</label>
                  <select id="c-topic" name="topic">
                    <option>Spatial / Interior Project</option>
                    <option>Product / Game Collaboration</option>
                    <option>Shop Edition Inquiry</option>
                    <option>Teaching / Workshop / Research</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div class="field">
                  <label for="c-message">Message</label>
                  <textarea id="c-message" name="message" required placeholder="Tell us about your project or inquiry..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="justify-content:center;">Send Inquiry →</button>
                <div class="form-feedback" id="contact-feedback" role="status"></div>
              </form>
            </div>
          </aside>
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------------------------
     DETAIL MODAL (Project Page: Story / Process / Outcome / Credits)
     ------------------------------------------------------------------------ */
  function openProjectModal(projectId) {
    const project = DATA.projects.find((p) => p.id === projectId);
    if (!project) return;
    state.activeModalProject = project.id;

    modalBreadcrumb.innerHTML = `
      <span class="scale-badge" data-scale="${escapeHtml(project.scale)}">${escapeHtml(project.scale)}</span>
      <span>${escapeHtml(project.subcategory)}</span>
      <span>·</span>
      <span>${escapeHtml(project.year)}</span>
    `;

    const gallery = project.images && project.images.length ? project.images : project.image ? [project.image] : [];
    const hasGallery = gallery.length > 1;

    const mediaMarkup = gallery.length
      ? `
        <div class="detail-gallery" id="detail-gallery">
          <div class="detail-hero detail-gallery-stage">
            <img id="detail-gallery-main" src="${escapeHtml(gallery[0])}" alt="${escapeHtml(project.title)}" />
            ${
              hasGallery
                ? `
              <div class="detail-gallery-nav">
                <button type="button" class="gallery-arrow" id="gallery-prev" aria-label="Previous project image">←</button>
                <span class="gallery-counter" id="gallery-counter">1 / ${gallery.length}</span>
                <button type="button" class="gallery-arrow" id="gallery-next" aria-label="Next project image">→</button>
              </div>
            `
                : ''
            }
          </div>
          ${
            hasGallery
              ? `
            <div class="detail-gallery-thumbs" role="tablist" aria-label="Project gallery thumbnails">
              ${gallery
                .map(
                  (src, idx) => `
                <button type="button" role="tab" class="gallery-thumb ${idx === 0 ? 'is-active' : ''}" data-gallery-idx="${idx}" aria-selected="${idx === 0}" aria-label="View image ${idx + 1} of ${gallery.length}">
                  <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} — view ${idx + 1}" loading="lazy" />
                </button>
              `
                )
                .join('')}
            </div>
          `
              : ''
          }
        </div>
      `
      : `<div class="detail-hero">${renderMedia(project)}</div>`;

    modalBody.innerHTML = `
      ${mediaMarkup}
      <h2 class="detail-title" id="modal-title">${escapeHtml(project.title)}</h2>
      <p class="detail-subtitle">${escapeHtml(project.role)} · ${escapeHtml(project.studio)}</p>

      <div class="detail-sections">
        <div class="detail-block">
          <div class="detail-block-label">01 · Story</div>
          <p>${escapeHtml(project.story)}</p>
        </div>
        <div class="detail-block">
          <div class="detail-block-label">02 · Process</div>
          <p>${escapeHtml(project.process)}</p>
        </div>
        <div class="detail-block">
          <div class="detail-block-label">03 · Outcome</div>
          <p>${escapeHtml(project.outcome)}</p>
          ${
            project.highlights && project.highlights.length
              ? `
            <ul class="clean-list" style="margin-top:0.9rem;">
              ${project.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
            </ul>
          `
              : ''
          }
        </div>
        <div class="detail-block">
          <div class="detail-block-label">04 · Credits</div>
          <dl class="credits-table">
            <div class="credit-row"><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div>
            <div class="credit-row"><dt>Studio / Institution</dt><dd>${escapeHtml(project.studio)}</dd></div>
            <div class="credit-row"><dt>Collaborators</dt><dd>${escapeHtml(project.collaborators)}</dd></div>
            <div class="credit-row"><dt>Client</dt><dd>${escapeHtml(project.client)}</dd></div>
            <div class="credit-row"><dt>Location</dt><dd>${escapeHtml(project.location)}</dd></div>
            <div class="credit-row"><dt>Year</dt><dd>${escapeHtml(project.year)}</dd></div>
          </dl>
        </div>
        ${
          project.links && project.links.length
            ? `
          <div class="detail-block">
            <div class="detail-block-label">05 · Links &amp; Resources</div>
            <div class="detail-links">
              ${project.links
                .map(
                  (lnk) => `
                <a href="${escapeHtml(lnk.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-yellow">${escapeHtml(lnk.label)}</a>
              `
                )
                .join('')}
            </div>
          </div>
        `
            : ''
        }
      </div>
    `;

    if (hasGallery) {
      let currentIdx = 0;
      const mainImg = document.getElementById('detail-gallery-main');
      const counter = document.getElementById('gallery-counter');
      const thumbs = modalBody.querySelectorAll('[data-gallery-idx]');
      const prev = document.getElementById('gallery-prev');
      const next = document.getElementById('gallery-next');

      function setSlide(idx) {
        currentIdx = (idx + gallery.length) % gallery.length;
        if (mainImg) mainImg.src = gallery[currentIdx];
        if (counter) counter.textContent = `${currentIdx + 1} / ${gallery.length}`;
        thumbs.forEach((t, i) => {
          const active = i === currentIdx;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', String(active));
        });
      }

      if (prev) prev.addEventListener('click', () => setSlide(currentIdx - 1));
      if (next) next.addEventListener('click', () => setSlide(currentIdx + 1));
      thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => setSlide(Number(thumb.dataset.galleryIdx)));
      });
    }

    showModal();
  }

  function openShopModal(itemId) {
    const item = DATA.shop.items.find((i) => i.id === itemId);
    if (!item) return;

    modalBreadcrumb.innerHTML = `
      <span class="brand-pill">${escapeHtml(item.brand)}</span>
      <span>${escapeHtml(item.category)}</span>
    `;

    modalBody.innerHTML = `
      <div class="detail-hero">${renderMedia(item, 'S')}</div>
      <h2 class="detail-title" id="modal-title">${escapeHtml(item.title)}</h2>
      <p class="detail-subtitle">${escapeHtml(item.status)} · ${escapeHtml(item.brand)}</p>

      <div class="detail-sections">
        <div class="detail-block">
          <div class="detail-block-label">About this Edition</div>
          <p>${escapeHtml(item.summary)}</p>
          <p style="margin-top:0.75rem; color:var(--ink-muted);">${escapeHtml(item.details)}</p>
        </div>
        <div class="detail-block">
          <div class="detail-block-label">Request / Inquire</div>
          <p style="margin-bottom:1rem;">Interested in <strong>${escapeHtml(item.title)}</strong>? Send a quick note to the studio and we will reply with current availability.</p>
          <a href="#studio/contact" class="btn btn-pink" id="modal-inquire-link">Go to Studio Contact →</a>
        </div>
      </div>
    `;

    showModal();
  }

  function showModal() {
    applyBrandFont(modalBreadcrumb);
    applyBrandFont(modalBody);
    modalBackdrop.hidden = false;
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalBackdrop.hidden = true;
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (state.activeModalProject && window.location.hash.startsWith('#project/')) {
      window.location.hash = '#work';
    }
    state.activeModalProject = null;
  }

  /* ------------------------------------------------------------------------
     ROUTER & RENDER CYCLE
     ------------------------------------------------------------------------ */
  function parseHash() {
    const raw = (window.location.hash || '#home').replace(/^#/, '');
    const [route, sub] = raw.split('/');

    if (route === 'project' && sub) {
      state.view = 'work';
      render();
      openProjectModal(sub);
      return;
    }

    if (route === 'work') {
      state.view = 'work';
      if (sub === 'research') {
        state.workTab = 'research';
      } else if (['S', 'M', 'L', 'XL'].includes(sub)) {
        state.workTab = 'projects';
        state.scaleFilter = sub;
      } else {
        state.workTab = 'projects';
        state.scaleFilter = 'ALL';
      }
    } else if (route === 'shop') {
      state.view = 'shop';
    } else if (route === 'studio') {
      state.view = 'studio';
    } else {
      state.view = 'home';
    }

    render();

    if (route === 'studio' && sub) {
      const target = document.getElementById(`studio-${sub}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function updateActiveNav() {
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.nav === state.view);
    });
    navEl.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function render() {
    stopHeroCarousel();
    updateActiveNav();
    if (state.view === 'work') {
      mainEl.innerHTML = renderWork();
    } else if (state.view === 'shop') {
      mainEl.innerHTML = renderShop();
    } else if (state.view === 'studio') {
      mainEl.innerHTML = renderStudio();
    } else {
      mainEl.innerHTML = renderHome();
    }
    applyBrandFont(mainEl);
    bindViewEvents();
  }

  function initHeroCarousel() {
    const slides = DATA.heroCarousel || [];
    const heroEl = mainEl.querySelector('.hero--carousel');
    if (!heroEl || slides.length < 2) return;

    const slideEls = heroEl.querySelectorAll('[data-hero-slide]');
    const dotEls = heroEl.querySelectorAll('[data-hero-dot]');
    const captionBtn = document.getElementById('hero-caption-btn');
    const counterEl = document.getElementById('hero-slide-counter');
    const titleEl = document.getElementById('hero-slide-title');
    const catEl = document.getElementById('hero-slide-cat');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');

    function goTo(index) {
      state.heroSlide = (index + slides.length) % slides.length;
      const current = slides[state.heroSlide];

      slideEls.forEach((el, i) => {
        el.classList.toggle('is-active', i === state.heroSlide);
      });
      dotEls.forEach((dot, i) => {
        const active = i === state.heroSlide;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', String(active));
      });
      if (captionBtn) captionBtn.dataset.openProject = current.projectId;
      if (counterEl) counterEl.textContent = `0${state.heroSlide + 1} / 0${slides.length}`;
      if (titleEl) titleEl.textContent = current.caption;
      if (catEl) catEl.textContent = current.category;
    }

    function startAutoplay() {
      stopHeroCarousel();
      heroCarouselTimer = setInterval(() => {
        if (document.hidden || !modalBackdrop.hidden) return;
        goTo(state.heroSlide + 1);
      }, 5500);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goTo(state.heroSlide - 1);
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goTo(state.heroSlide + 1);
        startAutoplay();
      });
    }
    dotEls.forEach((dot) => {
      dot.addEventListener('click', () => {
        goTo(Number(dot.dataset.heroDot));
        startAutoplay();
      });
    });

    heroEl.addEventListener('mouseenter', stopHeroCarousel);
    heroEl.addEventListener('mouseleave', startAutoplay);
    heroEl.addEventListener('focusin', stopHeroCarousel);
    heroEl.addEventListener('focusout', startAutoplay);

    // Sync hero banner image & live-filter project cards when hovering or clicking S / M / L / XL scale bar
    const scaleStripEl = mainEl.querySelector('.scale-strip');
    if (scaleStripEl) {
      const updateHomeGrid = (previewScale, previewCategory) => {
        const container = document.getElementById('home-projects-container');
        if (!container) return;
        container.innerHTML = renderHomeProjectsBlock(previewScale, previewCategory);
        applyBrandFont(container);
        bindProjectCardClicks(container);
        bindHomeFilterButtons(container);
      };

      const updateWorkGrid = (previewScale, previewCategory) => {
        const container = document.getElementById('work-content-container');
        if (!container || state.workTab === 'research') return;
        const prevScale = state.scaleFilter;
        const prevCat = state.workCategory;
        state.scaleFilter = previewScale;
        state.workCategory = previewCategory;
        container.innerHTML = renderProjectsByScale();
        state.scaleFilter = prevScale;
        state.workCategory = prevCat;
        applyBrandFont(container);
        bindProjectCardClicks(container);
        bindWorkFilterButtons(container);
      };

      scaleStripEl.querySelectorAll('.scale-strip-item[data-scale]').forEach((item) => {
        const scaleId = item.dataset.scale;
        const activateScalePreview = () => {
          const targetIdx = slides.findIndex((s) => s.scale === scaleId);
          if (targetIdx !== -1) {
            stopHeroCarousel();
            goTo(targetIdx);
          }
          if (state.view === 'home') {
            updateHomeGrid(scaleId, scaleId === state.homeScale ? state.homeCategory : 'ALL');
          } else if (state.view === 'work' && state.workTab === 'projects') {
            updateWorkGrid(scaleId, scaleId === state.scaleFilter ? state.workCategory : 'ALL');
          }
        };

        item.addEventListener('mouseenter', activateScalePreview);
        item.addEventListener('focus', activateScalePreview);
        item.addEventListener('click', () => {
          if (state.view === 'home') {
            state.homeScale = state.homeScale === scaleId ? 'ALL' : scaleId;
            state.homeCategory = 'ALL';
            scaleStripEl.querySelectorAll('.scale-strip-item[data-scale]').forEach((el) => {
              const selected = el.dataset.scale === state.homeScale;
              el.classList.toggle('is-selected', selected);
              el.setAttribute('aria-pressed', String(selected));
            });
            updateHomeGrid(state.homeScale, state.homeCategory);
          } else if (state.view === 'work') {
            state.workTab = 'projects';
            state.scaleFilter = state.scaleFilter === scaleId ? 'ALL' : scaleId;
            state.workCategory = 'ALL';
            render();
          }
        });
      });

      scaleStripEl.addEventListener('mouseleave', () => {
        if (state.view === 'home') {
          updateHomeGrid(state.homeScale, state.homeCategory);
        } else if (state.view === 'work' && state.workTab === 'projects') {
          updateWorkGrid(state.scaleFilter, state.workCategory);
        }
        startAutoplay();
      });
    }

    startAutoplay();
  }

  function bindProjectCardClicks(root) {
    root.querySelectorAll('[data-open-project]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openProjectModal(btn.dataset.openProject);
      });
    });
  }

  function bindHomeFilterButtons(root) {
    const catSelect = root.querySelector('#home-category-select');
    if (catSelect) {
      catSelect.addEventListener('change', () => {
        state.homeCategory = catSelect.value;
        const container = document.getElementById('home-projects-container');
        if (container) {
          container.innerHTML = renderHomeProjectsBlock(state.homeScale, state.homeCategory);
          applyBrandFont(container);
          bindProjectCardClicks(container);
          bindHomeFilterButtons(container);
        }
      });
    }
    root.querySelectorAll('[data-home-reset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.homeScale = 'ALL';
        state.homeCategory = 'ALL';
        mainEl.querySelectorAll('.scale-strip-item[data-scale]').forEach((el) => {
          el.classList.remove('is-selected');
          el.setAttribute('aria-pressed', 'false');
        });
        const container = document.getElementById('home-projects-container');
        if (container) {
          container.innerHTML = renderHomeProjectsBlock('ALL', 'ALL');
          applyBrandFont(container);
          bindProjectCardClicks(container);
          bindHomeFilterButtons(container);
        }
      });
    });
  }

  function bindWorkFilterButtons(root) {
    root.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.scaleFilter = btn.dataset.filter;
        state.workCategory = 'ALL';
        render();
      });
    });
    root.querySelectorAll('[data-work-category]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.workCategory = btn.dataset.workCategory;
        render();
      });
    });
  }

  function bindViewEvents() {
    initHeroCarousel();
    bindProjectCardClicks(mainEl);
    bindHomeFilterButtons(mainEl);
    bindWorkFilterButtons(mainEl);

    // Work top tabs (Projects vs Research & Teaching)
    mainEl.querySelectorAll('[data-work-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.workTab = tab.dataset.workTab;
        render();
      });
    });

    // Student work scale filters
    mainEl.querySelectorAll('[data-student-scale]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.studentScale = btn.dataset.studentScale;
        render();
      });
    });

    // Shop item modal
    mainEl.querySelectorAll('[data-open-shop]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openShopModal(btn.dataset.openShop);
      });
    });

    // Studio CV placeholder notice
    const cvBtn = document.getElementById('download-cv-btn');
    if (cvBtn) {
      cvBtn.addEventListener('click', () => {
        alert('Add your PDF file (e.g. assets/Melicia_Planchart_CV.pdf) and update studio.links.cvUrl in js/data.js to enable direct CV download.');
      });
    }

    // Studio contact form
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#c-name').value.trim();
        const topic = form.querySelector('#c-topic').value;
        const feedback = document.getElementById('contact-feedback');
        feedback.textContent = `Thank you, ${name}! Your "${topic}" message is ready. Connect this form to Formspree, Netlify Forms, or your email endpoint when deploying.`;
        feedback.classList.add('is-visible');
        form.reset();
      });
    }
  }

  /* ------------------------------------------------------------------------
     Global Event Listeners
     ------------------------------------------------------------------------ */
  menuToggle.addEventListener('click', () => {
    const open = navEl.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  modalBody.addEventListener('click', (e) => {
    if (e.target.closest('#modal-inquire-link')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.hidden) closeModal();
  });

  window.addEventListener('hashchange', parseHash);

  // Light / Dark Theme Toggle (persisted in localStorage)
  const themeToggleBtn = document.getElementById('theme-toggle');
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-pressed', String(isDark));
      const label = themeToggleBtn.querySelector('.theme-toggle-label');
      const icon = themeToggleBtn.querySelector('.theme-toggle-icon');
      if (label) label.textContent = isDark ? 'LIGHT' : 'DARK';
      if (icon) icon.textContent = isDark ? '☀' : '◐';
    }
  }
  const savedTheme = (() => {
    try { return localStorage.getItem('melipop-theme'); } catch { return null; }
  })();
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('melipop-theme', next); } catch {}
    });
  }

  // Set footer year, style header/footer brand word & boot
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  applyBrandFont(document.querySelector('.site-header'));
  applyBrandFont(document.querySelector('.site-footer'));
  parseHash();
})();
