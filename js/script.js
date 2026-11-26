/**
 * ==========================================================================
 * Prof. Karel Berka Homepage - Interactivity & Dynamic Rendering (Vanilla JS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollHeader();
    initMolecularCanvas();
    initBibliometricsDashboard();
    initPublicationsSection();
    initToolsSection();
    initCopyDOI();
    initContactForm();
});

/* ==========================================================================
   1. Theme System (Light / Dark)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'light') {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }
    } else {
        body.classList.add('dark-theme');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            window.dispatchEvent(new CustomEvent('themechanged', { detail: { isDark } }));
        });
    }
}

/* ==========================================================================
   2. Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!menuToggle || !navMenu) return;

    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}

/* ==========================================================================
   3. Sticky Header and Scrollspy
   ========================================================================== */
function initScrollHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
            const navMenu = document.getElementById('nav-menu');
            if (currentScroll > lastScroll && (!navMenu || !navMenu.classList.contains('open'))) {
                header.classList.add('scroll-down');
            } else {
                header.classList.remove('scroll-down');
            }
        } else {
            header.style.boxShadow = 'none';
            header.classList.remove('scroll-down');
        }
        lastScroll = currentScroll;

        let activeSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                activeSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   4. Interactive Molecular Background Canvas + Language Toggle
   ========================================================================== */
