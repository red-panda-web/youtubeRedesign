"use strict"

document.addEventListener("DOMContentLoaded", function () {
   const swiper = new Swiper('.swiper-container.swiper-container__videoLine1', {
      slidesPerView: 4,
      spaceBetween: 13,
      navigation: {
         nextEl: '.swiper-button-next.swiper-button-next__videoLine1',
         prevEl: '.swiper-button-prev.swiper-button-prev__videoLine1',
      },
   });
   const swiper2 = new Swiper('.swiper-container.swiper-container__videoLine2', {
      slidesPerView: 4,
      spaceBetween: 13,
      navigation: {
         nextEl: '.swiper-button-next.swiper-button-next__videoLine2',
         prevEl: '.swiper-button-prev.swiper-button-prev__videoLine2',
      },
   });

   document.querySelector(".burgerIcon").addEventListener('click', function () {
      document.querySelectorAll(".asideBody li a").forEach((item) => {
         if (item.hidden) item.hidden = false;
         else item.hidden = true;
      });
      document.querySelector(".aside").classList.toggle("minimalized");
      document.querySelector(".asideBody").classList.toggle("minimalized");
      document.querySelectorAll(".asideBody__title").forEach((item) => {
         item.classList.toggle("minimalized");
      })
      document.querySelector(".asideBody__list_subscriptions").classList.toggle("minimalized");
      document.querySelector(".browseChannelsBtn").classList.toggle("minimalized");
   })

});