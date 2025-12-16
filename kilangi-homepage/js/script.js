document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.cursor = 'pointer';
  });

  card.addEventListener('click', () => {
    card.style.borderColor = '#0f3d3e';
  });
});
