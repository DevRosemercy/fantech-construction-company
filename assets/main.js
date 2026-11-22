(function(){
var d=document,$=function(s){return d.querySelector(s)},$$=function(s){return d.querySelectorAll(s)};
var burger=$('#burger'),links=$('#links');
if(burger){burger.addEventListener('click',function(){var o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');burger.setAttribute('aria-expanded','false')}})}
var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();
var w=$('#word');if(w){var words=['architectural designs','BOQ and costing','general construction','civil works','swimming pools','electric fences'],i=0;
setInterval(function(){i=(i+1)%words.length;w.textContent=words[i]},2200)}
$$('.card,.steps li,form,.contact>div,.svc').forEach(function(el){el.setAttribute('data-r','')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$$('[data-r]').forEach(function(el){io.observe(el)});
var st=$('.stats');if(st){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
 e.target.querySelectorAll('[data-n]').forEach(function(b){var t=+b.dataset.n,s=b.dataset.s,c=0,step=Math.max(1,t/60);
 (function tick(){c+=step;if(c>=t){b.textContent=t+s}else{b.textContent=Math.floor(c)+s;requestAnimationFrame(tick)}})()});co.unobserve(e.target)})},{threshold:.4});co.observe(st)}
var sel=$('#service');
function pick(v){if(!sel||!v)return;for(var k=0;k<sel.options.length;k++){if(sel.options[k].text===v)sel.selectedIndex=k}}
$$('[data-svc]').forEach(function(a){a.addEventListener('click',function(){pick(a.dataset.svc.replace(/&amp;/g,'&'))})});
pick(new URLSearchParams(location.search).get('service'));
var f=$('#quote');if(f){f.addEventListener('submit',function(e){e.preventDefault();
 var n=$('#name').value.trim(),p=$('#phone').value.replace(/[\s-]/g,''),s=sel.value,x=$('#details').value.trim(),er=$('#err');
 if(n.length<2){er.textContent='Please enter your full name.';return}
 if(!/^(\+?254|0)(7|1)\d{8}$/.test(p)){er.textContent='Enter a valid Kenyan phone number.';return}
 if(!s){er.textContent='Please select a service.';return}
 er.textContent='';
 var m='NEW QUOTE REQUEST\nName: '+n+'\nPhone: '+p+'\nService: '+s+'\nDetails: '+(x||'Not specified')+'\nSent from the Fantech website.';
 window.open('https://wa.me/254718697501?text='+encodeURIComponent(m),'_blank','noopener');this.reset()})}
// projects: filter + lightbox
$$('.filters button').forEach(function(b){b.addEventListener('click',function(){
 $$('.filters button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
 $$('.g').forEach(function(g){g.classList.toggle('off',b.dataset.f!=='all'&&g.dataset.cat!==b.dataset.f)})})});
var lb=$('#lb');
$$('.g').forEach(function(g){var u=g.dataset.img;if(!u)return;g.classList.add('has');g.querySelector('.ph').style.backgroundImage='url("'+u+'")';
 function open(){$('#lbi').src=u;$('#lbi').alt=g.querySelector('figcaption').textContent;lb.showModal()}
 g.addEventListener('click',open);g.addEventListener('keydown',function(e){if(e.key==='Enter')open()})});
if(lb){$('#lbx').addEventListener('click',function(){lb.close()});lb.addEventListener('click',function(e){if(e.target===lb)lb.close()})}
})();
