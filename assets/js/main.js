const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function closeMobileMenu() {
  if (!mobileMenu || !navToggle) return;
  mobileMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('click', event => {
    if (
      mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 820) closeMobileMenu();
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxCap = document.querySelector('.lightbox .lb-cap');
const lightboxClose = document.querySelector('.lightbox .lb-close');
let lastFocusedElement = null;

function openLightbox(item) {
  const img = item.querySelector('img');
  if (!img || !lightbox || !lightboxImg) return;

  lastFocusedElement = document.activeElement;
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt || '';
  if (lightboxCap) {
    lightboxCap.textContent = item.querySelector('figcaption')?.textContent?.trim() || '';
  }

  lightbox.hidden = false;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;

  const wasOpen = lightbox.classList.contains('open');
  lightbox.classList.remove('open');
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');

  if (lightboxImg) {
    lightboxImg.removeAttribute('src');
    lightboxImg.alt = '';
  }
  if (lightboxCap) lightboxCap.textContent = '';

  if (wasOpen && lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

document.querySelectorAll('.g-item').forEach(item => {
  const img = item.querySelector('img');
  if (!img) return;

  item.tabIndex = 0;
  item.setAttribute('role', 'button');
  item.setAttribute('aria-haspopup', 'dialog');
  if (!item.hasAttribute('aria-label')) {
    const caption = item.querySelector('figcaption')?.textContent?.trim();
    item.setAttribute('aria-label', caption ? `View image: ${caption}` : 'View image');
  }

  const activate = () => openLightbox(item);
  item.addEventListener('click', activate);
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
    if (lightbox?.classList.contains('open')) closeLightbox();
  }

  if (event.key === 'Tab' && lightbox?.classList.contains('open')) {
    const focusable = lightbox.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
