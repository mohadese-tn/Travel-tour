let $=document;
let menu=$.querySelector('.menu-items');
let icon=$.querySelector('#menu-icon');

let morebtn=$.querySelector('.seemore-btn ');
let morediv=$.querySelector('.seemore');
let header = $.querySelector('.nav');




// ------responsive navbar(mobile version)
icon.addEventListener('click',function(){
    if (icon.classList.contains('fa-bars')){
        icon.classList='fa fa-times d-md-none';
        menu.style.right=0;
    }
    else {
        icon.classList='fa fa-bars d-md-none';
        menu.style.right="-600px";
    }
})

// ---------------swiper(for section3-packages)

const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    500:{
      slidesPerView:1,
      spaceBetween:5
    },
    600:{
      slidesPerView:2,
      spaceBetween: 10
      
    },
    920: {
      slidesPerView:3 ,
      spaceBetween: 20
    },
   
    1020: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// -----------see more btn(for section 4-destination)
morebtn.addEventListener('click', function(){
  if (morediv.classList.contains('seemore')){
    morebtn.innerHTML="See Less";
    morediv.classList.remove('seemore');
  }else{
    morebtn.innerHTML="See More";
    morediv.classList.add('seemore');

  }
})

// ------------sticky navbar

window.addEventListener('scroll', function() {
  header.classList.toggle('sticky', window.scrollY > 0);
  if (window.scrollY == 0 ){
    icon.style.top="20px"
  }else{
    icon.style.top="15px"
  }
});



