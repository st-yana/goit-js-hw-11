import{S as c,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const u=e=>{const r=new URLSearchParams({key:"46368026-ceb8dba76cba5a0f9c417db4a",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r.toString()}`,{}).then(l=>l.json())},n=new c(".search-result li a",{captionsData:"alt",captionDelay:250}),f=e=>{e.innerHTML="",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},m=(e,r)=>{e.innerHTML=r.map(p).join(""),n.refresh(),console.log("simpleLightboxGallery",n)},h=e=>{e.innerHTML="<span class='loader'/>"},p=e=>`
    <li class='search-result-item'>
      <a href='${e.largeImageURL}'>
        <img class='search-result-item-image' src='${e.webformatURL}' alt='${e.tags}'/>
      </a>
      <ul class='search-result-item-text'>
        <li class='field'>
          <div class='label'>
            Likes
          </div>
          <div class='value'>
            ${e.likes}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Views
          </div>
          <div class='value'>
            ${e.views}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Comments
          </div>
          <div class='value'>
            ${e.comments}
          </div>
        </li>
        <li class='field'>
          <div class='label'>
            Downloads
          </div>
          <div class='value'>
            ${e.downloads}
          </div>
        </li>
      </ul>
    </li>
  `,v=document.querySelector("form"),y=document.querySelector("input"),o=document.querySelector(".search-result");v.addEventListener("submit",e=>{e.preventDefault(),o.innerHTML="",h(o),u(y.value).then(r=>{r.hits.length===0&&f(o),m(o,r.hits),console.log(r),console.log(r)})});
//# sourceMappingURL=index.js.map
