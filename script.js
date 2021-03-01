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

});