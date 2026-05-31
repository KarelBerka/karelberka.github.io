/**
 * ==========================================================================
 * Prof. Karel Berka Homepage - Interactivity & Molecular Canvas (Vanilla JS)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initTheme();
    initMobileMenu();
    initScrollHeader();
    initMolecularCanvas();
    initPublicationsFilter();
    initCopyDOI();
    initContactForm();
    initSocialFeed();
});

/* ==========================================================================
   1. Theme System (Light / Dark)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'light') {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }
    } else {
        // Default to dark theme for scientific aesthetics
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Dispatch custom event so canvas can update its node colors
        window.dispatchEvent(new CustomEvent('themechanged', { detail: { isDark } }));
    });
}

/* ==========================================================================
   2. Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
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
   3. Sticky Header and Scrollspy (Active Section Highlighting)
   ========================================================================== */
function initScrollHeader() {
    const header = document.getElementById('site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Hide/Show header on scroll down/up
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
            if (currentScroll > lastScroll && !document.getElementById('nav-menu').classList.contains('open')) {
                header.classList.add('scroll-down');
            } else {
                header.classList.remove('scroll-down');
            }
        } else {
            header.style.boxShadow = 'none';
            header.classList.remove('scroll-down');
        }
        
        lastScroll = currentScroll;

        // Active Link Highlighting (Scrollspy)
        let activeSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for sticky header
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
   4. Interactive Molecular Background Canvas
   ========================================================================== */
function initMolecularCanvas() {
    const canvas = document.getElementById('molecular-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Interaction mouse coords
    const mouse = {
        x: null,
        y: null,
        radius: 180 // Connection radius for mouse
    };

    // Listen for mouse movement
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEnElements = document.querySelectorAll('.lang-en');
    const langCsElements = document.querySelectorAll('.lang-cs');
    
    // Check saved language preference or default to 'en'
    let currentLang = localStorage.getItem('kb-lang') || 'en';
    
    function applyLanguage(lang) {
        if (lang === 'cs') {
            langEnElements.forEach(el => el.style.display = 'none');
            langCsElements.forEach(el => el.style.display = ''); // Revert to default display
        } else {
            langCsElements.forEach(el => el.style.display = 'none');
            langEnElements.forEach(el => el.style.display = ''); // Revert to default display
        }
        document.documentElement.lang = lang;
        localStorage.setItem('kb-lang', lang);
    }
    
    // Apply on load
    applyLanguage(currentLang);
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'cs' : 'en';
            applyLanguage(currentLang);
        });
    }

    // --- Particle System ---
    class MoleculeNode {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.4; // Low speed drift
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 4 + 2;   // Varying node sizes (atoms)
            
            // Assign type: Carbon, Hydrogen, Oxygen, Nitrogen style colors
            const rand = Math.random();
            if (rand < 0.5) this.colorType = 'cyan';
            else if (rand < 0.8) this.colorType = 'teal';
            else this.colorType = 'purple';
        }

        update() {
            // Boundary Collision
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            this.x += this.vx;
            this.y += this.vy;
        }

        draw(isDark) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Color based on theme and node type
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

    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Recalculate particle density based on screen size
        const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
        setupParticles(Math.min(Math.max(particleCount, 40), 90)); // Cap between 40 and 90 nodes
    }

    function setupParticles(count) {
        particles = [];
        for (let i = 0; i < count; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push(new MoleculeNode(x, y));
        }
    }

    // Connect nodes (molecular bonds)
    function drawConnections(isDark) {
        const maxDist = 130; // Max distance for drawing bonds
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    // Opacity gets higher as nodes get closer
                    const alpha = (1 - (dist / maxDist)) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    
                    let strokeStyle = `rgba(148, 163, 184, ${alpha})`; // Gray bonds default
                    if (isDark) {
                        if (particles[i].colorType === 'cyan' && particles[j].colorType === 'cyan') {
                            strokeStyle = `rgba(34, 211, 238, ${alpha * 1.5})`;
                        }
                    } else {
                        if (particles[i].colorType === 'cyan' && particles[j].colorType === 'cyan') {
                            strokeStyle = `rgba(2, 132, 199, ${alpha * 1.2})`;
                        }
                    }
                    ctx.strokeStyle = strokeStyle;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            // Connection to mouse
            if (mouse.x !== null && mouse.y !== null) {
                const dxMouse = particles[i].x - mouse.x;
                const dyMouse = particles[i].y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouse.radius) {
                    const alpha = (1 - (distMouse / mouse.radius)) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    
                    const mouseColor = isDark ? `rgba(6, 182, 212, ${alpha})` : `rgba(2, 132, 199, ${alpha})`;
                    ctx.strokeStyle = mouseColor;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation Loop
    let isDarkTheme = document.body.classList.contains('dark-theme');
    
    // Listen for theme change event to update render loops
    window.addEventListener('themechanged', (e) => {
        isDarkTheme = e.detail.isDark;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw(isDarkTheme);
        });
        
        drawConnections(isDarkTheme);
        animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

/* ==========================================================================
   5. Publications Filtering and Searching
   ========================================================================== */
function initPublicationsFilter() {
    const filterButtons = document.querySelectorAll('.pub-filter-btn');
    const searchInput = document.getElementById('pub-search');
    const pubCards = document.querySelectorAll('.pub-card');
    const loadMoreBtn = document.getElementById('load-more-pubs');

    let currentFilter = 'selected';
    let searchQuery = '';
    let visibleLimit = 10;

    // Apply Filter & Search Combined
    function applyFilterAndSearch() {
        let visibleCount = 0;
        let totalMatched = 0;

        pubCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardCategories = cardCategory ? cardCategory.split(' ') : [];
            const title = card.querySelector('.pub-title').textContent.toLowerCase();
            const authors = card.querySelector('.pub-authors').textContent.toLowerCase();
            const journal = card.querySelector('.pub-journal').textContent.toLowerCase();
            
            // Check tags match
            const matchesFilter = (currentFilter === 'all' || cardCategories.includes(currentFilter));
            
            // Check search text match
            const matchesSearch = !searchQuery || 
                                  title.includes(searchQuery) || 
                                  authors.includes(searchQuery) || 
                                  journal.includes(searchQuery);

            if (matchesFilter && matchesSearch) {
                totalMatched++;
                if (visibleCount < visibleLimit) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease-out forwards';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });

        if (loadMoreBtn) {
            if (totalMatched > visibleLimit) {
                loadMoreBtn.style.display = 'inline-flex';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleLimit = 9999;
            applyFilterAndSearch();
        });
    }

    // Filter Buttons Interaction
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            currentFilter = btn.getAttribute('data-filter');
            visibleLimit = 10;
            applyFilterAndSearch();
        });
    });

    // Search Input Interaction
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            visibleLimit = 10;
            applyFilterAndSearch();
        });
    }
    
    // Initialize list on load
    applyFilterAndSearch();
}

