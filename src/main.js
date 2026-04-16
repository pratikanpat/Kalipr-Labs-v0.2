/* ═══════════════════════════════════════════════════════════
   KALIPR LABS — Interactions
   ═══════════════════════════════════════════════════════════ */

// ─── Scroll-Triggered Reveal ───
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}


// ─── Navbar Scroll Behavior ───
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}


// ─── Mobile Nav Overlay ───
function initMobileMenu() {
  const toggle   = document.getElementById('nav-toggle');
  const overlay  = document.getElementById('nav-overlay');
  const closeBtn = document.getElementById('nav-close');
  const links    = overlay?.querySelectorAll('.nav-overlay__link');
  const navEl    = overlay?.querySelector('.nav-overlay__nav');
  const footerEl = overlay?.querySelector('.nav-overlay__footer');

  if (!toggle || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Hamburger toggle
  toggle.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Elegant text close button
  closeBtn?.addEventListener('click', closeMenu);

  // Clicking a nav link navigates + closes
  links?.forEach((link) => link.addEventListener('click', closeMenu));

  // Tapping the bare overlay background (not on nav content) also closes
  overlay.addEventListener('click', closeMenu);
  navEl?.addEventListener('click', (e) => e.stopPropagation());
  footerEl?.addEventListener('click', (e) => e.stopPropagation());
  closeBtn?.addEventListener('click', (e) => e.stopPropagation()); // prevent double-fire

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });
}


// ─── Smooth Scroll for Anchor Links ───
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}


// ─── Stagger Reveal for Grid Items ───
function initStaggerReveal() {
  const grids = document.querySelectorAll('.signal__grid, .products__grid, .philosophy__grid');

  grids.forEach((grid) => {
    const items = grid.querySelectorAll('.reveal');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 80}ms`;
    });
  });
}


// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initStaggerReveal();
  initScrollReveal();
});
