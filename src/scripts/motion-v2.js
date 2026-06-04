// Motion One animation system for v2
import { animate, scroll, inView, stagger } from 'motion';

// Staggered fade-up reveal on scroll
export function initScrollReveal() {
  const sections = document.querySelectorAll('[data-v2-reveal]');

  sections.forEach((section) => {
    const children = section.querySelectorAll('[data-v2-child]');
    const delay = parseInt(section.dataset.v2Delay || '0');

    if (children.length > 0) {
      inView(section, () => {
        animate(
          children,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: stagger(0.1, { start: delay / 1000 }), easing: [0.22, 1, 0.36, 1] }
        );
      }, { margin: '-50px' });
    } else {
      inView(section, () => {
        animate(
          section,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.7, delay: delay / 1000, easing: [0.22, 1, 0.36, 1] }
        );
      }, { margin: '-50px' });
    }
  });
}

// Hero text reveal with stagger
export function initHeroReveal() {
  const hero = document.querySelector('[data-v2-hero]');
  if (!hero) return;

  const badge = hero.querySelector('[data-v2-badge]');
  const heading = hero.querySelector('[data-v2-heading]');
  const paragraph = hero.querySelector('[data-v2-paragraph]');
  const buttons = hero.querySelector('[data-v2-buttons]');
  const stats = hero.querySelector('[data-v2-stats]');

  const elements = [badge, heading, paragraph, buttons, stats].filter(Boolean);

  animate(
    elements,
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.7, delay: stagger(0.12), easing: [0.22, 1, 0.36, 1] }
  );
}

// Parallax on scroll
export function initParallax() {
  document.querySelectorAll('[data-v2-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.v2Parallax || '0.1');
    scroll(
      animate(el, { y: [0, -100 * speed] }, { easing: 'linear' })
    );
  });
}

// Magnetic hover effect on buttons
export function initMagneticButtons() {
  document.querySelectorAll('[data-v2-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      animate(btn, { x: x * 0.15, y: y * 0.15 }, { duration: 0.3, easing: 'ease-out' });
    });

    btn.addEventListener('mouseleave', () => {
      animate(btn, { x: 0, y: 0 }, { duration: 0.5, easing: [0.22, 1, 0.36, 1] });
    });
  });
}

// Scale-in reveal for cards
export function initCardReveals() {
  document.querySelectorAll('[data-v2-card]').forEach((card, i) => {
    inView(card, () => {
      animate(
        card,
        { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] },
        { duration: 0.5, delay: (i % 3) * 0.1, easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '-30px' });
  });
}

// Counter animation
export function initCounters() {
  document.querySelectorAll('[data-v2-counter]').forEach((el) => {
    const target = parseInt(el.dataset.v2Counter);
    const suffix = el.dataset.v2Suffix || '';
    const prefix = el.dataset.v2Prefix || '';

    inView(el, () => {
      animate(
        (progress) => {
          el.textContent = prefix + Math.round(progress * target) + suffix;
        },
        { duration: 2, easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '-50px' });
  });
}

// Smooth scroll-linked progress bar
export function initScrollProgress() {
  const bar = document.querySelector('[data-v2-progress]');
  if (!bar) return;

  scroll(animate(bar, { scaleX: [0, 1] }, { easing: 'linear' }));
}

// Stagger list items
export function initListStagger() {
  document.querySelectorAll('[data-v2-list]').forEach((list) => {
    const items = list.querySelectorAll('li, [data-v2-item]');
    inView(list, () => {
      animate(
        items,
        { opacity: [0, 1], x: [-20, 0] },
        { duration: 0.4, delay: stagger(0.08), easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '-30px' });
  });
}

// Initialize all
export function initMotionV2() {
  initHeroReveal();
  initScrollReveal();
  initParallax();
  initMagneticButtons();
  initCardReveals();
  initCounters();
  initScrollProgress();
  initListStagger();
}
