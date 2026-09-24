document.body.classList.add('splash-active');

window.addEventListener('load', () => {
  // Give the logo a moment to appear before revealing the portfolio.
  setTimeout(() => {
    document.body.classList.remove('splash-active');
    document.body.classList.add('splash-done');
    setTimeout(() => document.getElementById('splash')?.remove(), 900);
  }, 2300);
});

const c=document.querySelector('.cursor');document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});document.querySelectorAll('a,.project-list article,.cap-grid article').forEach(x=>{x.addEventListener('mouseenter',()=>c.style.transform='translate(-50%,-50%) scale(2.4)');x.addEventListener('mouseleave',()=>c.style.transform='translate(-50%,-50%) scale(1)')});