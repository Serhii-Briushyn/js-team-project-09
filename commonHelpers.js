import{S as c}from"./assets/vendor-CWWiAS-8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".details-item .details-btn").forEach(r=>{r.addEventListener("click",function(){const i=this.closest(".details-item");i.classList.toggle("active");const e=i.querySelector(".details-content");i.classList.contains("active")?e.style.maxHeight=e.scrollHeight+"px":e.style.maxHeight=0})});const o=document.querySelector(".details-item.active .details-content");o&&(o.style.maxHeight=o.scrollHeight+"px");let s=new c(".swiper",{loop:!0,slidesPerView:2,spaceBetween:0,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{s.slideNext()})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".faq-item");o.forEach(s=>{const r=s.querySelector(".faq-content-question"),i=s.querySelector(".content-text");r.addEventListener("click",function(){const e=s.classList.contains("active");o.forEach(t=>{t!==s&&(t.classList.remove("active"),t.querySelector(".content-text").style.maxHeight=null)}),e?(s.classList.remove("active"),i.style.maxHeight=null):(s.classList.add("active"),i.style.maxHeight=i.scrollHeight+"px")})})});
//# sourceMappingURL=commonHelpers.js.map
