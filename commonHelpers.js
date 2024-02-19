import{i as h,S as f}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();class y{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(e,s){const i=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${e}&page=${s}`;return fetch(i,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true",page:s}).then(r=>r.json())}}const L="/goit-js-hw-11/assets/x-icon-36b820d9.svg",b=document.querySelector(".form"),d=document.querySelector(".container-imgs"),l=document.querySelector(".hidden-load"),n=document.querySelector(".load-morepics"),u=new y,m=document.querySelector("[data-userInput]");let a=1;function v({largeImageURL:t,webformatURL:e,tags:s,likes:i,views:o,comments:r,downloads:c}){return`<div class="gallery">
  <div class="container-img-wrap">
    <a href="${t}" class="img-link">
        <img src="${e}" alt="${s}" title="${s}" />
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
      <td>${o}</td>
      <td>${r}</td>
      <td>${c}</td>
    </tr>
  </table>
</div>`}function S(t){return t.map(v).join("")}function p(t){const e=S(t);d.innerHTML+=e,I()}b.addEventListener("submit",t=>{t.preventDefault();const e=m.value.trim();E(e)});n.addEventListener("click",t=>{t.preventDefault();const e=m.value.trim();g(e)});function g(t){let e=a+1;u.getImage(t,e).then(s=>{let i=Math.ceil(s.totalHits/20);if(e<=i){n.classList.add("load-morepics-on"),console.log(s),p(s.hits);return}else n.classList.remove("load-morepics-on")}).catch(s=>{console.error("Error loading images:",s),n.classList.remove("load-morepics-on")}),a++}function E(t){l.classList.add("loader"),u.getImage(t,a).then(e=>{if(e.totalHits>0){n.classList.add("load-morepics-on");const s=e.hits;p(s)}else h.show({position:"topRight",iconUrl:L,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).catch(e=>{console.log(e)}).finally(()=>{l.classList.remove("loader"),n.classList.remove("load-morepics-on")}),g(t)}function I(){const t=new f(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:250,captionsPosition:"bottom",animationSpeed:10,captionSelector:"img",enableKeyboard:!0,loop:!0});t.on("show.simplelightbox"),t.refresh()}document.querySelector("[data-userInput]").addEventListener("input",function(){d.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