function initMolecularCanvas() {
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('kb-lang') || 'en';

    function applyLanguage(lang) {
        const langEnElements = document.querySelectorAll('.lang-en');
        const langCsElements = document.querySelectorAll('.lang-cs');
        if (lang === 'cs') {
            langEnElements.forEach(el => { el.style.display = 'none'; });
            langCsElements.forEach(el => { el.style.display = ''; });
            document.querySelectorAll('[data-placeholder-cs]').forEach(el => {
                el.placeholder = el.getAttribute('data-placeholder-cs');
            });
        } else {
            langCsElements.forEach(el => { el.style.display = 'none'; });
            langEnElements.forEach(el => { el.style.display = ''; });
            document.querySelectorAll('[data-placeholder-en]').forEach(el => {
                el.placeholder = el.getAttribute('data-placeholder-en');
            });
        }
        document.documentElement.lang = lang;
        localStorage.setItem('kb-lang', lang);
        window.dispatchEvent(new CustomEvent('langchanged', { detail: { lang } }));
    }

    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'cs' : 'en';
            applyLanguage(currentLang);
        });
    }

    const canvas = document.getElementById('molecular-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const mouse = { x: null, y: null, radius: 180 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    class MoleculeNode {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 4 + 2;
            const rand = Math.random();
            if (rand < 0.5) this.colorType = 'cyan';
            else if (rand < 0.8) this.colorType = 'teal';
            else this.colorType = 'purple';
        }
        update() {
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
            this.x += this.vx;
            this.y += this.vy;
        }
        draw(isDark) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            let color = 'rgba(6, 182, 212, 0.4)';
            if (isDark) {
                if (this.colorType === 'cyan') color = 'rgba(34, 211, 238, 0.6)';
                else if (this.colorType === 'teal') color = 'rgba(45, 212, 191, 0.6)';
                else color = 'rgba(129, 140, 248, 0.5)';
            } else {
                if (this.colorType === 'cyan') color = 'rgba(2, 132, 199, 0.4)';
                else if (this.colorType === 'teal') color = 'rgba(15, 118, 110, 0.4)';
                else color = 'rgba(79, 70, 229, 0.3)';
            }
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function setupParticles(count) {
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new MoleculeNode(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
        setupParticles(Math.min(Math.max(particleCount, 40), 90));
    }

    function drawConnections(isDark) {
        const maxDist = 130;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const alpha = (1 - (dist / maxDist)) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    let strokeStyle = `rgba(148, 163, 184, ${alpha})`;
                    if (particles[i].colorType === 'cyan' && particles[j].colorType === 'cyan') {
                        strokeStyle = isDark
                            ? `rgba(34, 211, 238, ${alpha * 1.5})`
                            : `rgba(2, 132, 199, ${alpha * 1.2})`;
                    }
                    ctx.strokeStyle = strokeStyle;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            if (mouse.x !== null && mouse.y !== null) {
                const dxMouse = particles[i].x - mouse.x;
                const dyMouse = particles[i].y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < mouse.radius) {
                    const alpha = (1 - (distMouse / mouse.radius)) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = isDark
                        ? `rgba(6, 182, 212, ${alpha})`
                        : `rgba(2, 132, 199, ${alpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }
        }
    }

    let isDarkTheme = document.body.classList.contains('dark-theme');
    window.addEventListener('themechanged', e => { isDarkTheme = e.detail.isDark; });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(isDarkTheme); });
        drawConnections(isDarkTheme);
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

/* ==========================================================================
   5. Bibliometrics Multi-Source Dashboard (WoS, Scopus, OpenAlex, BIP!, Scholar)
   ========================================================================== */
function formatNumber(n, lang) {
    if (n === null || n === undefined) return '—';
    try {
        return Number(n).toLocaleString(lang === 'cs' ? 'cs-CZ' : 'en-US');
    } catch {
        return String(n);
    }
}

function initBibliometricsDashboard() {
    const container = document.getElementById('bibliometrics-dashboard');
    if (!container || typeof bibliometricsData === 'undefined') return;

    function renderDashboard() {
        const lang = document.documentElement.lang || localStorage.getItem('kb-lang') || 'en';
        const isCs = lang === 'cs';
        const src = bibliometricsData.sources || {};
        const updatedDate = (bibliometricsData.generated_at || '').slice(0, 10);

        const wos = src.wos || {};
        const scopus = src.scopus || {};
        const oa = src.openalex || {};
        const bip = src.bip || {};
        const gs = src.scholar || {};

        const cards = [
            {
                cls: 'src-wos',
                name: 'Web of Science',
                url: wos.profile_url || 'https://www.webofscience.com/wos/author/record/E-2839-2010',
                badge: wos.fetched_at ? wos.fetched_at : (isCs ? 'Ruční' : 'Manual'),
                live: false,
                citations: wos.citations != null ? `${formatNumber(wos.citations, lang)}+` : '—',
                hIndex: wos.h_index != null ? wos.h_index : '—',
                sub: isCs
                    ? `${wos.works_count || '112'}+ IF článků &bull; ${formatNumber(wos.citations_without_self, lang)} bez autocitací`
                    : `${wos.works_count || '112'}+ IF articles &bull; ${formatNumber(wos.citations_without_self, lang)} excl. self`
            },
            {
                cls: 'src-scopus',
                name: 'Scopus',
                url: scopus.profile_url || 'https://www.scopus.com/authid/detail.uri?authorId=35585258000',
                badge: scopus.status === 'ok' ? 'API' : (scopus.citations != null ? (scopus.fetched_at || 'Snapshot') : (isCs ? 'Profil ↗' : 'Profile ↗')),
                live: scopus.status === 'ok',
                citations: scopus.citations != null ? formatNumber(scopus.citations, lang) : '↗',
                hIndex: scopus.h_index != null ? scopus.h_index : '—',
                sub: scopus.citations != null
                    ? (isCs ? `${formatNumber(scopus.works_count, lang)} dokumentů &bull; ID ${scopus.author_id}` : `${formatNumber(scopus.works_count, lang)} documents &bull; ID ${scopus.author_id}`)
                    : (isCs ? `Author ID ${scopus.author_id || '35585258000'} &bull; Otevřít profil na Scopusu` : `Author ID ${scopus.author_id || '35585258000'} &bull; View live Scopus profile`)
            },
            {
                cls: 'src-openalex',
                name: 'OpenAlex',
                url: oa.profile_url || 'https://openalex.org/A5049457524',
                badge: oa.status === 'ok' ? 'API Live' : 'Cached',
                live: oa.status === 'ok',
                citations: formatNumber(oa.citations, lang),
                hIndex: oa.h_index != null ? oa.h_index : '—',
                sub: isCs
                    ? `i10: ${oa.i10_index ?? '—'} &bull; ${formatNumber(oa.works_count, lang)} výstupů (od 2004)`
                    : `i10: ${oa.i10_index ?? '—'} &bull; ${formatNumber(oa.works_count, lang)} works (since 2004)`
            },
            {
                cls: 'src-bip',
                name: 'BIP! Scholar',
                url: bip.profile_url || 'https://bip.imsi.athenarc.gr/scholar/profile/0000-0001-9472-2589',
                badge: bip.status === 'ok' ? 'API Live' : 'Cached',
                live: bip.status === 'ok',
                citations: formatNumber(bip.citations, lang),
                hIndex: bip.h_index != null ? bip.h_index : '—',
                sub: isCs
                    ? `${bip.works_count ?? '—'} prací &bull; ${bip.popular_works ?? '—'} populárních &bull; ${bip.influential_works ?? '—'} vlivných`
                    : `${bip.works_count ?? '—'} papers &bull; ${bip.popular_works ?? '—'} popular &bull; ${bip.influential_works ?? '—'} influential`
            },
            {
                cls: 'src-scholar',
                name: 'Google Scholar',
                url: gs.profile_url || 'https://scholar.google.cz/citations?hl=cs&user=398ACWsAAAAJ',
                badge: gs.status === 'ok' ? 'Synced' : 'Cached',
                live: gs.status === 'ok',
                citations: formatNumber(gs.citations, lang),
                hIndex: gs.h_index != null ? gs.h_index : '—',
                sub: isCs
                    ? `i10: ${gs.i10_index ?? '—'} &bull; za 5 let: ${formatNumber(gs.citations_5y, lang)} cit., h=${gs.h_index_5y ?? '—'}`
                    : `i10: ${gs.i10_index ?? '—'} &bull; 5yr: ${formatNumber(gs.citations_5y, lang)} cit., h=${gs.h_index_5y ?? '—'}`
            }
        ];

        container.innerHTML = `
            <div class="metrics-dashboard">
                <div class="metrics-dashboard-header">
                    <h3 class="metrics-dashboard-title">
                        📊 ${isCs ? 'Bibliometrický přehled napříč databázemi' : 'Bibliometric Impact Across Databases'}
                    </h3>
                    <span class="metrics-updated-note">
                        ${isCs ? 'Synchronizováno:' : 'Last synced:'} ${updatedDate || '2026'}
                    </span>
                </div>
                <div class="metrics-grid">
                    ${cards.map(c => `
                        <a href="${c.url}" target="_blank" rel="noopener" class="metric-source-card ${c.cls}">
                            <div>
                                <div class="metric-source-header">
                                    <span class="metric-source-name">${c.name}</span>
                                    <span class="metric-source-tag ${c.live ? 'live' : ''}">${c.badge}</span>
                                </div>
                                <div class="metric-kpis">
                                    <div class="metric-kpi">
                                        <span class="metric-kpi-val">${c.citations}</span>
                                        <span class="metric-kpi-label">${isCs ? 'Citace' : 'Citations'}</span>
                                    </div>
                                    <div class="metric-kpi">
                                        <span class="metric-kpi-val">${c.hIndex}</span>
                                        <span class="metric-kpi-label">h-index</span>
                                    </div>
                                </div>
                            </div>
                            <div class="metric-sub">${c.sub}</div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderDashboard();
    window.addEventListener('langchanged', renderDashboard);

    // Optional non-blocking browser live refresh for OpenAlex (CORS *)
    const oaId = bibliometricsData.identifiers && bibliometricsData.identifiers.openalex_author_id;
    if (oaId && typeof fetch === 'function') {
        const minYear = (bibliometricsData.identifiers && bibliometricsData.identifiers.min_publication_year) || 2004;
        fetch(`https://api.openalex.org/authors/${oaId}?select=works_count,cited_by_count,summary_stats,counts_by_year`)
            .then(r => (r.ok ? r.json() : null))
            .then(live => {
                if (!live || !live.cited_by_count) return;
                const homonym = (live.counts_by_year || [])
                    .filter(y => Number(y.year) < minYear)
                    .reduce((acc, y) => acc + Number(y.works_count || 0), 0);
                bibliometricsData.sources.openalex = Object.assign(
                    {},
                    bibliometricsData.sources.openalex,
                    {
                        status: 'ok',
                        citations: live.cited_by_count,
                        works_count: Math.max(0, Number(live.works_count || 0) - homonym),
                        h_index: live.summary_stats ? live.summary_stats.h_index : undefined,
                        i10_index: live.summary_stats ? live.summary_stats.i10_index : undefined
                    }
                );
                renderDashboard();
            })
            .catch(() => { /* keep static snapshot silently */ });
    }
}

/* ==========================================================================
   6. Publications Dynamic Renderer (Single Source of Truth + 4 Chapters)
   ========================================================================== */
function getRecordType(pub) {
    if (pub.recordType) return pub.recordType;
    const t = (pub.title || '').toLowerCase();
    const j = (pub.journal || '').toLowerCase();
    const doi = (pub.doi || '').toLowerCase();
    if (t.includes('fairsharing') || j.includes('fairsharing') || t.includes('ownership') || (!doi && !j)) return 'fairsharing';
    if (doi.includes('978-') || j.includes('springerbriefs') || j.includes('methods in molecular biology')) return 'book';
    if (pub.oa_is_preprint || j.includes('biorxiv') || j.includes('chemrxiv') || doi.includes('chemrxiv') || doi.startsWith('10.64898/')) return 'preprint';
    return 'article';
}

function normalizeCategorySlug(cat) {
    const c = (cat || '').toLowerCase().trim();
    if (c === 'lipid membranes') return 'membranes';
    if (c === 'drug design') return 'drug-design';
    if (c === 'other / general') return 'other';
    return c.replace(/[^a-z0-9]+/g, '-');
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function initPublicationsSection() {
    const chaptersContainer = document.getElementById('publications-chapters-container');
    if (!chaptersContainer || typeof publicationsData === 'undefined') return;

    const filterButtons = document.querySelectorAll('.pub-filter-btn');
    const chapterTabsContainer = document.getElementById('pub-chapter-tabs');
    const searchInput = document.getElementById('pub-search');
    const yearSelect = document.getElementById('pub-year-select');

    const CHAPTERS = [
        {
            key: 'article',
            icon: '📄',
            title: { en: 'Peer-Reviewed Journal Articles', cs: 'Recenzované vědecké články' },
            badge: { en: 'Article', cs: 'Článek' },
            badgeClass: ''
        },
        {
            key: 'book',
            icon: '📚',
            title: { en: 'Books & Book Chapters', cs: 'Knihy a kapitoly v knihách' },
            badge: { en: 'Book / Chapter', cs: 'Kniha / Kapitola' },
            badgeClass: 'type-book'
        },
        {
            key: 'preprint',
            icon: '🧪',
            title: { en: 'Preprints', cs: 'Preprinty' },
            badge: { en: 'Preprint', cs: 'Preprint' },
            badgeClass: 'type-preprint'
        },
        {
            key: 'fairsharing',
            icon: '🗂️',
            title: { en: 'FAIRsharing & Database / Software Records', cs: 'FAIRsharing a databázové / softwarové záznamy' },
            badge: { en: 'FAIRsharing / Record', cs: 'FAIRsharing / Záznam' },
            badgeClass: 'type-fairsharing'
        }
    ];

    let currentChapter = 'all';
    let currentFilter = 'selected';
    let currentYearFilter = 'all';
    let searchQuery = '';
    const chapterLimits = { article: 10, book: 10, preprint: 10, fairsharing: 10 };

    // Dynamically populate year dropdown from publicationsData
    if (yearSelect) {
        const years = Array.from(new Set(publicationsData.map(p => p.year).filter(Boolean)))
            .sort((a, b) => Number(b) - Number(a));
        yearSelect.innerHTML = `<option value="all">All Years / Všechny roky</option>` +
            years.map(y => `<option value="${escapeHtml(y)}">${escapeHtml(y)}</option>`).join('');

        yearSelect.addEventListener('change', e => {
            currentYearFilter = e.target.value;
            resetLimits();
            renderAll();
        });
    }

    function resetLimits() {
        Object.keys(chapterLimits).forEach(k => { chapterLimits[k] = 10; });
    }

    function formatJournalLine(pub, rType, isCs) {
        let out = pub.journal ? `<em>${escapeHtml(pub.journal)}</em>` : (
            rType === 'preprint' ? '<em>Preprint</em>' : (isCs ? '<em>Databázový / softwarový záznam</em>' : '<em>Database / Software Record</em>')
        );
        if (pub.year) out += `, ${escapeHtml(pub.year)}`;
        if (pub.volume) {
            out += `, ${escapeHtml(pub.volume)}`;
            if (pub.issue) out += `(${escapeHtml(pub.issue)})`;
        }
        if (pub.pages) out += `, ${escapeHtml(pub.pages)}`;
        return out;
    }

    function renderPerPaperMetrics(pub, isCs) {
        if (typeof bibliometricsData === 'undefined' || !bibliometricsData.per_paper || !pub.doi) return '';
        const m = bibliometricsData.per_paper[pub.doi.toLowerCase()];
        if (!m) return '';
        const pills = [];
        if (typeof m.openalex_citations === 'number' && m.openalex_citations > 0) {
            pills.push(`<span class="pub-metric-pill oa-cit" title="OpenAlex citations">📈 ${m.openalex_citations} ${isCs ? 'citací (OpenAlex)' : 'citations (OpenAlex)'}</span>`);
        }
        if (m.bip_pop && (m.bip_pop === 'C1' || m.bip_pop === 'C2' || m.bip_pop === 'C3')) {
            pills.push(`<span class="pub-metric-pill bip-pop" title="BIP! Scholar Popularity Class (${m.bip_pop})">🔥 BIP! Popular (${m.bip_pop})</span>`);
        }
        if (m.bip_inf && (m.bip_inf === 'C1' || m.bip_inf === 'C2' || m.bip_inf === 'C3')) {
            pills.push(`<span class="pub-metric-pill bip-inf" title="BIP! Scholar Influence Class (${m.bip_inf})">⭐ BIP! Influential (${m.bip_inf})</span>`);
        }
        return pills.length ? `<div class="pub-metrics-row">${pills.join('')}</div>` : '';
    }

    function renderChapterTabs() {
        if (!chapterTabsContainer) return;
        const lang = document.documentElement.lang || localStorage.getItem('kb-lang') || 'en';
        const isCs = lang === 'cs';

        const totals = { all: publicationsData.length, article: 0, book: 0, preprint: 0, fairsharing: 0 };
        publicationsData.forEach(p => {
            const rt = getRecordType(p);
            if (totals[rt] !== undefined) totals[rt]++;
        });

        const tabDefs = [
            { key: 'all', icon: '📑', label: isCs ? 'Všechny kapitoly' : 'All Chapters', count: totals.all },
            ...CHAPTERS.map(ch => ({ key: ch.key, icon: ch.icon, label: isCs ? ch.title.cs : ch.title.en, count: totals[ch.key] }))
        ];

        chapterTabsContainer.innerHTML = tabDefs.map(t => `
            <button class="pub-chapter-btn ${currentChapter === t.key ? 'active' : ''}" data-chapter="${t.key}">
                <span>${t.icon} ${t.label}</span>
                <span class="pub-chapter-count">${t.count}</span>
            </button>
        `).join('');

        chapterTabsContainer.querySelectorAll('.pub-chapter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentChapter = btn.getAttribute('data-chapter');
                // When user specifically clicks Books, Preprints, or FAIRsharing while on 'selected', show 'all' topics so chapter is never empty
                if (currentChapter !== 'all' && currentChapter !== 'article' && currentFilter === 'selected') {
                    currentFilter = 'all';
                    filterButtons.forEach(b => {
                        const isAll = b.getAttribute('data-filter') === 'all';
                        b.classList.toggle('active', isAll);
                        b.setAttribute('aria-selected', isAll ? 'true' : 'false');
                    });
                }
                resetLimits();
                renderAll();
            });
        });
    }

    function matchesFilters(pub) {
        const cats = (pub.category || []).map(normalizeCategorySlug);
        const matchesTopic = (currentFilter === 'all' || cats.includes(currentFilter));
        const matchesYear = (currentYearFilter === 'all' || String(pub.year || '') === currentYearFilter);
        if (!matchesTopic || !matchesYear) return false;
        if (!searchQuery) return true;
        const hay = `${pub.title || ''} ${pub.authors || ''} ${pub.journal || ''} ${pub.doi || ''}`.toLowerCase();
        return hay.includes(searchQuery);
    }

    function renderCardHtml(pub, chapterDef, isCs) {
        const pubId = encodeURIComponent(pub.id || pub.doi || '');
        const rawId = escapeHtml(pub.id || pub.doi || '');
        const imgSrc = escapeHtml(pub.image || 'img/profile/BioAlphabet.png');
        const topicsHtml = (pub.category || [])
            .map(c => `<span class="topic-tag">${escapeHtml(c)}</span>`)
            .join('');

        const webBtn = pub.web
            ? `<a href="${escapeHtml(pub.web)}" target="_blank" rel="noopener" class="btn-pub btn-web">Web App 🌐</a>`
            : '';
        const ghBtn = pub.github
            ? `<a href="${escapeHtml(pub.github)}" target="_blank" rel="noopener" class="btn-pub btn-github">GitHub 🐙</a>`
            : '';
        const ghBackupBtn = pub.github_backup
            ? `<a href="${escapeHtml(pub.github_backup)}" target="_blank" rel="noopener" class="btn-pub btn-tool-backup" title="Backup / Original Repository">Backup Repo 🐙</a>`
            : '';
        const doiBtns = pub.doi
            ? `<a href="https://doi.org/${escapeHtml(pub.doi)}" target="_blank" rel="noopener" class="btn-pub">DOI Link</a>
               <button type="button" class="btn-pub-copy" data-doi="${escapeHtml(pub.doi)}">${isCs ? 'Kopírovat DOI' : 'Copy DOI'}</button>`
            : '';

        const metricsRow = renderPerPaperMetrics(pub, isCs);
        const authorsLine = pub.authors ? escapeHtml(pub.authors) : 'Karel Berka et al.';
        const journalLine = formatJournalLine(pub, chapterDef.key, isCs);

        return `
            <li class="pub-card" data-pub-href="publication.html?id=${pubId}" data-year="${escapeHtml(pub.year || '')}" style="cursor: pointer;" tabindex="0" title="${isCs ? 'Klikněte pro detail publikace' : 'Click to view details'}">
                <div class="pub-type ${chapterDef.badgeClass}">${isCs ? chapterDef.badge.cs : chapterDef.badge.en}</div>
                <img src="${imgSrc}" alt="Thumbnail" class="pub-thumbnail" loading="lazy">
                <div class="pub-body">
                    <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
                    <p class="pub-authors">${authorsLine}</p>
                    <p class="pub-journal">${journalLine}</p>
                    ${metricsRow}
                    <div class="pub-topics">${topicsHtml}</div>
                </div>
                <div class="pub-links">
                    ${webBtn}
                    ${ghBtn}
                    ${ghBackupBtn}
                    ${doiBtns}
                    <button type="button" class="btn-pub-cite" data-id="${rawId}" title="Cite publication / Citovat publikaci">
                        ${isCs ? 'Citace 📄' : 'Cite 📄'}
                    </button>
                </div>
            </li>
        `;
    }

    function renderAll() {
        const lang = document.documentElement.lang || localStorage.getItem('kb-lang') || 'en';
        const isCs = lang === 'cs';
        renderChapterTabs();

        const activeChapters = currentChapter === 'all'
            ? CHAPTERS
            : CHAPTERS.filter(c => c.key === currentChapter);

        let html = '';
        let totalRenderedAny = 0;

        activeChapters.forEach(ch => {
            const matched = publicationsData.filter(p => getRecordType(p) === ch.key && matchesFilters(p));
            if (matched.length === 0) return;

            totalRenderedAny += matched.length;
            const limit = chapterLimits[ch.key] || 10;
            const visible = matched.slice(0, limit);
            const hasMore = matched.length > limit;

            html += `
                <div class="pub-chapter-block" data-chapter-block="${ch.key}">
                    <div class="pub-chapter-heading">
                        <h3>${ch.icon} ${isCs ? ch.title.cs : ch.title.en}</h3>
                        <span class="pub-chapter-badge">${matched.length} ${isCs ? 'záznamů' : (matched.length === 1 ? 'item' : 'items')}</span>
                    </div>
                    <ol class="publications-list">
                        ${visible.map(p => renderCardHtml(p, ch, isCs)).join('')}
                    </ol>
                    ${hasMore ? `
                        <div class="pub-chapter-load-more">
                            <button class="btn btn-secondary btn-chapter-more" data-chapter="${ch.key}">
                                ${isCs ? `Zobrazit vše (${matched.length})` : `Show All (${matched.length})`}
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        if (totalRenderedAny === 0) {
            html = `<p style="text-align:center; padding: 32px; color: var(--text-muted);">${isCs ? 'Žádné publikace neodpovídají zvolenému filtru.' : 'No publications match the current filter.'}</p>`;
        }

        chaptersContainer.innerHTML = html;

        // Bind Show All buttons per chapter
        chaptersContainer.querySelectorAll('.btn-chapter-more').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-chapter');
                chapterLimits[key] = 9999;
                renderAll();
            });
        });
    }

    // Topic filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            currentFilter = btn.getAttribute('data-filter');
            resetLimits();
            renderAll();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', e => {
            searchQuery = e.target.value.toLowerCase().trim();
            resetLimits();
            renderAll();
        });
    }

    // Delegate clicks on publication cards (ignoring inner links and buttons so Cite/Copy DOI bubble cleanly)
    chaptersContainer.addEventListener('click', e => {
        if (e.target.closest('a, button')) return;
        const card = e.target.closest('.pub-card[data-pub-href]');
        if (card) {
            window.location.href = card.getAttribute('data-pub-href');
        }
    });

    window.addEventListener('langchanged', renderAll);
    renderAll();
}

