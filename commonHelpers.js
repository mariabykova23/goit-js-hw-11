import{i as p}from"./assets/vendor-bee2f3af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();class f{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(e,r){const i=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${e}&page=${r}`;return fetch(i,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true",page:r}).then(s=>s.json())}}const h="/goit-js-hw-11/assets/x-icon-36b820d9.svg",y=document.querySelector(".container-imgs");function L({largeImageURL:o,webformatURL:e,tags:r,likes:i,views:t,comments:s,downloads:c}){return`<div class="gallery">
    <div class="container-img-wrap">
      <a href="${o}" class="img-link">
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
        <td>${t}</td>
        <td>${s}</td>
        <td>${c}</td>
      </tr>
    </table>
  </div>`}function v(o){return o.map(L).join("")}function d(o){const e=v(o);y.insertAdjacentHTML("beforeend",e)}const b=document.querySelector(".form"),E=document.querySelector(".container-imgs"),l=document.querySelector(".hidden-load"),n=document.querySelector(".load-morepics"),u=document.querySelector("[data-userInput]"),m=new f;let a=1;b.addEventListener("submit",o=>{o.preventDefault();const e=u.value.trim();a=1,I(e)});n.addEventListener("click",o=>{o.preventDefault();const e=u.value.trim();g(e)});function g(o){let e=a+1;m.getImage(o,e).then(r=>{let i=Math.ceil(r.totalHits/20);if(e<=i){n.classList.add("load-morepics-on"),d(r.hits);return}else n.classList.remove("load-morepics-on")}).catch(r=>{console.error("Error loading images:",r),n.classList.remove("load-morepics-on")}),a++}function I(o){l.classList.add("loader"),m.getImage(o,a).then(e=>{if(e.totalHits>0){const r=e.hits;d(r)}else p.show({position:"topRight",iconUrl:h,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).catch(e=>{console.log(e),n.classList.remove("load-morepics-on"),lightbox.on("show.simplelightbox")}).finally(()=>{l.classList.remove("loader"),n.classList.add("load-morepics-on")}),g(o)}document.querySelector("[data-userInput]").addEventListener("input",function(){E.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
