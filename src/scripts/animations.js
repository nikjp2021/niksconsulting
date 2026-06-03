/**
 * animations.js — Comprehensive scroll-triggered animation system
 * Framer Motion-style effects using IntersectionObserver + CSS animations
 *
 * Features:
 * - Scroll reveal with data-reveal attributes
 * - Staggered children with data-stagger
 * - Parallax with data-parallax
 * - Counter animation with data-counter
 * - Magnetic button hover effect
 * - Card tilt effect on hover
 * - prefers-reduced-motion respect
 */

(() => {
  'use strict';

  // Bail if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show all elements immediately without animation
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseInt(el.getAttribute('data-counter') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
    return;
  }

  // ─────────────────────────────────────────────
  // 1. SCROLL REVEAL SYSTEM
  // ─────────────────────────────────────────────

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          const duration = parseInt(el.getAttribute('data-duration') || '600', 10);

          // Set CSS custom properties for the animation
          el.style.setProperty('--duration', duration + 'ms');
          el.style.setProperty('--delay', delay + 'ms');

          // Apply the revealed class after the specified delay
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);

          // Clean up will-change after animation completes
          el.addEventListener(
            'animationend',
            () => {
              el.style.willChange = 'auto';
            },
            { once: true }
          );

          revealObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  // ─────────────────────────────────────────────
  // 2. STAGGER SYSTEM
  // ─────────────────────────────────────────────

  const STAGGER_GAP = 100; // ms between each child

  document.querySelectorAll('[data-stagger]').forEach((container) => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      // Only set delay if the child doesn't already have one
      if (!child.hasAttribute('data-delay')) {
        child.setAttribute('data-delay', String(index * STAGGER_GAP));
      }
    });
  });

  // Now observe all [data-reveal] elements
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.style.willChange = 'opacity, transform';
    revealObserver.observe(el);
  });

  // ─────────────────────────────────────────────
  // 3. PARALLAX SYSTEM
  // ─────────────────────────────────────────────

  const parallaxElements = document.querySelectorAll('[data-parallax]');
  let parallaxTicking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax') || '0.1');
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = (centerY - viewportCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
    parallaxTicking = false;
  }

  function onScroll() {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }

  // Only apply parallax on desktop (match typical breakpoint)
  if (window.innerWidth >= 1024 && parallaxElements.length > 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial position
    updateParallax();
  }

  // ─────────────────────────────────────────────
  // 4. COUNTER ANIMATION
  // ─────────────────────────────────────────────

  // easeOutExpo for satisfying count-up
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter') || '0', 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = parseInt(el.getAttribute('data-counter-duration') || '2000', 10);
          const startTime = performance.now();

          function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const current = Math.round(easedProgress * target);

            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target + suffix;
            }
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll('[data-counter]').forEach((el) => {
    counterObserver.observe(el);
  });

  // ─────────────────────────────────────────────
  // 5. MAGNETIC BUTTON EFFECT
  // ─────────────────────────────────────────────

  document.querySelectorAll('.btn-primary-glow, .btn-outline-glow').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = 0.3;

      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      btn.style.transform = 'translate(0, 0)';
      setTimeout(() => {
        btn.style.transition = '';
      }, 500);
    });
  });

  // ─────────────────────────────────────────────
  // 6. CARD TILT EFFECT
  // ─────────────────────────────────────────────

  document.querySelectorAll('.glass-card, .glass-card-vibrant').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * 6; // max 3 degrees
      const tiltY = (x - 0.5) * -6;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
  });
})();
