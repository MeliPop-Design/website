/* ==========================================================================
   MeliPop Design Lab — Interactive SPA Router & View Renderer
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
    studentScale: 'ALL',
    activeModalProject: null,
  };

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

  function renderMedia(item, scaleOverride) {
    if (item.image) {
      return `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
    }
    return ART.getArtworkSVG(item.motif, scaleOverride || item.scale || 'S');
  }

  function renderProjectCard(project) {
    return `
      <button type="button" class="project-card" data-open-project="${escapeHtml(project.id)}">
        <div class="project-card-media">
          ${renderMedia(project)}
          <div class="project-card-badges">
            <span class="scale-badge" data-scale="${escapeHtml(project.scale)}">${escapeHtml(project.scale)}</span>
            <span class="year-pill">${escapeHtml(project.year)}</span>
          </div>
        </div>
        <div class="project-card-body">
          <span class="project-card-sub">${escapeHtml(project.subcategory)}</span>
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
     VIEW: HOME
     ------------------------------------------------------------------------ */
  function renderHome() {
    const featured = DATA.projects.filter((p) => p.featured);
    const scaleCounts = DATA.scales.map((s) => ({
      ...s,
      count: DATA.projects.filter((p) => p.scale === s.id).length,
    }));

    return `
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <span class="eyebrow">${escapeHtml(DATA.brand.discipline)}</span>
            <h1 class="hero-title">${escapeHtml(DATA.brand.name)}</h1>
            <div class="hero-mantra" aria-label="Play. Make. Transform.">
              <span class="mantra-word mantra-play">Play.</span>
              <span class="mantra-word mantra-make">Make.</span>
              <span class="mantra-word mantra-transform">Transform.</span>
            </div>
          </div>
          <div>
            <blockquote class="hero-quote">“${escapeHtml(DATA.brand.quote)}”</blockquote>
            <p class="hero-intro">${escapeHtml(DATA.brand.summary)}</p>
            <div class="hero-actions">
              <a href="#work" class="btn btn-primary">Explore Work →</a>
              <a href="#shop" class="btn btn-pink">Visit Shop</a>
              <a href="#studio" class="btn btn-blue">About Studio</a>
            </div>
          </div>
        </div>
      </section>

      <!-- S / M / L / XL Scale Index Strip -->
      <section class="scale-strip" aria-label="Projects by Scale">
        ${scaleCounts
          .map(
            (s) => `
          <a href="#work/${s.id}" class="scale-strip-item">
            <div class="scale-strip-meta">
              <strong>${escapeHtml(s.label)}</strong>
              <span>${escapeHtml(s.shortDesc)}</span>
            </div>
            <span class="scale-badge" data-scale="${s.id}">${s.id} · ${s.count}</span>
          </a>
        `
          )
          .join('')}
      </section>

      <!-- Featured Project Grid (mixing S, M, L, XL) -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <span class="eyebrow">Selected Across Scales · S / M / L / XL</span>
              <h2 class="section-title">Featured Projects</h2>
            </div>
            <a href="#work" class="btn">All ${DATA.projects.length} Projects →</a>
          </div>
          <div class="project-grid">
            ${featured.map(renderProjectCard).join('')}
          </div>
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
                <p>Games, books, objects and limited editions — including Zooloriko, El viaje de Aurelia, and Feli and Meli’s Palanca / PLANK.</p>
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
     VIEW: WORK (Strictly two sections: Projects + Research and Teaching)
     ------------------------------------------------------------------------ */
  function renderWork() {
    const isResearch = state.workTab === 'research';

    return `
      <section class="page-banner banner-work">
        <div class="container">
          <span class="eyebrow">Work · MeliPop Design Lab</span>
          <h1 class="section-title">Projects &amp; Research</h1>
          <p class="section-lead">
            Work has two sections only: <strong>Projects</strong> organised by scale (S, M, L, XL), and <strong>Research and Teaching</strong> covering computational research, education, workshops and publications.
          </p>
          <div class="work-mode-tabs" role="tablist" aria-label="Work sections">
            <button type="button" role="tab" aria-selected="${!isResearch}" class="work-mode-tab ${!isResearch ? 'is-active' : ''}" data-work-tab="projects">
              Projects by Scale (${DATA.projects.length})
            </button>
            <button type="button" role="tab" aria-selected="${isResearch}" class="work-mode-tab ${isResearch ? 'is-active' : ''}" data-work-tab="research">
              Research &amp; Teaching
            </button>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${isResearch ? renderResearchAndTeaching() : renderProjectsByScale()}
        </div>
      </section>
    `;
  }

  function renderProjectsByScale() {
    const active = state.scaleFilter;
    const filtered =
      active === 'ALL' ? DATA.projects : DATA.projects.filter((p) => p.scale === active);

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
                <h3>${escapeHtml(b.name)}</h3>
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
          <h1 class="section-title">MeliPop Design Lab</h1>
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

    modalBody.innerHTML = `
      <div class="detail-hero">${renderMedia(project)}</div>
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
      </div>
    `;

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
    bindViewEvents();
  }

  function bindViewEvents() {
    // Project cards
    mainEl.querySelectorAll('[data-open-project]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openProjectModal(btn.dataset.openProject);
      });
    });

    // Work top tabs (Projects vs Research & Teaching)
    mainEl.querySelectorAll('[data-work-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.workTab = tab.dataset.workTab;
        render();
      });
    });

    // Scale filters
    mainEl.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.scaleFilter = btn.dataset.filter;
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

  // Set footer year & boot
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  parseHash();
})();
