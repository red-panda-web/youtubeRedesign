"use strict"

document.addEventListener("DOMContentLoaded", function () {
   const swiper = new Swiper('.swiper-container.swiper-container__videoLine1', {

      slidesPerView: 4,
      spaceBetween: 13,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });

});