/* ==========================================================================
   6. Copy DOI to Clipboard Helper
   ========================================================================== */
function initCopyDOI() {
    const copyButtons = document.querySelectorAll('.btn-pub-copy');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const doi = btn.getAttribute('data-doi');
            if (!doi) return;

            try {
                // Try modern Clipboard API
                await navigator.clipboard.writeText(doi);
                showSuccess(btn);
            } catch (err) {
                // Fallback for older browsers or non-secure contexts
                const tempInput = document.createElement('input');
                tempInput.value = doi;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showSuccess(btn);
            }
        });
    });

    function showSuccess(btn) {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.borderColor = 'var(--color-accent)';
        btn.style.color = 'var(--color-accent)';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.disabled = false;
        }, 1800);
    }
}

/* ==========================================================================
   7. Contact Form Simulated Submission
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Intercept actual submission

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Visual sending state
        submitBtn.textContent = 'Sending Message...';
        submitBtn.disabled = true;

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;

        // Since it's a GitHub pages static site, we mock the success. 
        // In the real world, the user can hook this up to Formspree, Web3Forms or standard mailto.
        setTimeout(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;

            // Show positive feedback
            feedback.className = 'form-feedback success';
            feedback.innerHTML = `Thank you, <strong>${name}</strong>! Your inquiry regarding your selected topic has been simulated. In a live environment, this would submit to <strong>karel.berka@upol.cz</strong>.`;
            
            // Scroll feedback into view
            feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Reset form
            form.reset();

            // Clear feedback after 8 seconds
            setTimeout(() => {
                feedback.style.display = 'none';
                feedback.className = 'form-feedback';
            }, 8000);
        }, 1200);
    });
}

/* ==========================================================================
   8. Social Networks Feed Interactivity
   ========================================================================== */
function initSocialFeed() {
    const feedTabBtns = document.querySelectorAll('.feed-tab-btn');
    const feedTabContents = document.querySelectorAll('.feed-tab-content');

    if (feedTabBtns && feedTabContents) {
        feedTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const feedId = btn.getAttribute('data-feed');
                
                feedTabBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                feedTabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                const targetContent = document.getElementById(`feed-${feedId}`);
                if (targetContent) targetContent.classList.add('active');
            });
        });
    }

    // Social Feed Interactive Likes & Reposts
    const actionBtns = document.querySelectorAll('.feed-action-btn');
    if (actionBtns) {
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const countSpan = btn.querySelector('.count');
                let count = parseInt(countSpan.textContent, 10);
                
                if (btn.classList.contains('like-btn')) {
                    if (btn.classList.contains('liked')) {
                        btn.classList.remove('liked');
                        count--;
                    } else {
                        btn.classList.add('liked');
                        count++;
                    }
                } else if (btn.classList.contains('repost-btn')) {
                    if (btn.classList.contains('reposted')) {
                        btn.classList.remove('reposted');
                        count--;
                    } else {
                        btn.classList.add('reposted');
                        count++;
                    }
                }
                
                countSpan.textContent = count;
            });
        
});
    }
}


