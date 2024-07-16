const areas = document.querySelectorAll('.area');

areas.forEach(area => {
  area.addEventListener('click', () => {
    area.classList.toggle('clicked');
  });
});