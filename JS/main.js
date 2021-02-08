// Sliders
$(document).ready(function () {

   // Tending Sliders
   $('.trending-slider__shows').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      nextArrow: `.trending-shows__next`,
      prevArrow: `.trending-shows__prev`,
      zIndex: 5,
      responsive: [{
            breakpoint: 1366,
            settings: {
               slidesToShow: 5
            }
         },
         {
            breakpoint: 1174,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               centerMode: true,
            }
         },
         {
            breakpoint: 848,
            settings: {
               slidesToShow: 2,
               centerMode: true,
            }
         },
         {
            breakpoint: 633,
            settings: {
               slidesToShow: 1.8,
               centerMode: true,
            }
         },
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 1.5,
               centerMode: true,
            }
         },
         {
            breakpoint: 503,
            settings: {
               slidesToShow: 1.2,
               slidersToScroll: 1,
               centerMode: true,
            }
         },
         {
            breakpoint: 439,
            settings: {
               slidersToScroll: 1,
               slidesToShow: 1,
               centerMode: true
            }
         },
      ]
   })

   // Tending Sliders
   $('.trending-slider__movies').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      nextArrow: `.trending-movies__next`,
      prevArrow: `.trending-movies__prev`,
      zIndex: 5,
      responsive: [{
            breakpoint: 1366,
            settings: {
               slidesToShow: 5
            }
         },
         {
            breakpoint: 1174,
            settings: {
               slidesToShow: 4
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               centerMode: true,
            }
         },
         {
            breakpoint: 848,
            settings: {
               slidesToShow: 2,
               centerMode: true,
            }
         },
         {
            breakpoint: 633,
            settings: {
               slidesToShow: 1.8,
               centerMode: true,
            }
         },
         {
            breakpoint: 568,
            settings: {
               slidesToShow: 1.5,
               centerMode: true,
            }
         },
         {
            breakpoint: 503,
            settings: {
               slidesToShow: 1.2,
               slidersToScroll: 1,
               centerMode: true,
            }
         },
         {
            breakpoint: 439,
            settings: {
               slidesToShow: 1,
               slidersToScroll: 1,
               centerMode: true
            }
         },
      ]
   });

   // Channeles Sliders
   $('.channeles-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      nextArrow: `.channeles-next`,
      prevArrow: `.channeles-prev`,
      zIndex: 5,
   });

   // Actors Sliders
   $('.actors-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      zIndex: 5,
      nextArrow: `.actors-next`,
      prevArrow: `.actors-prev`,
   });


});


// Burger Menu
let burgerMenu = document.querySelector(".burger-menu");
let menuList = document.querySelector(".menu-list");

burgerMenu.addEventListener("click", () => {
   burgerMenu.classList.toggle("active");
   menuList.classList.toggle("active");
})