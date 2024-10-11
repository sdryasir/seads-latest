// AOS Initilization
AOS.init();



let headerSect = document.querySelector("#headerSect");

let headerHeight = headerSect.offsetHeight;

let heroSect = document.querySelector("#heroSect");

heroSect.style.paddingTop = headerHeight + "px";






const navToggler = document.getElementById('navToggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    navToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        document.body.style.overflow = '';
    });

    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        document.body.style.overflow = 'hidden';
    });


    //swiper

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: true,
        speed: 1000,
        spaceBetween: 30,
        breakpoints: {
            420:{
                slidesPerView: 1,
            },
            576:{
                slidesPerView: 2,
            },

            768: {
                slidesPerView: 3,
            },
            991:{
                slidesPerView: 4,
            }


        }
            
      });

      //maqrue
      let marqueeContent = document.querySelector('.marquee-content');

let cloneContent = marqueeContent.innerHTML; // Clone the content

marqueeContent.innerHTML += cloneContent; // Append the cloned content to the original

let contentWidth = marqueeContent.scrollWidth / 2; // Adjust for the cloned content

// Animate the marquee
let marqueeAnim = gsap.to(marqueeContent, {
  x: -(contentWidth), 
  duration: 30, 
  ease: 'linear',
  repeat:-1, 
  paused: false,
});

// Pause the marquee on hover
marqueeContent.addEventListener('mouseover', () => {
  marqueeAnim.pause();
});

// Resume the marquee on mouse leave
marqueeContent.addEventListener('mouseleave', () => {
  marqueeAnim.resume();
});
