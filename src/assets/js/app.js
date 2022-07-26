function toggleNavbar() {
  const element = document.querySelector('.collapsed');
  if (!element) return;
  element.classList.toggle('open');
}
