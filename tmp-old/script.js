/* =============================================
   ARFA MUHAMMAD FADHILLAH — PORTFOLIO
   script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── CUSTOM CURSOR ─── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width   = '56px';
      ring.style.height  = '56px';
      ring.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width   = '36px';
      ring.style.height  = '36px';
      ring.style.opacity = '1';
    });
  });


  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('bg-bg/95', 'border-border', 'backdrop-blur-md');
    } else {
      navbar.classList.remove('bg-bg/95', 'border-border', 'backdrop-blur-md');
    }
  });


  /* ─── SCROLL REVEAL + SKILL BARS ─── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        /* Animate any skill bars inside this element */
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
    revealObserver.observe(el);
  });


  /* ─── SKILL BARS (standalone observer) ─── */
  document.querySelectorAll('.skill-fill').forEach(bar => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        bar.style.width = bar.dataset.width + '%';
      }
    }, { threshold: 0.4 }).observe(bar);
  });


  /* ─── ACTIVE NAV LINK ─── */
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    document.querySelectorAll('.nav-link-item').forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? '#e8e4dc'
        : '';
    });
  });

});