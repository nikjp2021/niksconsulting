/**
 * Micro-interactions for Niks Consulting
 * Pure CSS + minimal JS for performant animations
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==================== SCROLL PROGRESS BAR ====================
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar || prefersReducedMotion) return;

    let ticking = false;
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
  }

  // ==================== NAVBAR SCROLL EFFECTS ====================
  function initNavbarScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          if (currentScroll > 60) {
            header.classList.add('navbar-scrolled');
            header.classList.remove('navbar-expanded');
          } else {
            header.classList.add('navbar-expanded');
            header.classList.remove('navbar-scrolled');
          }

          // Increase backdrop blur on deeper scroll
          const blurAmount = Math.min(24 + (currentScroll / 10), 40);
          if (currentScroll > 60) {
            header.style.backdropFilter = `blur(${blurAmount}px)`;
          }

          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ==================== MAGNETIC CARD TILT ====================
  function initMagneticCards() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.magnetic-card');

    cards.forEach((card) => {
      const glow = card.querySelector('.cursor-glow');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle tilt toward cursor (max 4 degrees)
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

        // Move glow to cursor position
        if (glow) {
          glow.style.left = (x - 100) + 'px';
          glow.style.top = (y - 100) + 'px';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => {
          card.style.transition = '';
        }, 500);
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    });
  }

  // ==================== PAGE TRANSITION ====================
  function initPageTransition() {
    const main = document.querySelector('main');
    if (main) {
      main.classList.add('page-enter');
    }
  }

  // ==================== ANIMATED NAV LINKS ====================
  function initNavLinks() {
    const navLinks = document.querySelectorAll('header nav a:not([target="_blank"])');
    navLinks.forEach((link) => {
      link.classList.add('nav-link-animated');
    });
  }

  // ==================== INIT ====================
  function init() {
    initScrollProgress();
    initNavbarScroll();
    initMagneticCards();
    initPageTransition();
    initNavLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