/* ==========================================================================
   7. Copy DOI to Clipboard Helper (Event Delegation for Dynamic Cards)
   ========================================================================== */
function initCopyDOI() {
    document.body.addEventListener('click', async e => {
        const btn = e.target.closest('.btn-pub-copy');
        if (!btn) return;
        const doi = btn.getAttribute('data-doi');
        if (!doi) return;

        try {
            await navigator.clipboard.writeText(doi);
        } catch {
            const tempInput = document.createElement('input');
            tempInput.value = doi;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }

        const originalText = btn.textContent;
        btn.textContent = (document.documentElement.lang === 'cs') ? 'Zkopírováno!' : 'Copied!';
        btn.style.borderColor = 'var(--color-accent)';
        btn.style.color = 'var(--color-accent)';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.disabled = false;
        }, 1800);
    });
}

/* ==========================================================================
   8. Contact Form Simulated Submission
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn.innerHTML;
        const currentLang = document.documentElement.lang || 'en';

        submitBtn.textContent = currentLang === 'cs' ? 'Odesílám zprávu...' : 'Sending Message...';
        submitBtn.disabled = true;

        const name = document.getElementById('form-name').value;

        setTimeout(() => {
            submitBtn.innerHTML = originalBtnHTML;
            submitBtn.disabled = false;
            feedback.className = 'form-feedback success';
            feedback.style.display = 'block';
            feedback.innerHTML = currentLang === 'cs'
                ? `Děkuji, <strong>${escapeHtml(name)}</strong>! Váš dotaz ohledně vybraného tématu byl simulován. V ostrém provozu by byl odeslán na adresu <strong>karel.berka@upol.cz</strong>.`
                : `Thank you, <strong>${escapeHtml(name)}</strong>! Your inquiry regarding your selected topic has been simulated. In a live environment, this would submit to <strong>karel.berka@upol.cz</strong>.`;
            feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            form.reset();
            setTimeout(() => {
                feedback.style.display = 'none';
                feedback.className = 'form-feedback';
            }, 8000);
        }, 1200);
    });
}

/* ==========================================================================
   9. Tools & Software Repositories Dynamic Renderer (with GitHub Meta & Backup)
   ========================================================================== */
