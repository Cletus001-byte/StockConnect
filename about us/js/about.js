/* ==========================================================================
   STOCK CONNECT - ABOUT US PAGE JAVASCRIPT (about.js)
   Self-contained interactive features for the About Us package.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* --------------------------------------------------------------------------
       1. NAVBAR SCROLL EFFECT
       -------------------------------------------------------------------------- */
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    /* --------------------------------------------------------------------------
       2. MOBILE MENU DRAWER
       -------------------------------------------------------------------------- */
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('mobile-open');
            mobileMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            const icon = mobileMenu.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        });

        // Close drawer when link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('mobile-open');
                mobileMenu.setAttribute('aria-expanded', 'false');
                const icon = mobileMenu.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    /* --------------------------------------------------------------------------
       3. INTERSECTION OBSERVER FOR SCROLL REVEALS
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add('active');
        });
    }

    /* --------------------------------------------------------------------------
       4. FADE-IN ANIMATIONS WITH STAGGER
       -------------------------------------------------------------------------- */
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        fadeElements.forEach(function (element, index) {
            element.style.transitionDelay = `${(index % 6) * 0.08}s`;
            fadeObserver.observe(element);
        });
    } else {
        fadeElements.forEach(function (element) {
            element.classList.add('visible');
        });
    }

    /* --------------------------------------------------------------------------
       5. ANIMATED STATISTICS COUNTER
       -------------------------------------------------------------------------- */
    const counters = document.querySelectorAll('.stat-number');

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;

                    const counter = entry.target;
                    const target = Number(counter.dataset.target || 0);
                    const suffix = counter.dataset.suffix || '';
                    let current = 0;
                    const increment = Math.max(1, target / 60);

                    function updateCounter() {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.ceil(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                        }
                    }

                    updateCounter();
                    counterObserver.unobserve(counter);
                });
            },
            { threshold: 0.6 }
        );

        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    /* --------------------------------------------------------------------------
       6. PHOTO GALLERY LIGHTBOX MODAL
       -------------------------------------------------------------------------- */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (galleryItems.length > 0 && lightboxModal && lightboxImg && lightboxClose) {

        galleryItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const img = item.querySelector('img');
                const captionTitle = item.querySelector('.gallery-caption h4');
                const captionDesc = item.querySelector('.gallery-caption p');

                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt || 'Stock Connect Team Photo';

                    let captionText = '';
                    if (captionTitle) captionText += `<strong>${captionTitle.textContent}</strong>`;
                    if (captionDesc) captionText += ` — ${captionDesc.textContent}`;

                    lightboxCaption.innerHTML = captionText || img.alt;
                    lightboxModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);

        lightboxModal.addEventListener('click', function (e) {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    /* --------------------------------------------------------------------------
       7. SMOOTH ANCHOR SCROLLING
       -------------------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
