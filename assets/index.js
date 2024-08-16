(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();(a=>{const n=["load","resize"];for(const i of n)window.addEventListener(i,()=>{})})();(a=>{const n=["load","resize"];for(const i of n)window.addEventListener(i,()=>{})})();(a=>{const n=["load","resize"];for(const i of n)window.addEventListener(i,()=>{Array.from(document.querySelectorAll("section")).map(s=>({name:s.getAttribute("id"),top:s.offsetTop})),document.querySelector(".sidebar").clientHeight})})();window.addEventListener("load",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})});const o=`<aside class="sidebar">\r
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
  <!-- <nav class="menu">\r
    <ul class="navigation">\r
      <li class="option"><a name="home">Inicio</a></li>\r
      <li class="option"><a name="about">Sobre mí</a></li>\r
      <li class="option"><a name="skills">Habilidades</a></li>\r
      <li class="option"><a name="portfolio">Portafolio</a></li>\r
      <li class="option"><a name="resume">Formación</a></li>\r
      <li class="option"><a name="contact">Contacto </a></li>\r
    </ul>\r
  </nav> -->\r
  <footer class="footer-sidebar" style="background: red;">\r
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
<!-- <div class="button-sticky">\r
  <div class="button-hamburger">\r
    <div class="line-1"></div>\r
    <div class="line-2"></div>\r
    <div class="line-3"></div>\r
  </div>\r
</div> -->\r
<!-- END HAMBURGER ONLY RESPONSIVE-->`;const l=document.querySelector("body");l.insertAdjacentHTML("afterbegin",o);
//# sourceMappingURL=index.js.map
