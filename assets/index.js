(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const c=()=>{const t=document.querySelector(".button-hamburger"),e=document.querySelector("nav");t.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("show-nav")})},d={run:c},u=()=>{const t=document.querySelector(".sidebar"),e=document.querySelector(".button-sticky"),s=document.querySelector(".menu"),i={headerInViewUp:t,headerSticky:e,contentSticky:s};v(["load","resize","scroll"],()=>{window.innerWidth<730?m(i):(t.style.removeProperty("top"),e.style.removeProperty("top"),s.style.removeProperty("top"))})},v=(t,e)=>{t.forEach(s=>{window.addEventListener(s,e)})};let o=0,l=0;const m=({headerInViewUp:t,headerSticky:e,contentSticky:s})=>{const i=document.documentElement.scrollTop,n=i-l;l=i,o+=n;const r=t.clientHeight,a=e.clientHeight;o>=r&&(o=r),o<0&&(o=0),t.style.top=`${-o}px`,e.style.top=`${r-o}px`,s.style.top=`${r+a}px`},g={run:u};(t=>{const e=["load","resize"];for(const s of e)window.addEventListener(s,()=>{})})();(t=>{const e=["load","resize"];for(const s of e)window.addEventListener(s,()=>{})})();(t=>{const e=["load","resize"];for(const s of e)window.addEventListener(s,()=>{Array.from(document.querySelectorAll("section")).map(i=>({name:i.getAttribute("id"),top:i.offsetTop})),document.querySelector(".sidebar").clientHeight})})();window.addEventListener("load",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});const p=()=>{d.run(),g.run()},f={run:p},h=`<aside class="sidebar">\r
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
<div class="button-sticky">\r
  <div class="button-hamburger">\r
    <div class="line-1"></div>\r
    <div class="line-2"></div>\r
    <div class="line-3"></div>\r
  </div>\r
</div>\r
<!-- END HAMBURGER ONLY RESPONSIVE-->`;const y=document.querySelector("body");y.insertAdjacentHTML("afterbegin",h);f.run();
//# sourceMappingURL=index.js.map
