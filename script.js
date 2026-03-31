/* ═══════════════════════════════════════════════════════════════
   Alex Car Service — Interactions
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Current year in footer ───
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Sticky nav ───
  // Applies .scrolled only after the hero scroll wrapper is fully past.
  const navHeader   = document.getElementById('nav-header');
  const heroWrapper = document.querySelector('.hero-scroll-wrapper');
  const serviziSection = document.getElementById('servizi');

  if (navHeader) {
    if (heroWrapper && 'IntersectionObserver' in window) {
      new IntersectionObserver(
        ([entry]) => navHeader.classList.toggle('scrolled', !entry.isIntersecting),
        { threshold: .3 }
      ).observe(heroWrapper);
      new IntersectionObserver(
        ([entry]) => document.body.classList.toggle('no-scroll', !entry.isIntersecting),
        { threshold: 0, rootMargin: '0px 0px 0px 0px' }
      ).observe(serviziSection);
    } else {
      // Fallback: use hero wrapper height, or viewport height if wrapper not found
      const getThreshold = () => heroWrapper
        ? heroWrapper.offsetTop + heroWrapper.offsetHeight
        : window.innerHeight;
      const onScroll = () => navHeader.classList.toggle('scrolled', window.scrollY >= getThreshold());
      const onScroll2 = () => ndocument.body.classList.toggle('no-scroll', window.scrollY >= getThreshold());
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('scroll', onScroll2, { passive: true });
      onScroll();
    }
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

    // Close button inside overlay
    const navCloseBtn = document.getElementById('nav-close');
    if (navCloseBtn) navCloseBtn.addEventListener('click', closeNav);

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

  // ─── Scroll-driven video hero (spring-based momentum) ───
  (function () {
    const wrapper     = document.querySelector('.hero-scroll-wrapper');
    const video       = document.getElementById('hero-video');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual  = document.querySelector('.hero-visual');
    const heroStats   = document.querySelector('.hero-stat-strip');
    const scrollCue   = document.querySelector('.hero-scroll-cue');
    const overlay     = document.querySelector('.hero-video-overlay');
    const scanFill    = document.getElementById('diag-scan-fill');
    const diagCard    = document.getElementById('diag-card');
    const heroClaim   = document.getElementById('hero-claim');

    if (!wrapper || !video) return;

    // ─── Diagnostic card config ───
    const DIAG_ITEMS = [
      { id: 'dv-motore',       critText: 'Anomalia critica',     okText: 'Ottimale',           okColor: 'var(--primary)',  t: 0.30 },
      { id: 'dv-freni',        critText: 'Usura elevata',        okText: 'Verificati',         okColor: 'var(--primary)',  t: 0.48 },
      { id: 'dv-trasmissione', critText: 'Errore P0700',         okText: 'Ottimale',           okColor: 'var(--primary)',  t: 0.65 },
      { id: 'dv-clima',        critText: 'Refrigerante critico', okText: 'Prossim. tagliando', okColor: 'var(--tertiary)', t: 0.80 },
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

    function applyProgress(p) {
      p = Math.max(0, Math.min(1, p));

      if (video.readyState >= 2 && video.duration > 0) {
        video.currentTime = p * video.duration;
      }

      // Content fades — hero text exits first, card stays through full scroll
      const contentOpacity = Math.max(0, 1 - p / 0.65);
      if (heroContent) heroContent.style.opacity = contentOpacity;
      if (scrollCue)   scrollCue.style.opacity   = contentOpacity;
      // Stat strip fades faster (first 28%)
      if (heroStats)   heroStats.style.opacity   = Math.max(0, 1 - p / 0.28);

      // Card drifts slightly upward and gains opacity as content fades (parallax feel)
      if (heroVisual) {
        const cardShift = p * 24; // shift up to 24px as we scroll
        heroVisual.style.transform = `translateY(${cardShift}px)`;
      }

      // Overlay thins as video reveals itself (0.62 → 0.15)
      if (overlay) {
        const alpha = 0.15 + 0.47 * (1 - p);
        overlay.style.background = `rgba(13,13,13,${alpha.toFixed(2)})`;
      }

      // Scan progress bar
      if (scanFill) scanFill.style.width = (p * 100).toFixed(1) + '%';

      // Diag card fades out once all items resolve (p 0.80 → 1.0)
      if (diagCard) diagCard.style.opacity = p >= 0.80 ? Math.max(0, 1 - (p - 0.80) / 0.20).toFixed(3) : '1';
      // Claim fades in as card exits (p 0.88 → 1.0)
      if (heroClaim) heroClaim.style.opacity = p >= 0.88 ? Math.min(1, (p - 0.88) / 0.12).toFixed(3) : '0';

      updateDiagCard(p);
    }

    // Reduced-motion: jump to final state, autoplay loop
    if (prefersReducedMotion) {
      applyProgress(1);
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.play().catch(function () {});
      return;
    }

    video.pause();

    // ─── State machine ───
    // 'idle'      → at progress 0, waiting for scroll-down
    // 'animating' → programmatic transition running
    // 'complete'  → at progress 1, waiting for scroll-up
    let state       = 'idle';
    let currentProg = 0;
    let rafId       = null;

    const ANIM_DURATION = 4000; // ms, matches video length

    function easeInOut(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function getWrapperScrollBounds() {
      const wTop    = wrapper.offsetTop;
      const travel  = wrapper.offsetHeight - window.innerHeight;
      return { wTop: wTop, wBottom: wTop + travel };
    }

    function isHeroActive() {
      const rect = wrapper.getBoundingClientRect();
      // Hero is pinned when wrapper straddles the viewport
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    }

    function animateHero(from, to) {
      if (rafId) cancelAnimationFrame(rafId);
      state = 'animating';
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const t       = Math.min(1, elapsed / ANIM_DURATION);
        const p       = from + (to - from) * easeInOut(t);
        currentProg   = p;
        applyProgress(p);

        if (t < 1) {
          rafId = requestAnimationFrame(tick);
          return;
        }

        // Animation complete
        rafId       = null;
        currentProg = to;
        applyProgress(to);
        state = to === 1 ? 'complete' : 'idle';

        // Teleport scroll position so the page is correctly anchored
        const bounds = getWrapperScrollBounds();
        window.scrollTo(0, to === 1 ? bounds.wBottom : bounds.wTop);

        if (to === 0 && scrollCue) scrollCue.classList.remove('hidden');
      }

      rafId = requestAnimationFrame(tick);
    }

    // ─── Scroll interception ───
    let touchStartY = 0;

    function handleScrollIntent(deltaY) {
      if (!isHeroActive()) return false; // not our business

      if (state === 'animating') return true; // block, do nothing else

      if (state === 'idle' && deltaY > 0) {
        if (scrollCue) scrollCue.classList.add('hidden');
        animateHero(0, 1);
        return true;
      }

      if (state === 'complete' && deltaY < 0) {
        animateHero(1, 0);
        return true;
      }

      return false;
    }

    function onWheel(e) {
      if (handleScrollIntent(e.deltaY)) e.preventDefault();
    }

    function onTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function onTouchMove(e) {
      const deltaY = touchStartY - e.touches[0].clientY; // positive = scroll down
      touchStartY  = e.touches[0].clientY;
      if (handleScrollIntent(deltaY)) e.preventDefault();
    }

    function onKeyDown(e) {
      const DOWN_KEYS = ['ArrowDown', 'PageDown', ' '];
      const UP_KEYS   = ['ArrowUp',   'PageUp'];
      if (DOWN_KEYS.includes(e.key) && handleScrollIntent(1))  e.preventDefault();
      if (UP_KEYS.includes(e.key)   && handleScrollIntent(-1)) e.preventDefault();
    }

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });
    window.addEventListener('keydown',    onKeyDown,    false);

    // Seed initial state — snap to nearest extreme on page load
    (function () {
      const rect    = wrapper.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const travel   = wrapper.offsetHeight - window.innerHeight;
      const initial  = travel > 0 ? Math.min(1, scrolled / travel) : 0;
      if (initial > 0.5) {
        state       = 'complete';
        currentProg = 1;
        applyProgress(1);
        if (scrollCue) scrollCue.classList.add('hidden');
      } else {
        state       = 'idle';
        currentProg = 0;
        applyProgress(0);
      }
    }());

    // Fallback: if video fails, autoplay loop
    video.addEventListener('error', function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('keydown',    onKeyDown);
      if (heroContent) heroContent.style.opacity = '';
      if (heroVisual)  heroVisual.style.transform  = '';
      if (scrollCue)   scrollCue.style.opacity   = '';
      if (heroStats)   heroStats.style.opacity   = '';
      if (overlay)     overlay.style.background  = '';
      if (scanFill)    scanFill.style.width       = '100%';
      if (diagCard)    diagCard.style.opacity     = '0';
      if (heroClaim)   heroClaim.style.opacity    = '1';
      applyProgress(1);
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.play().catch(function () {});
    });
  }());

})();
