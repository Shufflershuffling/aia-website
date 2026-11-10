(function(){
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||!('IntersectionObserver' in window))return;
  var items=document.querySelectorAll('.reveal-on-scroll');
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.07,rootMargin:'0px 0px -20px 0px'});
  items.forEach(function(el){observer.observe(el);});
  document.documentElement.classList.add('motion-ready');
  requestAnimationFrame(function(){items.forEach(function(el){if(el.getBoundingClientRect().top < window.innerHeight-10)el.classList.add('is-visible');});});
})();


(function(){
  var toggle=document.querySelector('.mobile-menu-toggle');
  var menu=document.getElementById('aia-mobile-links');
  if(!toggle||!menu)return;
  function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');menu.classList.remove('is-open');document.body.classList.remove('menu-open');}
  toggle.addEventListener('click',function(){var open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open);});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
  document.addEventListener('click',function(e){if(!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
  window.addEventListener('resize',function(){if(window.innerWidth>900)closeMenu()});
})();
