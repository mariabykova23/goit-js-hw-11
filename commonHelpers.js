import{i as g,S as h}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class f{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(e,r){const i=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${e}&page=${r}`;return fetch(i,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true",page:r}).then(s=>s.json())}}const y="/goit-js-hw-11/assets/x-icon-36b820d9.svg",b=document.querySelector(".container-imgs");function L({largeImageURL:t,webformatURL:e,tags:r,likes:i,views:o,comments:s,downloads:a}){return`<div class="gallery">
    <div class="container-img-wrap">
      <a href="${t}" class="img-link">
          <img src="${e}" alt="${r}" title="${r}" />
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
        <td>${s}</td>
        <td>${a}</td>
      </tr>
    </table>
  </div>`}function v(t){return t.map(L).join("")}function d(t){const e=v(t);b.insertAdjacentHTML("beforeend",e)}const S=document.querySelector(".form"),E=document.querySelector(".container-imgs"),l=document.querySelector(".hidden-load"),n=document.querySelector(".load-morepics"),u=document.querySelector("[data-userInput]"),m=new f;let c=1;S.addEventListener("submit",t=>{t.preventDefault();const e=u.value.trim();c=1,I(e)});n.addEventListener("click",t=>{t.preventDefault();const e=u.value.trim();p(e)});function p(t){let e=c+1;m.getImage(t,e).then(r=>{let i=Math.ceil(r.totalHits/20);if(e<=i){n.classList.add("load-morepics-on"),d(r.hits);return}else n.classList.remove("load-morepics-on")}).catch(r=>{console.error("Error loading images:",r),n.classList.remove("load-morepics-on")}),c++}function I(t){l.classList.add("loader"),m.getImage(t,c).then(e=>{if(e.totalHits>0){const r=e.hits;d(r),w()}else g.show({position:"topRight",iconUrl:y,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).catch(e=>{console.log(e),n.classList.remove("load-morepics-on"),lightbox.on("show.simplelightbox")}).finally(()=>{l.classList.remove("loader"),n.classList.add("load-morepics-on")}),p(t)}function w(){const t=new h(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:250,captionsPosition:"bottom",animationSpeed:10,captionSelector:"img",enableKeyboard:!0,loop:!0});t.on("show.simplelightbox"),t.refresh()}document.querySelector("[data-userInput]").addEventListener("input",function(){E.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
