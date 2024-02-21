import{i as l,S as y}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();class S{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="?key=42433869-1e5be4b754d1019adc877ba0e"}getImage(e,s){const i=this.BASE_URL+this.END_POINT+this.API_KEY+`&q=${e}&page=${s}`;return fetch(i,{method:"GET",image_type:"photo",orientation:"horizontal",safesearch:"true",page:s}).then(r=>r.json())}}const d="/goit-js-hw-11/assets/x-icon-36b820d9.svg",b=document.querySelector(".container-imgs");function L({largeImageURL:t,webformatURL:e,tags:s,likes:i,views:o,comments:r,downloads:n}){return`<div class="gallery">
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
        <td>${n}</td>
      </tr>
    </table>
  </div>`}function F(t){return t.map(L).join("")}function m(t){const e=F(t);b.insertAdjacentHTML("beforeend",e)}const v=document.querySelector(".form"),E=document.querySelector(".container-imgs"),u=document.querySelector(".hidden-load"),a=document.querySelector(".load-morepics"),g=document.querySelector(".data-userInput"),p=new S;let c=1;v.addEventListener("submit",t=>{t.preventDefault();const e=g.value.trim();c=1,w(e)});a.addEventListener("click",t=>{t.preventDefault();const e=g.value.trim();P(e),f()});function P(t){let e=c+1;p.getImage(t,e).then(s=>{let i=Math.ceil(s.totalHits/20);if(e<=i){a.classList.add("load-morepics-on"),m(s.hits),h();return}else a.classList.remove("load-morepics-on"),f(e,i)}).catch(s=>{console.error("Error loading images:",s)}),c++}function w(t){u.classList.add("loader"),p.getImage(t,c).then(e=>{if(e.totalHits>0){const s=e.hits;m(s),h(),a.classList.add("load-morepics-on")}else l.show({position:"topRight",iconUrl:d,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).catch(e=>{l.error({position:"topRight",iconUrl:d,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16",messageLineHeight:"15",backgroundColor:"#EF4040",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}).finally(()=>{u.classList.remove("loader")})}function h(){const t=new y(".container-img-wrap a",{close:!0,captionsData:"alt",captionDelay:50,captionsPosition:"bottom",animationSpeed:1,captionSelector:"img",loop:!0});t.on("show.simplelightbox"),t.refresh()}document.querySelector(".data-userInput").addEventListener("input",function(){E.innerHTML=""});function f(t,e){t>e&&l.show({position:"topRight",message:"Sorry, there are no images to load!",messageColor:"black",messageSize:"16",messageLineHeight:"15",backgroundColor:"yellow",timeout:5e3,displayMode:2,close:!0,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers.js.map
