/**
 * ==========================================================================
 * Citation Engine & Modal - Prof. Karel Berka Homepage
 * Provides downloadable & copyable citations in 6 major standards:
 * 1. BibTeX (.bib) - LaTeX / Overleaf
 * 2. RIS (.ris) - EndNote / Zotero / Mendeley
 * 3. ČSN ISO 690 - Official Czech / European standard
 * 4. APA 7th edition - Life & social sciences
 * 5. ACS - American Chemical Society (Chemistry / JCIM)
 * 6. Nature / Vancouver - Biomedical sciences
 * ==========================================================================
 */

(function () {
    'use strict';

    // Helper: get current active language ('cs' or 'en')
    function getCurrentLang() {
        return localStorage.getItem('kb-lang') || (document.documentElement.lang === 'cs' ? 'cs' : 'en');
    }

    // Helper: Normalize author string into structured objects
    function parseAuthors(authorsStr) {
        if (!authorsStr || typeof authorsStr !== 'string') {
            return [{ first: 'Karel', last: 'Berka', initials: 'K.', full: 'Karel Berka' }];
        }
        const rawList = authorsStr.split(',').map(s => s.trim()).filter(Boolean);
        const parsed = [];

        rawList.forEach(item => {
            const parts = item.split(/\s+/).filter(Boolean);
            if (!parts.length) return;

            if (parts.length === 1) {
                parsed.push({ first: '', last: parts[0], initials: '', full: parts[0] });
            } else if (
                parts.length >= 3 &&
                (parts[parts.length - 2].toLowerCase().endsWith('ová') ||
                 parts[parts.length - 2].toLowerCase().endsWith('ova') ||
                 parts[parts.length - 2].toLowerCase().endsWith('ská') ||
                 parts[parts.length - 2].toLowerCase().endsWith('ska') ||
                 parts[parts.length - 2].includes('-'))
            ) {
                // Compound surname like "Svobodová Vařeková"
                const last = parts.slice(-2).join(' ');
                const firstParts = parts.slice(0, -2);
                const initials = firstParts.map(p => p[0] ? p[0].toUpperCase() + '.' : '').join(' ');
                parsed.push({ first: firstParts.join(' '), last: last, initials: initials, full: item });
            } else {
                const last = parts[parts.length - 1];
                const firstParts = parts.slice(0, -1);
                const initials = firstParts.map(p => p[0] ? p[0].toUpperCase() + '.' : '').join(' ');
                parsed.push({ first: firstParts.join(' '), last: last, initials: initials, full: item });
            }
        });

        return parsed.length ? parsed : [{ first: 'Karel', last: 'Berka', initials: 'K.', full: 'Karel Berka' }];
    }

    // Helper: Generate BibTeX citation key
    function getBibtexKey(pub, authors) {
        const firstAuthor = (authors && authors[0] && authors[0].last) ? authors[0].last : 'berka';
        // Strip diacritics
        const cleanAuthor = firstAuthor.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'berka';
        const year = pub.year || 'nd';
        const firstWord = (pub.title || 'pub').trim().split(/\s+/)[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'pub';
        return `${cleanAuthor}${year}${firstWord}`;
    }

    // Standard journal abbreviations for ACS and Nature
    const JOURNAL_ABBR = {
        'Journal of Chemical Information and Modeling': 'J. Chem. Inf. Model.',
        'Nucleic Acids Research': 'Nucleic Acids Res.',
        'Bioinformatics': 'Bioinformatics',
        'Journal of Cheminformatics': 'J. Cheminform.',
        'Nature Methods': 'Nat. Methods',
        'Nature Communications': 'Nat. Commun.',
        'Scientific Reports': 'Sci. Rep.',
        'Biophysical Journal': 'Biophys. J.',
        'Journal of Physical Chemistry B': 'J. Phys. Chem. B',
        'Biochimica et Biophysica Acta (BBA) - Biomembranes': 'Biochim. Biophys. Acta Biomembr.',
        'Biochimica et Biophysica Acta Biomembranes': 'Biochim. Biophys. Acta Biomembr.',
        'European Heart Journal': 'Eur. Heart J.',
        'Europace': 'Europace',
        'Molecular Pharmaceutics': 'Mol. Pharm.',
        'New Biotechnology': 'New Biotechnol.',
        'Plant Molecular Biology': 'Plant Mol. Biol.',
        'The FEBS Journal': 'FEBS J.'
    };

    function getJournalAbbr(journal) {
        if (!journal) return '';
        return JOURNAL_ABBR[journal] || journal;
    }

    /* --------------------------------------------------------------------------
       1. BIBTEX (.bib)
       -------------------------------------------------------------------------- */
    function formatBibTeX(pub) {
        const authors = parseAuthors(pub.authors);
        const key = getBibtexKey(pub, authors);
        const authorStr = authors.map(a => a.first ? `${a.last}, ${a.first}` : a.last).join(' and ');
        const entryType = pub.journal ? 'article' : 'misc';

        const lines = [`@${entryType}{${key},`];
        lines.push(`  title = {${pub.title || ''}},`);
        lines.push(`  author = {${authorStr}},`);
        if (pub.journal) lines.push(`  journal = {${pub.journal}},`);
        if (pub.year) lines.push(`  year = {${pub.year}},`);
        if (pub.volume) lines.push(`  volume = {${pub.volume}},`);
        if (pub.issue) lines.push(`  number = {${pub.issue}},`);
        if (pub.pages) {
            const pagesBib = pub.pages.replace(/-/g, '--');
            lines.push(`  pages = {${pagesBib}},`);
        }
        if (pub.doi) {
            lines.push(`  doi = {${pub.doi}},`);
            lines.push(`  url = {https://doi.org/${pub.doi}}`);
        } else if (pub.web) {
            lines.push(`  url = {${pub.web}}`);
        }
        lines.push('}');
        return lines.join('\n');
    }

    /* --------------------------------------------------------------------------
       2. RIS (.ris) - EndNote / Zotero / Mendeley
       -------------------------------------------------------------------------- */
    function formatRIS(pub) {
        const authors = parseAuthors(pub.authors);
        const lines = [pub.journal ? 'TY  - JOUR' : 'TY  - GEN'];
        lines.push(`TI  - ${pub.title || ''}`);
        authors.forEach(a => {
            lines.push(`AU  - ${a.last}${a.first ? ', ' + a.first : ''}`);
        });
        if (pub.journal) lines.push(`JO  - ${pub.journal}`);
        if (pub.year) lines.push(`PY  - ${pub.year}`);
        if (pub.volume) lines.push(`VL  - ${pub.volume}`);
        if (pub.issue) lines.push(`IS  - ${pub.issue}`);
        if (pub.pages) {
            const parts = pub.pages.split('-');
            lines.push(`SP  - ${parts[0].trim()}`);
            if (parts.length > 1 && parts[1].trim()) {
                lines.push(`EP  - ${parts[1].trim()}`);
            }
        }
        if (pub.doi) {
            lines.push(`DO  - ${pub.doi}`);
            lines.push(`UR  - https://doi.org/${pub.doi}`);
        } else if (pub.web) {
            lines.push(`UR  - ${pub.web}`);
        }
        lines.push('ER  - ');
        return lines.join('\r\n');
    }

    /* --------------------------------------------------------------------------
       3. ČSN ISO 690 (Czech / European standard)
       -------------------------------------------------------------------------- */
    function formatISO690(pub, lang) {
        const isCs = lang === 'cs';
        const authors = parseAuthors(pub.authors);

        let authorStr = '';
        if (authors.length > 3) {
            const firstThree = authors.slice(0, 3).map(a => `${a.last.toUpperCase()}, ${a.first}`.trim().replace(/,\s*$/, ''));
            const etAl = isCs ? ' a kol.' : ' et al.';
            authorStr = firstThree.join('; ') + etAl;
        } else {
            authorStr = authors.map(a => `${a.last.toUpperCase()}, ${a.first}`.trim().replace(/,\s*$/, '')).join('; ');
        }

        const title = (pub.title || '').replace(/\.+$/, '');
        const journal = pub.journal;
        const year = pub.year;
        const volume = pub.volume;
        const issue = pub.issue;
        const pages = pub.pages ? pub.pages.replace(/-/g, '–') : '';
        const doi = pub.doi;

        const parts = [];
        if (authorStr) parts.push(`${authorStr}.`);
        parts.push(`${title}.`);
        if (journal) parts.push(`${journal}.`);

        const bibDetails = [];
        if (year) bibDetails.push(String(year));
        if (volume) bibDetails.push(isCs ? `roč. ${volume}` : `vol. ${volume}`);
        if (issue) bibDetails.push(isCs ? `č. ${issue}` : `no. ${issue}`);
        if (pages) bibDetails.push(isCs ? `s. ${pages}` : `pp. ${pages}`);

        if (bibDetails.length) {
            parts.push(bibDetails.join(', ') + '.');
        }

        if (doi) {
            parts.push(`DOI: ${doi}.`);
            parts.push(isCs ? `Dostupné z: https://doi.org/${doi}` : `Available from: https://doi.org/${doi}`);
        } else if (pub.web) {
            parts.push(isCs ? `Dostupné z: ${pub.web}` : `Available from: ${pub.web}`);
        }

        return parts.join(' ');
    }

    /* --------------------------------------------------------------------------
       4. APA 7th Edition
       -------------------------------------------------------------------------- */
    function formatAPA(pub) {
        const authors = parseAuthors(pub.authors);
        let authorStr = '';

        if (authors.length === 1) {
            authorStr = `${authors[0].last}, ${authors[0].initials}`.trim();
        } else if (authors.length === 2) {
            authorStr = `${authors[0].last}, ${authors[0].initials} & ${authors[1].last}, ${authors[1].initials}`;
        } else if (authors.length <= 20) {
            const names = authors.slice(0, -1).map(a => `${a.last}, ${a.initials}`.trim());
            authorStr = `${names.join(', ')}, & ${authors[authors.length - 1].last}, ${authors[authors.length - 1].initials}`.trim();
        } else {
            const names = authors.slice(0, 19).map(a => `${a.last}, ${a.initials}`.trim());
            authorStr = `${names.join(', ')}, ... ${authors[authors.length - 1].last}, ${authors[authors.length - 1].initials}`.trim();
        }

        const yearStr = pub.year ? `(${pub.year}).` : '(n.d.).';
        const titleStr = (pub.title || '').replace(/\.+$/, '') + '.';
        let journalStr = '';
        if (pub.journal) {
            journalStr = pub.journal;
            if (pub.volume) {
                journalStr += `, ${pub.volume}`;
                if (pub.issue) journalStr += `(${pub.issue})`;
            }
            if (pub.pages) {
                journalStr += `, ${pub.pages.replace(/-/g, '–')}`;
            }
            journalStr += '.';
        }

        const doiStr = pub.doi ? `https://doi.org/${pub.doi}` : (pub.web || '');
        const parts = [authorStr, yearStr, titleStr];
        if (journalStr) parts.push(journalStr);
        if (doiStr) parts.push(doiStr);

        return parts.filter(Boolean).join(' ');
    }

    /* --------------------------------------------------------------------------
       5. ACS (American Chemical Society - Chemistry / JCIM)
       -------------------------------------------------------------------------- */
    function formatACS(pub) {
        const authors = parseAuthors(pub.authors);
        const authorStr = authors.map(a => `${a.last}, ${a.initials}`.trim()).join('; ');
        const titleStr = (pub.title || '').replace(/\.+$/, '') + '.';
        const journalAbbr = getJournalAbbr(pub.journal);
        const year = pub.year || '';
        const volume = pub.volume || '';
        const issue = pub.issue ? `(${pub.issue})` : '';
        const pages = pub.pages ? pub.pages.replace(/-/g, '–') : '';
        const doi = pub.doi;

        let citationBody = '';
        if (journalAbbr) {
            citationBody = `${journalAbbr} ${year}`.trim();
            if (volume) {
                citationBody += `, ${volume}`;
                if (issue) citationBody += ` ${issue}`;
            }
            if (pages) citationBody += `, ${pages}`;
            citationBody += '.';
        }

        const doiPart = doi ? `https://doi.org/${doi}.` : '';
        const parts = [authorStr + '.', titleStr, citationBody, doiPart];
        return parts.filter(Boolean).join(' ');
    }

    /* --------------------------------------------------------------------------
       6. Nature / Vancouver (Biomedical Sciences)
       -------------------------------------------------------------------------- */
    function formatNature(pub) {
        const authors = parseAuthors(pub.authors);
        let authorStr = '';
        if (authors.length > 5) {
            authorStr = `${authors[0].last}, ${authors[0].initials} et al.`;
        } else if (authors.length === 1) {
            authorStr = `${authors[0].last}, ${authors[0].initials}`;
        } else {
            const lead = authors.slice(0, -1).map(a => `${a.last}, ${a.initials}`.trim());
            authorStr = `${lead.join(', ')} & ${authors[authors.length - 1].last}, ${authors[authors.length - 1].initials}`;
        }

        const titleStr = (pub.title || '').replace(/\.+$/, '') + '.';
        const journalAbbr = getJournalAbbr(pub.journal);
        const volume = pub.volume || '';
        const pages = pub.pages ? pub.pages.replace(/-/g, '–') : '';
        const year = pub.year || '';
        const doi = pub.doi;

        let jPart = journalAbbr;
        if (volume) jPart += ` ${volume}`;
        if (pages) jPart += `, ${pages}`;
        if (year) jPart += ` (${year}).`;
        else if (jPart) jPart += '.';

        const doiPart = doi ? `https://doi.org/${doi}` : '';
        const parts = [authorStr + '.', titleStr, jPart, doiPart];
        return parts.filter(Boolean).join(' ');
    }

    /* ==========================================================================
       Citation Formats Registry
       ========================================================================== */
    const CITATION_FORMATS = [
        {
            id: 'bibtex',
            label: 'BibTeX',
            badge: '.bib',
            filenameExt: '.bib',
            mime: 'application/x-bibtex;charset=utf-8',
            desc: {
                en: 'Standard for LaTeX, Overleaf & reference managers (JabRef, Zotero).',
                cs: 'Standard pro LaTeX, Overleaf a správce referencí (JabRef, Zotero).'
            },
            isCode: true,
            generate: formatBibTeX
        },
        {
            id: 'ris',
            label: 'RIS',
            badge: '.ris',
            filenameExt: '.ris',
            mime: 'application/x-research-info-systems;charset=utf-8',
            desc: {
                en: 'Universal import format for EndNote, Zotero, Mendeley & Citavi.',
                cs: 'Univerzální importní formát pro EndNote, Zotero, Mendeley i Citavi.'
            },
            isCode: true,
            generate: formatRIS
        },
        {
            id: 'iso690',
            label: 'ČSN ISO 690',
            badge: 'Norma ČR',
            filenameExt: '-iso690.txt',
            mime: 'text/plain;charset=utf-8',
            desc: {
                en: 'Official European and Czech citation standard for theses and publications.',
                cs: 'Oficiální česká norma (ČSN ISO 690) pro bakalářské, diplomové a vědecké práce.'
            },
            isCode: false,
            generate: (pub) => formatISO690(pub, getCurrentLang())
        },
        {
            id: 'apa',
            label: 'APA 7th',
            badge: 'APA',
            filenameExt: '-apa7.txt',
            mime: 'text/plain;charset=utf-8',
            desc: {
                en: 'American Psychological Association (7th edition) – standard in life & health sciences.',
                cs: 'Standard Americké psychologické asociace (7. vydání) pro vědecké publikace.'
            },
            isCode: false,
            generate: formatAPA
        },
        {
            id: 'acs',
            label: 'ACS',
            badge: 'Chemistry',
            filenameExt: '-acs.txt',
            mime: 'text/plain;charset=utf-8',
            desc: {
                en: 'American Chemical Society standard (JCIM, JACS, biochemistry).',
                cs: 'Norma Americké chemické společnosti (JCIM, JACS, biochemie).'
            },
            isCode: false,
            generate: formatACS
        },
        {
            id: 'nature',
            label: 'Nature',
            badge: 'Bio',
            filenameExt: '-nature.txt',
            mime: 'text/plain;charset=utf-8',
            desc: {
                en: 'Nature publishing group and biomedical citation style.',
                cs: 'Citační styl časopisů Nature a biomedicínského výzkumu.'
            },
            isCode: false,
            generate: formatNature
        }
    ];

    /* ==========================================================================
       Modal Dialog Component (Singleton)
       ========================================================================== */
    let modalElement = null;
    let currentPub = null;
    let activeFormatId = localStorage.getItem('kb-cite-format') || 'bibtex';

    // Helper: Trigger browser file download
    function downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType || 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Helper: Copy text to clipboard
    async function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        }
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function createCitationModal() {
        if (document.getElementById('citation-modal-overlay')) {
            return document.getElementById('citation-modal-overlay');
        }

        const overlay = document.createElement('div');
        overlay.id = 'citation-modal-overlay';
        overlay.className = 'cite-modal-overlay hidden';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-labelledby', 'cite-modal-title');

        overlay.innerHTML = `
            <div class="cite-modal-box">
                <!-- Header -->
                <div class="cite-modal-header">
                    <div class="cite-modal-title-wrap">
                        <span class="cite-modal-icon">📄</span>
                        <h3 id="cite-modal-title" class="cite-modal-title">
                            <span class="lang-en">Cite Publication</span>
                            <span class="lang-cs" style="display: none;">Citace publikace</span>
                        </h3>
                    </div>
                    <button class="cite-modal-close" aria-label="Close dialog" title="Close / Zavřít">&times;</button>
                </div>

                <!-- Publication Summary -->
                <div class="cite-pub-summary">
                    <div class="cite-pub-badges">
                        <span id="cite-summary-year" class="cite-badge-year">Year</span>
                        <span id="cite-summary-journal" class="cite-badge-journal">Journal</span>
                    </div>
                    <h4 id="cite-summary-title" class="cite-summary-title">Publication Title</h4>
                    <p id="cite-summary-authors" class="cite-summary-authors">Authors</p>
                </div>

                <!-- Format Selection Tabs -->
                <div class="cite-formats-tabs" role="tablist">
                    ${CITATION_FORMATS.map(f => `
                        <button class="cite-tab-btn ${f.id === activeFormatId ? 'active' : ''}" 
                                data-format="${f.id}" 
                                role="tab" 
                                aria-selected="${f.id === activeFormatId}">
                            <span class="cite-tab-name">${f.label}</span>
                            <span class="cite-tab-badge">${f.badge}</span>
                        </button>
                    `).join('')}
                </div>

                <!-- Format Description -->
                <div id="cite-format-desc" class="cite-format-desc">
                    Format description
                </div>

                <!-- Citation Text Area -->
                <div class="cite-content-wrapper">
                    <pre id="cite-code-output" class="cite-code-output" tabindex="0"></pre>
                </div>

                <!-- Action Toolbar -->
                <div class="cite-modal-footer">
                    <div class="cite-actions-group">
                        <button id="cite-btn-copy" class="btn-cite-action btn-cite-copy">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span class="btn-text">
                                <span class="lang-en">Copy to Clipboard</span>
                                <span class="lang-cs" style="display: none;">Zkopírovat citaci</span>
                            </span>
                        </button>
                        <button id="cite-btn-download" class="btn-cite-action btn-cite-download">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="btn-text">
                                <span class="lang-en">Download File</span>
                                <span class="lang-cs" style="display: none;">Stáhnout soubor</span>
                            </span>
                        </button>
                    </div>
                    <span id="cite-hint" class="cite-footer-hint"></span>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Bind internal events
        const closeBtn = overlay.querySelector('.cite-modal-close');
        closeBtn.addEventListener('click', closeCitationModal);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeCitationModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
                closeCitationModal();
            }
        });

        // Tabs click
        const tabBtns = overlay.querySelectorAll('.cite-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                activeFormatId = btn.getAttribute('data-format');
                localStorage.setItem('kb-cite-format', activeFormatId);
                renderCitationContent();
            });
        });

        // Copy button
        const copyBtn = overlay.querySelector('#cite-btn-copy');
        copyBtn.addEventListener('click', async () => {
            const codeOutput = overlay.querySelector('#cite-code-output');
            const textToCopy = codeOutput.textContent;
            if (!textToCopy) return;

            try {
                await copyToClipboard(textToCopy);
                const isCs = getCurrentLang() === 'cs';
                const originalText = copyBtn.querySelector('.btn-text').innerHTML;
                copyBtn.classList.add('copied');
                copyBtn.querySelector('.btn-text').innerHTML = isCs ? '✓ Zkopírováno!' : '✓ Copied!';

                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.querySelector('.btn-text').innerHTML = originalText;
                }, 2000);
            } catch (err) {
                console.error('Copy citation error:', err);
            }
        });

        // Download button
        const downloadBtn = overlay.querySelector('#cite-btn-download');
        downloadBtn.addEventListener('click', () => {
            if (!currentPub) return;
            const formatObj = CITATION_FORMATS.find(f => f.id === activeFormatId) || CITATION_FORMATS[0];
            const content = formatObj.generate(currentPub);
            const authors = parseAuthors(currentPub.authors);
            const key = getBibtexKey(currentPub, authors);
            const filename = `citation-${key}${formatObj.filenameExt}`;
            downloadFile(content, filename, formatObj.mime);
        });

        return overlay;
    }

    function renderCitationContent() {
        if (!modalElement || !currentPub) return;

        const lang = getCurrentLang();
        const isCs = lang === 'cs';

        // Update summary
        modalElement.querySelector('#cite-summary-title').textContent = currentPub.title || 'Untitled';
        modalElement.querySelector('#cite-summary-authors').textContent = currentPub.authors || 'Karel Berka et al.';
        modalElement.querySelector('#cite-summary-year').textContent = currentPub.year || 'N/A';
        modalElement.querySelector('#cite-summary-journal').textContent = currentPub.journal || 'Preprint / Record';

        // Get active format
        const formatObj = CITATION_FORMATS.find(f => f.id === activeFormatId) || CITATION_FORMATS[0];

        // Format description
        const descElem = modalElement.querySelector('#cite-format-desc');
        descElem.textContent = isCs ? formatObj.desc.cs : formatObj.desc.en;

        // Generate content
        const codeOutput = modalElement.querySelector('#cite-code-output');
        const formattedText = formatObj.generate(currentPub);
        codeOutput.textContent = formattedText;

        // Toggle code / text styling
        if (formatObj.isCode) {
            codeOutput.classList.add('is-code');
        } else {
            codeOutput.classList.remove('is-code');
        }

        // Update download button label
        const downloadBtn = modalElement.querySelector('#cite-btn-download .btn-text');
        if (downloadBtn) {
            const extLabel = formatObj.badge;
            downloadBtn.innerHTML = isCs 
                ? `<span>Stáhnout (${extLabel})</span>`
                : `<span>Download (${extLabel})</span>`;
        }

        // Apply site language visibility classes
        const enElems = modalElement.querySelectorAll('.lang-en');
        const csElems = modalElement.querySelectorAll('.lang-cs');
        if (isCs) {
            enElems.forEach(el => el.style.display = 'none');
            csElems.forEach(el => el.style.display = '');
        } else {
            csElems.forEach(el => el.style.display = 'none');
            enElems.forEach(el => el.style.display = '');
        }
    }

    function openCitationModal(pubOrId) {
        let pub = null;
        if (typeof pubOrId === 'object' && pubOrId !== null) {
            pub = pubOrId;
        } else if (typeof publicationsData !== 'undefined') {
            pub = publicationsData.find(p => p.id === pubOrId || p.doi === pubOrId);
        }

        if (!pub) {
            console.warn('Citation modal: Publication not found for identifier:', pubOrId);
            return;
        }

        currentPub = pub;
        modalElement = createCitationModal();

        // Restore active tab
        const tabBtns = modalElement.querySelectorAll('.cite-tab-btn');
        tabBtns.forEach(b => {
            const isMatch = b.getAttribute('data-format') === activeFormatId;
            b.classList.toggle('active', isMatch);
            b.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });

        renderCitationContent();
        modalElement.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeCitationModal() {
        if (!modalElement) return;
        modalElement.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Expose API globally
    window.openCitationModal = openCitationModal;
    window.closeCitationModal = closeCitationModal;
    window.citationEngine = {
        parseAuthors,
        getBibtexKey,
        formatBibTeX,
        formatRIS,
        formatISO690,
        formatAPA,
        formatACS,
        formatNature,
        formats: CITATION_FORMATS
    };

    // Auto-bind click handlers on DOMContentLoaded and dynamically
    document.addEventListener('DOMContentLoaded', () => {
        // Delegate clicks on any button with .btn-pub-cite
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-pub-cite');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                const pubId = btn.getAttribute('data-id');
                if (pubId) {
                    openCitationModal(pubId);
                }
            }
        });

        // Detail page button if present
        const detailCiteBtn = document.getElementById('btn-pd-cite');
        if (detailCiteBtn) {
            detailCiteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const urlParams = new URLSearchParams(window.location.search);
                const pubId = urlParams.get('id');
                if (pubId) {
                    openCitationModal(pubId);
                }
            });
        }
    });
})();
