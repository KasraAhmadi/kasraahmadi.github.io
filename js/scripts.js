// Kasra Ahmadi — personal site. Lightweight vanilla-JS scrollspy for the top nav
// (no framework dependency — replaces the old Bootstrap ScrollSpy).

window.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.topnav-links a'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = () => {
    const scrollPos = window.scrollY + 90;
    let activeIndex = 0;
    sections.forEach((section, i) => {
      if (section.offsetTop <= scrollPos) activeIndex = i;
    });
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[activeIndex].classList.add('active');
  };

  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
});
