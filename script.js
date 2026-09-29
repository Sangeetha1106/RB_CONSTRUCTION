/**
 * RB CONSTRUCTION - VANILLA JAVASCRIPT
 * Handles mobile hamburger menu, navbar scroll transitions, smooth scrolling,
 * hero button click handlers, and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. DOM ELEMENT REFERENCES
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navQuoteBtn = document.getElementById('navQuoteBtn');
    const heroQuoteBtn = document.getElementById('heroQuoteBtn');

    // ----------------------------------------------------------------------
    // 2. NAVBAR SCROLL EFFECT
    // Switches navbar to solid background after scrolling 50px
    // ----------------------------------------------------------------------
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    handleScroll();

    // ----------------------------------------------------------------------
    // 3. MOBILE HAMBURGER MENU TOGGLE
    // ----------------------------------------------------------------------
    const toggleMobileMenu = () => {
        const isOpen = navMenu.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    const openMobileMenu = () => {
        hamburgerBtn.classList.add('active');
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeMobileMenu = () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    };

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
            
            // Set active state on clicked link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ----------------------------------------------------------------------
    // 4. QUOTE MODAL POPUP & FORM VALIDATION
    // ----------------------------------------------------------------------
    const quoteModalBackdrop = document.getElementById('quoteModalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const quoteForm = document.getElementById('quoteForm');
    const formSuccessBanner = document.getElementById('formSuccessBanner');
    const modalTriggers = document.querySelectorAll('.quote-modal-trigger, #navQuoteBtn, #heroQuoteBtn');

    const openModal = (e) => {
        if (e) e.preventDefault();
        if (quoteModalBackdrop) {
            quoteModalBackdrop.classList.add('active');
            quoteModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        if (quoteModalBackdrop) {
            quoteModalBackdrop.classList.remove('active');
            quoteModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    // Auto-open Quote Modal Popup on Home page visit after 1.2s delay
    const pathName = window.location.pathname;
    const isHomePage = pathName.endsWith('index.html') || pathName === '/' || pathName.endsWith('/') || !pathName.includes('.html');
    if (isHomePage && quoteModalBackdrop) {
        setTimeout(() => {
            if (!quoteModalBackdrop.classList.contains('active')) {
                openModal();
            }
        }, 1200);
    }

    // Attach open listener to all quote buttons
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.quote-modal-trigger');
        if (trigger) {
            e.preventDefault();
            openModal(e);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Close when clicking dark backdrop area
    if (quoteModalBackdrop) {
        quoteModalBackdrop.addEventListener('click', (e) => {
            if (e.target === quoteModalBackdrop) {
                closeModal();
            }
        });
    }

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quoteModalBackdrop && quoteModalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });

    // Client-side Form Validation
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const fields = [
                { id: 'fullName', errorId: 'fullNameError', msg: 'Please enter your full name.' },
                { id: 'mobileNumber', errorId: 'mobileNumberError', msg: 'Please enter a valid 10-digit mobile number.', validate: val => /^[0-9]{10}$/.test(val.trim()) },
                { id: 'emailAddress', errorId: 'emailAddressError', msg: 'Please enter a valid email address.', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
                { id: 'cityArea', errorId: 'cityAreaError', msg: 'Please specify your city or area.' },
                { id: 'projectType', errorId: 'projectTypeError', msg: 'Please select a project type.' }
            ];

            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const errorSpan = document.getElementById(field.errorId);
                const val = input.value;

                let fieldValid = true;
                if (!val || val.trim() === '') {
                    fieldValid = false;
                } else if (field.validate && !field.validate(val)) {
                    fieldValid = false;
                }

                if (!fieldValid) {
                    isValid = false;
                    input.classList.add('invalid');
                    if (errorSpan) errorSpan.textContent = field.msg;
                } else {
                    input.classList.remove('invalid');
                    if (errorSpan) errorSpan.textContent = '';
                }
            });

            if (isValid) {
                // Show success message banner
                if (formSuccessBanner) {
                    formSuccessBanner.classList.add('show');
                }
                quoteForm.reset();
                setTimeout(() => {
                    if (formSuccessBanner) formSuccessBanner.classList.remove('show');
                    closeModal();
                }, 3000);
            }
        });
    }

    // Cost Consultation Form Validation
    const consultationForm = document.getElementById('consultationForm');
    const cSuccessBanner = document.getElementById('cSuccessBanner');

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const cFields = [
                { id: 'cName', errorId: 'cNameError', msg: 'Please enter your full name.' },
                { id: 'cMobile', errorId: 'cMobileError', msg: 'Please enter a valid 10-digit mobile number.', validate: val => /^[0-9]{10}$/.test(val.trim()) },
                { id: 'cLocation', errorId: 'cLocationError', msg: 'Please enter your project location.' },
                { id: 'cArea', errorId: 'cAreaError', msg: 'Please enter approximate built-up area.' },
                { id: 'cProjectType', errorId: 'cProjectTypeError', msg: 'Please select a project type.' }
            ];

            cFields.forEach(field => {
                const input = document.getElementById(field.id);
                const errorSpan = document.getElementById(field.errorId);
                const val = input.value;

                let fieldValid = true;
                if (!val || val.trim() === '') {
                    fieldValid = false;
                } else if (field.validate && !field.validate(val)) {
                    fieldValid = false;
                }

                if (!fieldValid) {
                    isValid = false;
                    input.classList.add('invalid');
                    if (errorSpan) errorSpan.textContent = field.msg;
                } else {
                    input.classList.remove('invalid');
                    if (errorSpan) errorSpan.textContent = '';
                }
            });

            if (isValid) {
                if (cSuccessBanner) {
                    cSuccessBanner.classList.add('show');
                }
                consultationForm.reset();
                setTimeout(() => {
                    if (cSuccessBanner) cSuccessBanner.classList.remove('show');
                }, 4000);
            }
        });
    }

    // Contact Page Dedicated Form Validation
    const contactPageForm = document.getElementById('contactPageForm');
    const contactFormSuccessBanner = document.getElementById('contactFormSuccessBanner');

    if (contactPageForm) {
        contactPageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const fields = [
                { id: 'contactFullName', errorId: 'contactFullNameError', msg: 'Please enter your full name.' },
                { id: 'contactMobile', errorId: 'contactMobileError', msg: 'Please enter a valid 10-digit mobile number.', validate: val => /^[0-9]{10}$/.test(val.trim()) },
                { id: 'contactEmail', errorId: 'contactEmailError', msg: 'Please enter a valid email address.', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
                { id: 'contactCity', errorId: 'contactCityError', msg: 'Please enter your location.' },
                { id: 'contactProjectType', errorId: 'contactProjectTypeError', msg: 'Please select a project type.' }
            ];

            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const errorSpan = document.getElementById(field.errorId);
                const val = input ? input.value : '';

                let fieldValid = true;
                if (!val || val.trim() === '') {
                    fieldValid = false;
                } else if (field.validate && !field.validate(val)) {
                    fieldValid = false;
                }

                if (!fieldValid) {
                    isValid = false;
                    if (input) input.classList.add('invalid');
                    if (errorSpan) errorSpan.textContent = field.msg;
                } else {
                    if (input) input.classList.remove('invalid');
                    if (errorSpan) errorSpan.textContent = '';
                }
            });

            if (isValid) {
                if (contactFormSuccessBanner) {
                    contactFormSuccessBanner.classList.add('show');
                }
                contactPageForm.reset();
                setTimeout(() => {
                    if (contactFormSuccessBanner) contactFormSuccessBanner.classList.remove('show');
                }, 4000);
            }
        });
    }


    // ----------------------------------------------------------------------
    // 5. PROJECT CATEGORY FILTERING
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Set active state on clicked filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter project cards smoothly
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 6. GALLERY CATEGORY FILTERING
    // ----------------------------------------------------------------------
    const gFilterButtons = document.querySelectorAll('.g-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    gFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-gfilter');

            gFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-gcategory');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 7. LIGHTBOX GALLERY MODAL & NAVIGATION
    // ----------------------------------------------------------------------
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');

    let currentLightboxList = [];
    let currentLightboxIndex = 0;

    const getAllVisibleTriggers = () => {
        return Array.from(document.querySelectorAll('.lightbox-trigger')).filter(el => {
            return window.getComputedStyle(el).display !== 'none';
        });
    };

    const openLightbox = (index) => {
        currentLightboxList = getAllVisibleTriggers();
        if (currentLightboxList.length === 0) return;

        currentLightboxIndex = (index + currentLightboxList.length) % currentLightboxList.length;
        const target = currentLightboxList[currentLightboxIndex];

        const imgSrc = target.getAttribute('data-img') || target.querySelector('img').src;
        const title = target.getAttribute('data-title') || target.querySelector('.g-title, .design-title')?.textContent || 'RB Project Visual';

        if (lightboxImg) lightboxImg.src = imgSrc;
        if (lightboxCaption) lightboxCaption.textContent = title;
        if (lightboxModal) {
            lightboxModal.classList.add('active');
            lightboxModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeLightbox = () => {
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            lightboxModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    // Attach click triggers to all lightbox elements
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.lightbox-trigger');
        if (!trigger) return;
        const visibleTriggers = getAllVisibleTriggers();
        const index = visibleTriggers.indexOf(trigger);
        openLightbox(index >= 0 ? index : 0);
    });

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentLightboxIndex - 1);
        });
    }

    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(currentLightboxIndex + 1);
        });
    }

    // Keyboard shortcuts for Lightbox (Escape, ArrowLeft, ArrowRight)
    document.addEventListener('keydown', (e) => {
        if (lightboxModal && lightboxModal.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') openLightbox(currentLightboxIndex - 1);
            if (e.key === 'ArrowRight') openLightbox(currentLightboxIndex + 1);
        }
    });

    // ----------------------------------------------------------------------
    // 8. SCROLL REVEAL & FADE ANIMATIONS
    // ----------------------------------------------------------------------
    const animateElements = document.querySelectorAll('.animate-fade');
    const revealElements = document.querySelectorAll('.reveal-element');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight + 50) {
                el.classList.add('is-visible');
            }
        });

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight + 50) {
                el.classList.add('is-revealed');
            }
        });
    };

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '50px 0px 50px 0px',
            threshold: 0.05
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-fade')) {
                        entry.target.classList.add('is-visible');
                    }
                    if (entry.target.classList.contains('reveal-element')) {
                        entry.target.classList.add('is-revealed');
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => observer.observe(el));
        revealElements.forEach(el => observer.observe(el));
    }

    // Trigger immediate reveal check for initial view & hash links
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('hashchange', () => {
        setTimeout(revealOnScroll, 100);
    });
    setTimeout(revealOnScroll, 200);

    // ----------------------------------------------------------------------
    // 9. DYNAMIC PROJECT DETAILS QUERY PARAMETER LOADER
    // Reads URL params like project-details.html?id=modern-villa
    // ----------------------------------------------------------------------
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const projectsData = {
        'pallikaranai-site': {
            title: 'Pallikaranai Site',
            category: 'Residential Construction',
            type: 'Multistory Residence',
            location: 'Pallikaranai, Chennai',
            status: 'Ongoing',
            lead: 'A multistory residential building under construction at our Pallikaranai site in Chennai, documented from structure to slab work.',
            text: 'The site photographs show the RCC frame with brick masonry rising across the floors, the traditional door frame pooja at the main entrance, and the roof slab stage with reinforcement steel, electrical conduit layout and concrete casting followed by water curing.',
            highlights: [
                'RCC Frame Structure with Brick Masonry',
                'Roof Slab Reinforcement & Electrical Conduit Layout',
                'Concrete Slab Casting & Water Curing',
                'Door Frame Pooja at the Main Entrance'
            ],
            images: [
                { src: 'assets/images/pallikaranai-1.jpg', title: 'Pallikaranai Site - Building Exterior' },
                { src: 'assets/images/pallikaranai-2.jpg', title: 'Door Frame Pooja' },
                { src: 'assets/images/pallikaranai-3.jpg', title: 'Pooja Ceremony at Site' },
                { src: 'assets/images/pallikaranai-4.jpg', title: 'Roof Slab Casting & Curing' },
                { src: 'assets/images/pallikaranai-5.jpg', title: 'Slab Reinforcement & Electrical Conduit Layout' }
            ]
        },
        'renovation-work-at-karapakkam': {
            title: 'Renovation Work at Karapakkam',
            category: 'Renovation',
            type: 'Building Renovation',
            location: 'Karapakkam, Chennai',
            status: 'In Progress',
            lead: 'Renovation of an existing building at Karapakkam, Chennai, with new roofing, decorative detailing and a carved wooden main door.',
            text: 'The work includes exterior finishing from bamboo scaffolding, a painted framework with clay-tile roofing, decorative fascia trim, terracotta jali railing on the terrace, and installation of a carved wooden main door frame with pooja.',
            highlights: [
                'Clay-Tile Roofing over Painted Structural Framework',
                'Decorative Fascia & Terracotta Jali Railing',
                'Carved Wooden Main Door Frame Installation',
                'Exterior Plastering & Paint Finishing'
            ],
            images: [
                { src: 'assets/images/karapakkam-renovation-1.jpg', title: 'Main Door Frame - Evening View' },
                { src: 'assets/images/karapakkam-renovation-2.jpg', title: 'Door Frame with Pooja' },
                { src: 'assets/images/karapakkam-renovation-3.jpg', title: 'Exterior Finishing & Roof Detailing' },
                { src: 'assets/images/karapakkam-renovation-4.jpg', title: 'Terrace Clay-Tile Roof & Jali Railing' }
            ]
        },
        'karapakkam-building-before-renovation': {
            title: 'Karapakkam Building Before Renovation',
            category: 'Renovation',
            type: 'Building Renovation',
            location: 'Karapakkam, Chennai',
            status: 'Before Renovation',
            lead: 'The Karapakkam building as it stood before the renovation work began.',
            text: 'This photograph records the existing building at Karapakkam, Chennai, with scaffolding being set up for the renovation. It is the starting point for the work shown in our Renovation Work at Karapakkam project.',
            highlights: [
                'Existing Structure Documented Before Work',
                'Site Prepared with Scaffolding & Safety Net',
                'Starting Point of the Karapakkam Renovation'
            ],
            images: [
                { src: 'assets/images/karapakkam-before-renovation.jpg', title: 'Karapakkam Building Before Renovation' }
            ]
        }
    };

    if (projectId && projectsData[projectId]) {
        const pd = projectsData[projectId];
        const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

        document.title = `${pd.title} | RB Construction`;
        setText('detailHeroTitle', pd.title);
        setText('detailHeroCategory', pd.category.toUpperCase());
        setText('detailHeroLocation', pd.location);
        setText('metaType', pd.type);
        setText('metaCategory', pd.category);
        setText('metaLocation', pd.location);
        setText('metaStatus', pd.status);
        setText('detailLead', pd.lead);
        setText('detailText', pd.text);

        const highlightsEl = document.getElementById('detailHighlights');
        if (highlightsEl) {
            highlightsEl.innerHTML = pd.highlights.map(h => `
                <li>
                    <svg class="h-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${h}</span>
                </li>`).join('');
        }

        const galleryEl = document.getElementById('detailGallery');
        if (galleryEl) {
            galleryEl.classList.toggle('p-gallery-single', pd.images.length === 1);
            galleryEl.innerHTML = pd.images.map(img => `
                <div class="p-detail-img-box lightbox-trigger" data-title="${img.title}" data-img="${img.src}">
                    <img src="${img.src}" alt="${img.title}" class="p-detail-img" loading="lazy">
                    <div class="p-detail-overlay">
                        <span>${img.title}</span>
                    </div>
                </div>`).join('');
        }
    } else if (projectId) {
        console.log('Project Details loaded for ID:', projectId);
        
        // Dynamic field targets
        const detailHeroTitle = document.getElementById('detailHeroTitle');
        const detailHeroCategory = document.getElementById('detailHeroCategory');
        const detailHeroLocation = document.getElementById('detailHeroLocation');
        const metaType = document.getElementById('metaType');
        const metaCategory = document.getElementById('metaCategory');
        const metaLocation = document.getElementById('metaLocation');
        const metaStatus = document.getElementById('metaStatus');
        const detailLead = document.getElementById('detailLead');
        const detailText = document.getElementById('detailText');

        // Formatted title helper
        const formattedTitle = projectId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        if (detailHeroTitle) detailHeroTitle.textContent = formattedTitle;
        if (metaType) metaType.textContent = 'Custom Build';
        if (metaCategory) metaCategory.textContent = 'Residential / Commercial';
        if (metaLocation) metaLocation.textContent = 'Tamil Nadu';
        if (metaStatus) metaStatus.textContent = 'In Planning / Ongoing';
        if (detailLead) detailLead.textContent = `Viewing details for ${formattedTitle}.`;
        if (detailText) detailText.textContent = `Comprehensive overview and scope of work for ${formattedTitle} will be published here when final project documentation is provided.`;
    }

    // ----------------------------------------------------------------------
    // 10. DYNAMIC SERVICE DETAILS QUERY PARAMETER LOADER
    // Reads URL params like service-details.html?service=residential-construction
    // ----------------------------------------------------------------------
    const servicesData = {
        "residential-construction": {
            id: "residential-construction",
            title: "Residential Construction",
            eyebrow: "RESIDENTIAL SERVICES",
            description: "Quality homes designed and built around your lifestyle, family requirements, and modern structural standards.",
            image: "assets/images/project-1.jpg",
            introduction: "RB Construction provides comprehensive residential construction services. From independent villas and multistory family residences to modern row houses, we ensure structural integrity, quality material selection, and transparent execution through every stage of construction.",
            includes: [
                "Architectural & Structural Layout Planning",
                "Site Preparation, Excavation & Concrete Foundation",
                "RCC Frame Structure & Precision Masonry",
                "Electrical, Plumbing & Utility Channeling",
                "Exterior Plastering, Weatherproof Coating & Roofing",
                "Flooring, Interior Joinery & Quality Inspection Handover"
            ],
            keyAreas: [
                { title: "Independent Villas", desc: "Custom-designed single and multistory villas built with cantilevered elevations, premium finishes, and modern layout balance." },
                { title: "Multistory Residences", desc: "Space-efficient family homes engineered for maximum durability, optimal natural lighting, and effective ventilation." },
                { title: "Duplex & Gated Homes", desc: "High-quality residential builds with enhanced safety standards, modern masonry, and energy-efficient structural designs." }
            ],
            related: ["commercial-construction", "architectural-planning", "interior-finishing"]
        },
        "commercial-construction": {
            id: "commercial-construction",
            title: "Commercial Construction",
            eyebrow: "COMMERCIAL SOLUTIONS",
            description: "Professional construction solutions for functional, modern, and durable commercial spaces.",
            image: "assets/images/project-3.jpg",
            introduction: "We engineer commercial buildings focused on structural reliability, optimal floor plan utilization, and strict adherence to safety standards. Our execution delivers timely project handovers for offices, retail stores, and commercial complexes.",
            includes: [
                "Commercial Layout & Functional Space Planning",
                "Structural Steel & Reinforced Concrete Construction",
                "Safety, Fire & Building Code Compliance Checks",
                "HVAC, Utility & High-Load Electrical Provisioning",
                "Glass Facade & Modern Exterior Framing",
                "Turn-key Commercial Inspection & Handover"
            ],
            keyAreas: [
                { title: "Office Complex Infrastructure", desc: "Modern, open-plan office spaces engineered for high functional utility, employee comfort, and structural durability." },
                { title: "Retail Showrooms & Outlets", desc: "High-visibility commercial retail environments built for high foot-traffic, structural aesthetic, and open display flow." },
                { title: "Multi-Tenant Hubs", desc: "Flexible commercial floor plates designed with robust utility cores, elevator shafts, and multi-level accessibility." }
            ],
            related: ["architectural-planning", "project-management", "renovation-remodeling"]
        },
        "architectural-planning": {
            id: "architectural-planning",
            title: "Architectural Planning",
            eyebrow: "DESIGN & PLANNING",
            description: "Thoughtful planning and design focused on functionality, structural strength, and aesthetics.",
            image: "assets/images/project-2.jpg",
            introduction: "Our architectural planning service translates project requirements into practical structural blueprints. We emphasize natural illumination, spatial efficiency, and local authority approval standards for seamless construction.",
            includes: [
                "Conceptual Blueprint & Floor Plan Development",
                "Structural Engineering & Load Calculations",
                "Spatial Optimization & Interior Flow Drafting",
                "Vastu Alignment & Environmental Sun-Path Planning",
                "Material Specification & Bill of Quantities (BOQ)",
                "Local Authority Approval & Regulatory Drawings"
            ],
            keyAreas: [
                { title: "Residential Layout Planning", desc: "Functional floor plans designed to maximize usable living area, natural airflow, and daylight distribution." },
                { title: "Modern Elevation Design", desc: "Contemporary exterior elevation concepts combining geometric framing, subtle textures, and architectural lighting." },
                { title: "Structural Load Engineering", desc: "Safe, precision-engineered structural framing models tailored to site soil conditions and load requirements." }
            ],
            related: ["residential-construction", "interior-finishing", "project-management"]
        },
        "interior-finishing": {
            id: "interior-finishing",
            title: "Interior & Finishing",
            eyebrow: "INTERIOR SOLUTIONS",
            description: "Detailed interior and finishing work that brings the final architectural vision to life.",
            image: "assets/images/about-img.jpg",
            introduction: "We deliver complete interior coordination and premium surface finishing. From precision tile laying and plastering to false ceiling lighting and custom woodwork, we refine spaces to reflect modern aesthetic elegance.",
            includes: [
                "Surface Plastering, Wall Skimming & Paint Finish",
                "Precision Tile, Granite & Marble Flooring Installation",
                "False Ceiling Design & Ambient Lighting Integration",
                "Custom Woodwork, Doors & Window Framing",
                "Sanitaryware, Bathroom Fittings & Plumbing Checks",
                "Final Polish, Cleaning & Quality Inspection"
            ],
            keyAreas: [
                { title: "Living Space Interiors", desc: "Clean ceiling designs, hidden cove lighting, smooth wall finishes, and balanced color palettes." },
                { title: "Kitchen & Modular Joinery", desc: "Ergonomic kitchen layout execution using moisture-resistant cabinetry, stone countertops, and organized utility channels." },
                { title: "Bathrooms & Sanitary Fixtures", desc: "Precision waterproof tiling, modern concealed plumbing, and high-durability sanitary fittings." }
            ],
            related: ["residential-construction", "renovation-remodeling", "architectural-planning"]
        },
        "renovation-remodeling": {
            id: "renovation-remodeling",
            title: "Renovation & Remodeling",
            eyebrow: "REMODELING SERVICES",
            description: "Transform existing residential or commercial spaces with practical updates and structural upgrades.",
            image: "assets/images/why-choose-img.jpg",
            introduction: "Our renovation services revitalize aging structures, optimize outdated floor layouts, and reinforce structural safety. We upgrade utility lines, replace old surface finishes, and modernize spaces while preserving structural integrity.",
            includes: [
                "Structural Audit & Existing Site Condition Assessment",
                "Selective Demolition & Masonry Modifications",
                "Plumbing Line & Electrical Wiring Overhauls",
                "Flooring, Wall & Roof Waterproofing Treatments",
                "Structural Wall Reinforcement & Steel Support",
                "Modernized Surface Finishing & Handover"
            ],
            keyAreas: [
                { title: "Complete Home Overhauls", desc: "Refreshing outdated floor plans, upgrading structural partitions, and installing contemporary finishes." },
                { title: "Commercial Space Refurbishment", desc: "Adapting existing structures into sleek modern office units or retail spaces with minimal operational downtime." },
                { title: "Facade & Exterior Modernization", desc: "Updating old building exteriors with modern architectural cladding, texture paints, and updated window treatments." }
            ],
            related: ["interior-finishing", "residential-construction", "project-management"]
        },
        "project-management": {
            id: "project-management",
            title: "Project Management",
            eyebrow: "MANAGEMENT & SUPERVISION",
            description: "Coordinated execution with strict adherence to quality standards, timelines, and project requirements.",
            image: "assets/images/hero-bg.jpg",
            introduction: "RB Construction provides dedicated site supervision and timeline management. We coordinate material procurement, manage skilled labor, enforce safety protocols, and maintain strict quality standards from site preparation to final handover.",
            includes: [
                "Detailed Work Breakdown & Milestone Scheduling",
                "Quality Assurance & Multi-Stage Site Inspections",
                "Material Sourcing, Testing & Inventory Control",
                "Labor & Subcontractor On-Site Coordination",
                "Budget Tracking & Variance Management",
                "Final Inspection & Project Completion Certificate"
            ],
            keyAreas: [
                { title: "Timeline & Milestone Control", desc: "Rigorous daily site monitoring ensuring construction phases progress according to scheduled completion targets." },
                { title: "Quality & Material Assurance", desc: "Strict verification of concrete mix ratios, steel grades, masonry quality, and finishing standards." },
                { title: "Safety & Site Supervision", desc: "Active enforcement of site safety protocols, proper staging, and structured site organization." }
            ],
            related: ["residential-construction", "commercial-construction", "architectural-planning"]
        }
    };

    const serviceParam = urlParams.get('service');
    const serviceDetailHeroTitle = document.getElementById('serviceDetailHeroTitle');
    const serviceDetailHeroEyebrow = document.getElementById('serviceDetailHeroEyebrow');
    const serviceDetailHeroDesc = document.getElementById('serviceDetailHeroDesc');
    const serviceDetailHeroImg = document.getElementById('serviceDetailHeroImg');
    const serviceDetailIntro = document.getElementById('serviceDetailIntro');
    const serviceDetailIncludesList = document.getElementById('serviceDetailIncludesList');
    const serviceDetailKeyAreasGrid = document.getElementById('serviceDetailKeyAreasGrid');
    const serviceDetailRelatedGrid = document.getElementById('serviceDetailRelatedGrid');
    const serviceDetailsValidContainer = document.getElementById('serviceDetailsValidContainer');
    const serviceDetailsFallbackContainer = document.getElementById('serviceDetailsFallbackContainer');

    if (serviceDetailHeroTitle) {
        if (serviceParam && servicesData[serviceParam]) {
            const data = servicesData[serviceParam];
            document.title = `${data.title} | RB Construction Services`;

            if (serviceDetailsValidContainer) serviceDetailsValidContainer.style.display = 'block';
            if (serviceDetailsFallbackContainer) serviceDetailsFallbackContainer.style.display = 'none';

            if (serviceDetailHeroEyebrow) serviceDetailHeroEyebrow.textContent = data.eyebrow || 'OUR SERVICES';
            if (serviceDetailHeroTitle) serviceDetailHeroTitle.textContent = data.title;
            if (serviceDetailHeroDesc) serviceDetailHeroDesc.textContent = data.description;
            if (serviceDetailHeroImg && data.image) {
                serviceDetailHeroImg.src = data.image;
                serviceDetailHeroImg.alt = `${data.title} - RB Construction`;
            }

            if (serviceDetailIntro) serviceDetailIntro.textContent = data.introduction;

            // Render Includes List
            if (serviceDetailIncludesList && data.includes) {
                serviceDetailIncludesList.innerHTML = data.includes.map(item => `
                    <li class="include-item">
                        <div class="include-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span class="include-text">${item}</span>
                    </li>
                `).join('');
            }

            // Render Key Areas
            if (serviceDetailKeyAreasGrid && data.keyAreas) {
                serviceDetailKeyAreasGrid.innerHTML = data.keyAreas.map((area, index) => `
                    <div class="key-area-card">
                        <div class="area-badge">0${index + 1}</div>
                        <h4 class="area-title">${area.title}</h4>
                        <p class="area-desc">${area.desc}</p>
                    </div>
                `).join('');
            }

            // Render Related Services Cards
            if (serviceDetailRelatedGrid && data.related) {
                serviceDetailRelatedGrid.innerHTML = data.related.map(relKey => {
                    const rel = servicesData[relKey];
                    if (!rel) return '';
                    return `
                        <div class="service-card">
                            <div class="service-icon-wrapper">
                                <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h3 class="service-card-title">${rel.title}</h3>
                            <p class="service-card-desc">${rel.description}</p>
                        </div>
                    `;
                }).join('');
            }
        } else {
            // Fallback mode when invalid or missing parameter
            document.title = `Our Services | RB Construction`;
            if (serviceDetailsValidContainer) serviceDetailsValidContainer.style.display = 'none';
            if (serviceDetailsFallbackContainer) serviceDetailsFallbackContainer.style.display = 'block';
            if (serviceDetailHeroEyebrow) serviceDetailHeroEyebrow.textContent = 'OUR SERVICES';
            if (serviceDetailHeroTitle) serviceDetailHeroTitle.textContent = 'Our Services';
            if (serviceDetailHeroDesc) serviceDetailHeroDesc.textContent = 'Please select a service to explore.';
        }
    }
});




