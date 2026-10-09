const controls = document.querySelector('.filters');
const papers = [...document.querySelectorAll('.paper')];
const status = document.querySelector('#filter-status');
controls.hidden = false;
controls.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const filter = button.dataset.filter;
  controls.querySelectorAll('button').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  papers.forEach((paper) => {
    paper.hidden = filter !== 'all' && !paper.dataset.category.split(' ').includes(filter);
  });
  status.textContent = `${papers.filter((paper) => !paper.hidden).length} publications shown.`;
});
