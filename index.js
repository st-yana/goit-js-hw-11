import{S as d,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const u=e=>{const r=new URLSearchParams({key:"46368026-ceb8dba76cba5a0f9c417db4a",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r.toString()}`,{}).then(i=>i.json())},n=new d(".search-result li a",{captionsData:"alt",captionDelay:250}),f=e=>{e.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},h=e=>{e.innerHTML="",c.error({message:"Something went wrong. Please try again!",position:"topRight"})},m=(e,r)=>{e.innerHTML=r.map(v).join(""),n.refresh(),console.log("simpleLightboxGallery",n)},p=e=>{e.innerHTML="<span class='loader'/>"},v=e=>`
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
  `,y=document.querySelector("form"),g=document.querySelector("input"),o=document.querySelector(".search-result");y.addEventListener("submit",e=>{e.preventDefault(),o.innerHTML="",p(o),u(g.value).then(r=>{r.hits.length===0&&f(o),m(o,r.hits),console.log(r),console.log(r)}).catch(()=>{h(o)})});
//# sourceMappingURL=index.js.map
