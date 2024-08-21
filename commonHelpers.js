import{S as m,i as v}from"./assets/vendor-CAampjE4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const g=document.querySelector(".mobile-menu-button"),d=document.querySelector(".mobile-menu"),y=document.querySelector(".mobile-menu-close-button"),l=document.querySelector(".dropdown-nav"),b=document.querySelector(".menu-button"),L=document.querySelector(".mobile-nav"),h=document.querySelector(".project-order-button"),E=document.querySelector(".mobile-order-button");function S(){d.classList.add("is-open")}function q(){d.classList.remove("is-open")}function k(){l.classList.contains("dropdown-show")?l.classList.remove("dropdown-show"):l.classList.add("dropdown-show")}function x(e){e.key==="Escape"&&l.classList.remove("dropdown-show")}function u(e){e.preventDefault(),d.classList.contains("is-open")&&d.classList.remove("is-open");const t=e.target.getAttribute("href").substring(1),n=document.getElementById(t);window.scrollTo({top:n.offsetTop,behavior:"smooth"})}g.addEventListener("click",S);y.addEventListener("click",q);b.addEventListener("click",k);l.addEventListener("click",u);L.addEventListener("click",u);window.addEventListener("keydown",x);h.addEventListener("click",u);E.addEventListener("click",u);window.onclick=function(e){!e.target.matches(".menu-button")&&!e.target.matches(".dropdown-nav")&&l.classList.remove("dropdown-show")};document.addEventListener("DOMContentLoaded",function(){document.querySelector(".details-list").addEventListener("click",function(t){if(t.target.closest(".details-btn")){const n=t.target.closest(".details-item");n.classList.toggle("active");const i=n.querySelector(".details-content");n.classList.contains("active")?i.style.maxHeight=i.scrollHeight+"px":i.style.maxHeight=0}});const e=document.querySelector(".details-item.active .details-content");e&&(e.style.maxHeight=e.scrollHeight+"px"),new m(".skills-container.swiper",{loop:!0,slidesPerView:2,spaceBetween:0,navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".projects-parts");if(e){const t=document.querySelector(".projects-arrow-next"),n=document.querySelector(".projects-arrow-prev");n.classList.add("projects-arrow-disabled");const i=new m(e,{slidesPerView:1,spaceBetween:30,navigation:{nextEl:t,prevEl:n},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{spaceBetween:30},768:{spaceBetween:70},1440:{spaceBetween:67}},on:{slideChange:()=>{t.classList.toggle("projects-arrow-disabled",i.isEnd),n.classList.toggle("projects-arrow-disabled",i.isBeginning)}}});e.addEventListener("keydown",o=>{if(document.activeElement===e)switch(o.key){case"ArrowRight":o.preventDefault(),i.slideNext();break;case"ArrowLeft":o.preventDefault(),i.slidePrev();break}})}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-item .faq-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".faq-item");t.classList.toggle("active");const n=t.querySelector(".faq-content-text");t.classList.contains("active")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0})})});const a=document.querySelector(".cover-section");function B(e){const t=e.getBoundingClientRect(),n=window.innerHeight,i=window.innerWidth,o=t.left+t.width/2,s=t.top+t.height/2;return o>=0&&o<=i&&s>=0&&s<=n}function w(){B(a)?(a.classList.contains("scrolling")||console.log('Section is in viewport".'),a.classList.add("scrolling")):(a.classList.contains("scrolling")&&console.log('Section is out of viewport".'),a.classList.remove("scrolling"))}function M(e,t){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>e.apply(this,i),t)}}const C=M(w,100);window.addEventListener("scroll",C);w();(function(){const e="https://portfolio-js.b.goit.study/api/reviews",t=new m(".review-swiper",{direction:"horizontal",loop:!1,grabCursor:!0,navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},on:{init:function(){document.querySelector(".review-swiper-button-prev").classList.add("disabled"),document.querySelector(".review-swiper-button-next").classList.remove("disabled")},reachEnd:function(){document.querySelector(".review-swiper-button-next").classList.add("disabled"),document.querySelector(".review-swiper-button-prev").classList.remove("disabled")},reachBeginning:function(){document.querySelector(".review-swiper-button-prev").classList.add("disabled"),document.querySelector(".review-swiper-button-next").classList.remove("disabled")},fromEdge:function(){document.querySelector(".review-swiper-button-prev").classList.remove("disabled"),document.querySelector(".review-swiper-button-next").classList.remove("disabled")}}});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".review-swiper-button-prev").classList.add("disabled"),document.querySelector(".review-swiper-button-next").classList.remove("disabled");async function n(){try{const s=await fetch(e);if(!s.ok)throw new Error("Failed to fetch reviews");const r=await s.json();i(r)}catch(s){o(s.message)}}function i(s){const r=document.querySelector(".review-swiper-wrapper"),p=150,f=s.map(c=>` <li class="swiper-slide review-card"> <img src="${c.avatar_url}" class="review-img" alt="${c.author}" /> <p class="review-name">${c.author}</p> <p class="review-text">${c.review.length>p?c.review.substring(0,p)+"...":c.review}</p> </li> `).join("");r.innerHTML=f,t.update()}function o(s){const r=document.querySelector(".review-swiper-wrapper");r.innerHTML=`<li class="swiper-slide"><p>${s}</p></li>`}n()})})();document.getElementById("email").addEventListener("input",function(){const e=this,t=document.getElementById("email-validation");e.value===""?(e.classList.remove("error","success"),t.textContent=""):e.checkValidity()?(e.classList.remove("error"),e.classList.add("success"),t.textContent="Success!",t.classList.remove("error"),t.classList.add("success")):(e.classList.remove("success"),e.classList.add("error"),t.textContent="Invalid email, try again",t.classList.remove("success"),t.classList.add("error"))});document.querySelector(".form-btn").addEventListener("click",function(e){e.preventDefault();const t=document.getElementById("email").value,n=document.getElementById("comment").value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,comment:n})}).then(o=>{if(!o.ok)throw new Error("Server error");return o.json()}).then(o=>{document.querySelector(".footer-form").reset(),I(o.title,o.message)}).catch(()=>{O("Error","Something went wrong. Please check your input and try again.")})});function I(e,t){const n=document.getElementById("modal"),i=document.getElementById("modal-title"),o=document.getElementById("modal-message");i.textContent=e,o.textContent=t,n.style.display="block",document.body.classList.add("modal-open");function s(){n.style.display="none",document.body.classList.remove("modal-open")}document.getElementById("modal-close").addEventListener("click",s),n.addEventListener("click",function(r){r.target===n&&s()}),document.addEventListener("keydown",function(r){r.key==="Escape"&&s()})}function O(e,t){v.error({title:e,message:t,position:"topRight",timeout:3e3,transitionIn:"fadeIn",transitionOut:"fadeOut"})}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-close-btn"),t=document.querySelector(".header-mobile-open-btn"),n=document.querySelector(".mobile-menu");function i(){n.classList.toggle("is-open"),document.body.classList.toggle("menu-open")}e&&e.addEventListener("click",i),t&&t.addEventListener("click",i)});
//# sourceMappingURL=commonHelpers.js.map