function extractRepoSlug(url) {
    if (!url) return null;
    const m = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/?#]+)/i);
    return m ? `${m[1]}/${m[2].replace(/\/+$/, '')}`.toLowerCase() : null;
}

function initToolsSection() {
    const grid = document.getElementById('tools-grid');
    if (!grid || typeof toolsData === 'undefined') return;

    let currentToolFilter = 'all';

    function renderTools() {
        const lang = document.documentElement.lang || localStorage.getItem('kb-lang') || 'en';
        const isCs = lang === 'cs';
        const ghRepos = (typeof githubReposMeta !== 'undefined' && githubReposMeta.repos) ? githubReposMeta.repos : {};
        grid.innerHTML = '';

        const filtered = toolsData.filter(tool => {
            if (currentToolFilter === 'all') return true;
            return tool.category && tool.category.includes(currentToolFilter);
        });

        filtered.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';

            const descText = (tool.description && (tool.description[lang] || tool.description.en)) || '';
            const categoryTags = (tool.category || []).map(cat => `<span class="tool-tag">${escapeHtml(cat)}</span>`).join('');

            const slug = extractRepoSlug(tool.github);
            const meta = slug ? ghRepos[slug] : null;
            const langs = (tool.languages && tool.languages.length) ? tool.languages : (meta && meta.language ? [meta.language] : []);
            const langTags = langs.map(l => `<span class="tool-lang-tag">${escapeHtml(l)}</span>`).join('');

            let metaRowHtml = '';
            if (meta) {
                const pills = [];
                if (typeof meta.stars === 'number' && meta.stars > 0) {
                    pills.push(`<span class="tool-meta-pill" title="GitHub Stars">★ ${meta.stars}</span>`);
                }
                if (meta.pushed_at) {
                    pills.push(`<span class="tool-meta-pill" title="Last GitHub commit">${isCs ? 'Akt.' : 'Upd.'} ${escapeHtml(meta.pushed_at)}</span>`);
                }
                if (meta.license && meta.license !== 'NOASSERTION') {
                    pills.push(`<span class="tool-meta-pill">${escapeHtml(meta.license)}</span>`);
                }
                if (pills.length) {
                    metaRowHtml = `<div class="tool-meta-row">${pills.join('')}</div>`;
                }
            }

            const webBtnHtml = tool.web
                ? `<a href="${escapeHtml(tool.web)}" target="_blank" rel="noopener" class="btn-tool btn-tool-web">Web App 🌐</a>`
                : '';
            const githubBtnHtml = tool.github
                ? `<a href="${escapeHtml(tool.github)}" target="_blank" rel="noopener" class="btn-tool btn-tool-github">GitHub 🐙</a>`
                : '';
            const backupBtnHtml = tool.github_backup
                ? `<a href="${escapeHtml(tool.github_backup)}" target="_blank" rel="noopener" class="btn-tool btn-tool-backup" title="${isCs ? 'Původní / záložní repozitář' : 'Original / Backup Repository'}">${isCs ? 'Záloha 🐙' : 'Backup 🐙'}</a>`
                : '';
            const pubBtnHtml = tool.doi
                ? `<a href="publication.html?id=${encodeURIComponent(tool.doi)}" class="btn-tool btn-tool-pub">${isCs ? 'Publikace' : 'Paper'} 📄</a>`
                : '';

            const orgBadge = tool.org ? `<span class="tool-org-badge">${escapeHtml(tool.org)}</span>` : '';

            card.innerHTML = `
                <div>
                    <div class="tool-card-header">
                        <h3 class="tool-card-title">${escapeHtml(tool.name)}</h3>
                        ${orgBadge}
                    </div>
                    <div class="tool-tags">
                        ${categoryTags}
                        ${langTags}
                    </div>
                    ${metaRowHtml}
                    <p class="tool-card-desc">${escapeHtml(descText)}</p>
                </div>
                <div class="tool-card-actions">
                    ${webBtnHtml}
                    ${githubBtnHtml}
                    ${backupBtnHtml}
                    ${pubBtnHtml}
                </div>
            `;

            grid.appendChild(card);
        });
    }

    const filterButtons = document.querySelectorAll('.tool-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentToolFilter = btn.getAttribute('data-tool-filter');
            renderTools();
        });
    });

    window.addEventListener('langchanged', renderTools);
    renderTools();
}
