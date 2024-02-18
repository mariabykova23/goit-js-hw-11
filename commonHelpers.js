import{i as c}from"./assets/vendor-bee2f3af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class a{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(o){const r=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${o}`;return fetch(r,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true"}).then(e=>e.json())}}const d="/goit-js-hw-11/assets/x-icon-36b820d9.svg",l=document.querySelector(".form"),u=document.querySelector(".container-imgs"),m=new a;function f({largeImageURL:s,previewURL:o,tags:r,likes:i,views:e,comments:t,downloads:n}){return`<div class="gallery">
    <a href="${s}">
    <img src="${o}" alt="${r}" title="${r}"/>
    </a>
    <table border="1">
  <tr>
    <td>Likes</td>
    <td>Views</td>
    <td>Comments</td>
    <td>Downloads</td>
  </tr>
  <tr>
    <td>${i}</td>
    <td>${e}</td>
    <td>${t}</td>
    <td>${n}</td>
  </tr>
</table>
</div>`}function g(s){return s.map(f).join("")}function h(s){const o=g(s);u.innerHTML=o}l.addEventListener("submit",p);function p(s){s.preventDefault();const o=document.querySelector("[data-userInput]").value.trim();m.getImage(o).then(r=>{if(r.totalHits>0){const i=r.hits;h(i)}else c.show({position:"topRight",iconUrl:d,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"20px",messageLineHeight:"1.6",backgroundColor:"#EF4040",timeout:1115e3,displayMode:2,close:!1,closeOnEscape:!0,closeOnClick:!0})}).catch(r=>{console.log(r)}),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
