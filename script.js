/* ═══════════════════════════════════════════════════════════════
   Alex Car Service — Interactions
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Current year in footer ───
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Sticky nav ───
  const navHeader = document.getElementById('nav-header');
  if (navHeader) {
    const onScroll = () => {
      navHeader.classList.toggle('scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Mobile nav toggle ───
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    const openNav = () => {
      navLinks.classList.add('mobile-open');
      navToggle.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Chiudi menu');
      document.body.style.overflow = 'hidden';
    };
    const closeNav = () => {
      navLinks.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Apri menu');
      document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', () => {
      navLinks.classList.contains('mobile-open') ? closeNav() : openNav();
    });

    // Close on nav link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeNav);
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) closeNav();
    });
  }

  // ─── Scroll reveal ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealEls.forEach(el => observer.observe(el));
    } else {
      // Fallback: show everything immediately
      revealEls.forEach(el => el.classList.add('is-visible'));
    }
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  // ─── Spec bar animation ───
  // Bars start at 0 width; animate to their --fill value on viewport entry
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const specBars = document.querySelectorAll('.spec-bar');
    if (specBars.length) {
      // Capture fill values and reset to 0 before painting
      specBars.forEach(bar => {
        const fill = getComputedStyle(bar).getPropertyValue('--fill').trim();
        bar.dataset.fill = fill || '0%';
        bar.style.width = '0';
      });

      const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.fill;
            barObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      specBars.forEach(bar => barObserver.observe(bar));
    }
  }

  // ─── Active nav highlighting on scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  if (sections.length && navLinkEls.length && 'IntersectionObserver' in window) {
    const activeSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinkEls.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => activeSectionObserver.observe(section));
  }

  // ─── Smooth scroll for anchor links (fallback for browsers without CSS support) ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = navHeader ? navHeader.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ─── Scroll-driven video hero ───
  (function () {
    const wrapper     = document.querySelector('.hero-scroll-wrapper');
    const video       = document.getElementById('hero-video');
    const heroContent = document.querySelector('.hero-content');
    const heroStats   = document.querySelector('.hero-stat-strip');
    const scrollCue   = document.querySelector('.hero-scroll-cue');
    const overlay     = document.querySelector('.hero-video-overlay');
    const scanFill    = document.getElementById('diag-scan-fill');

    if (!wrapper || !video) return;

    // ─── Diagnostic card config ───
    const DIAG_ITEMS = [
      { id: 'dv-motore',       critText: 'Anomalia critica',     okText: 'Ottimale',           okColor: 'var(--primary)',  t: 0.35 },
      { id: 'dv-freni',        critText: 'Usura elevata',        okText: 'Verificati',         okColor: 'var(--primary)',  t: 0.52 },
      { id: 'dv-trasmissione', critText: 'Errore P0700',         okText: 'Ottimale',           okColor: 'var(--primary)',  t: 0.68 },
      { id: 'dv-clima',        critText: 'Refrigerante critico', okText: 'Prossim. tagliando', okColor: 'var(--tertiary)', t: 0.82 },
    ];

    function updateDiagCard(progress) {
      let resolved = 0;
      DIAG_ITEMS.forEach(function (item) {
        const el = document.getElementById(item.id);
        if (!el) return;
        const isOk = progress >= item.t;
        if (isOk) resolved++;
        el.textContent = isOk ? item.okText : item.critText;
        el.style.color  = isOk ? item.okColor : 'var(--secondary)';
      });

      const remaining = DIAG_ITEMS.length - resolved;

      const statusDot = document.getElementById('diag-status-dot');
      if (statusDot) statusDot.className = 'status-dot ' + (remaining === 0 ? 'status-ok' : 'status-critical');

      const alertEl   = document.getElementById('diag-alert');
      const alertText = document.getElementById('diag-alert-text');
      if (alertEl)   alertEl.dataset.state = remaining === 0 ? 'ok' : 'critical';
      if (alertText) alertText.textContent  = remaining === 0
        ? 'Nessuna anomalia rilevata'
        : remaining + (remaining === 1 ? ' anomalia rilevata' : ' anomalie rilevate');

      const footerLeft  = document.getElementById('diag-footer-left');
      const footerRight = document.getElementById('diag-footer-right');
      if (footerLeft) footerLeft.textContent = remaining === 0 ? 'Diagnosi completata' : 'Analisi in corso\u2026';
      if (footerRight) {
        footerRight.textContent = remaining === 0 ? 'Nessuna anomalia' : remaining + ' errori attivi';
        footerRight.style.color = remaining === 0 ? 'var(--primary)' : 'var(--secondary)';
      }
    }

    // Reduced-motion: show final resolved state, fall back to autoplay loop
    if (prefersReducedMotion) {
      updateDiagCard(1);
      if (scanFill) scanFill.style.width = '100%';
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.play().catch(function () {});
      return;
    }

    // Keep video paused — controlled via currentTime
    video.pause();

    let rafPending  = false;
    let lastProgress = -1;

    function applyProgress(progress) {
      if (video.readyState >= 2 && video.duration > 0) {
        const target = progress * video.duration;
        if (Math.abs(video.currentTime - target) > 0.02) {
          video.currentTime = target;
        }
      }

      // Fade text/CTA block and stat strip — card stays visible throughout
      const contentOpacity = Math.max(0, 1 - progress / 0.75);
      if (heroContent) heroContent.style.opacity = contentOpacity;
      if (scrollCue)   scrollCue.style.opacity   = contentOpacity;
      // Stat strip fades out early (first 30% of travel)
      if (heroStats)   heroStats.style.opacity   = Math.max(0, 1 - progress / 0.3);

      // Thin out overlay as video takes over (0.62 → 0.18)
      if (overlay) {
        const alpha = 0.18 + 0.44 * (1 - progress);
        overlay.style.background = `rgba(13,13,13,${alpha.toFixed(2)})`;
      }

      // Scan progress bar
      if (scanFill) scanFill.style.width = (progress * 100).toFixed(1) + '%';

      updateDiagCard(progress);
    }

    function tick() {
      rafPending = false;
      const rect     = wrapper.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const travel   = wrapper.offsetHeight - window.innerHeight;
      const progress = travel > 0 ? Math.min(1, scrolled / travel) : 0;

      if (Math.abs(progress - lastProgress) < 0.0005) return;
      lastProgress = progress;
      applyProgress(progress);
    }

    function onScroll() {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(tick);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    tick(); // initial frame

    // Fallback: if video errors out, autoplay loop
    video.addEventListener('error', function () {
      window.removeEventListener('scroll', onScroll);
      if (heroContent) heroContent.style.opacity = '';
      if (scrollCue)   scrollCue.style.opacity   = '';
      if (heroStats)   heroStats.style.opacity   = '';
      if (overlay)     overlay.style.background  = '';
      if (scanFill)    scanFill.style.width       = '100%';
      updateDiagCard(1);
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.play().catch(function () {});
    });
  }());

})();
