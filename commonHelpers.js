import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();class u{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(r){const s=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${r}`;return fetch(s,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true"}).then(e=>e.json())}}const m="/goit-js-hw-11/assets/x-icon-36b820d9.svg",g=document.querySelector(".form"),a=document.querySelector(".container-imgs"),c=document.querySelector(".hidden-load"),p=new u;function h({largeImageURL:t,webformatURL:r,tags:s,likes:i,views:e,comments:o,downloads:n}){return`<div class="gallery">
  <div class="container-img-wrap">
    <a href="${t}" class="img-link">
        <img src="${r}" alt="${s}" title="${s}" />
      </a>
  </div>
  <table border="0" class="image-descrip">
    <tr class="td-descrip">
      <td>Likes</td>
      <td>Views</td>
      <td>Comments</td>
      <td>Downloads</td>
    </tr>
    <tr class="td-result">
      <td>${i}</td>
      <td>${e}</td>
      <td>${o}</td>
      <td>${n}</td>
    </tr>
  </table>
</div>`}function f(t){return t.map(h).join("")}function y(t){const r=f(t);a.innerHTML=r,S()}g.addEventListener("submit",b);function b(t){t.preventDefault(),c.classList.add("loader");const r=document.querySelector("[data-userInput]").value.trim();p.getImage(r).then(s=>{if(s.totalHits>0){const i=s.hits;y(i)}else l.show({position:"topRight",iconUrl:m,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).catch(s=>{console.log(s)}).finally(()=>{c.classList.remove("loader")}),t.target.reset()}function S(){const t=new d(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:250,captionsPosition:"bottom",animationSpeed:10,captionSelector:"img",enableKeyboard:!0,loop:!0});t.on("show.simplelightbox"),t.refresh()}document.querySelector("[data-userInput]").addEventListener("input",function(){a.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
