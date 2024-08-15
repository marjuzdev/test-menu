(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=()=>{const s=document.querySelector(".btn-hamburger"),t=document.querySelector("nav");s.addEventListener("click",()=>{s.classList.toggle("open"),t.classList.toggle("show-nav")})},c={run:l},d=["load","resize","scroll"],v=()=>{const s=document.querySelector(".sidebar"),t=document.querySelector(".menu-sticky");let r=0,i=0;for(let e of d)window.addEventListener(e,()=>{if(window.innerWidth<730){const n=s.clientHeight,a=document.documentElement.scrollTop,o=a-i;i=a,r+=o,r>n&&(r=n),r<0&&(r=0),s.style.top=`${-r}px`,t.style.top=`${n-r}px`}else s.style.removeProperty("top"),t.style.removeProperty("top")})},u={run:v};(s=>{const t=["load","resize"];for(const r of t)window.addEventListener(r,()=>{})})();(s=>{const t=["load","resize"];for(const r of t)window.addEventListener(r,()=>{})})();(s=>{const t=["load","resize"];for(const r of t)window.addEventListener(r,()=>{Array.from(document.querySelectorAll("section")).map(i=>({name:i.getAttribute("id"),top:i.offsetTop})),document.querySelector(".sidebar").clientHeight})})();window.addEventListener("load",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});const m=()=>{c.run(),u.run()},g={run:m},p=`<aside class="sidebar">\r
  <div class="wrapper-avatar">\r
    <div class="container-avatar">\r
      <div class="img-avatar"></div>\r
    </div>\r
    <div class="wrapper-trademark">\r
      <div class="container-trademark">\r
        <span class="text">marjuz</span>\r
      </div>\r
    </div>\r
  </div>\r
  <nav class="menu">\r
    <ul class="navigation">\r
      <li class="option"><a name="home">Inicio</a></li>\r
      <li class="option"><a name="about">Sobre mí</a></li>\r
      <li class="option"><a name="skills">Habilidades</a></li>\r
      <li class="option"><a name="portfolio">Portafolio</a></li>\r
      <li class="option"><a name="resume">Formación</a></li>\r
      <li class="option"><a name="contact">Contacto </a></li>\r
    </ul>\r
  </nav>\r
  <footer class="footer-sidebar">\r
    </div>\r
    <ul class="social-media-list">\r
      <li class="github social-media-item">\r
        <a class="contact-icon" href="https://github.com/marjuzdev" target="_blank">\r
          <svg height="24" width="24" viewBox="0 0 432 416">\r
            <use xlink:href="svg/github.svg#github" />\r
          </svg>\r
          <div class="overlay"></div>\r
        </a>\r
      </li>\r
      <li class="linkedin social-media-item">\r
        <a class="contact-icon" href="https://www.linkedin.com/in/marioajuez" target="_blank">\r
          <svg width="24" height="24" viewBox="0 0 20 20">\r
            <use xlink:href="svg/linkedin.svg#linkedin" />\r
          </svg>\r
          <div class="overlay"></div>\r
        </a>\r
      </li>\r
\r
      <li class="gmail social-media-item">\r
        <a class="contact-icon" href="https://mail.google.com/mail/?view=cm&fs=1&to=marjuzdev@gmail.com"\r
          target="_blank">\r
          <svg width="24" height="24" viewBox="0 0 256 193">\r
            <use xlink:href="svg/gmail.svg#gmail-part1" class="gmail-part1" />\r
            <use xlink:href="svg/gmail.svg#gmail-part2" class="gmail-part2" />\r
            <use xlink:href="svg/gmail.svg#gmail-part3" class="gmail-part3" />\r
            <use xlink:href="svg/gmail.svg#gmail-part4" class="gmail-part4" />\r
            <use xlink:href="svg/gmail.svg#gmail-part5" class="gmail-part5" />\r
          </svg>\r
          <div class="overlay"></div>\r
        </a>\r
      </li>\r
    </ul>\r
    <div class="separator"></div>\r
    <div class="copyright">\r
      <p> &copy; marjuz 2024. Todos los derechos reservados</p>\r
    </div>\r
  </footer>\r
</aside>\r
\r
<!-- END FULL MENU - SIDE BAR  -->\r
\r
<!-- MENU HAMBURGER ONLY RESPONSIVE-->\r
<div class="menu-sticky">\r
  <div class="btn-hamburger">\r
    <div class="line-1"></div>\r
    <div class="line-2"></div>\r
    <div class="line-3"></div>\r
  </div>\r
</div>\r
<!-- END HAMBURGER ONLY RESPONSIVE-->`;const f=document.querySelector("body");f.insertAdjacentHTML("afterbegin",p);g.run();
//# sourceMappingURL=index.js.map
