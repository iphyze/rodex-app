$(document).ready(function () {
    $(".menu-link").click(function () {
      $(".menu-link").removeClass("active-menu");
      $(this).addClass("active-menu");

      var targetId = $(this).data("target");
      $(".menu-content > div").hide();
      $("#" + targetId).show();
    });
});    
    
    
    
$(document).ready(function () {
   
var swiper = new Swiper('.music-carousel-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true, // Enable loop mode
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds (adjust as needed)
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
});    
       
    
});    
   
    
    
$(document).ready(function() {
    
    
    $('.menu-button-open').click(function(event) {
        if ($(window).width() <= 720) {
            $('.nav-menu').css({
                'transform': 'translate(0%)',
            });
        }
    });

    $('.menu-button').click(function(event) {
        if ($(window).width() <= 720) {
            $('.nav-menu').css({
                'transform': 'translate(-100%)',
            });
        }
    });

    // Close menu if clicked outside when menu is open
    $(document).on('click', function(event) {
        if ($(window).width() <= 720 && $('.nav-menu').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)' && !$(event.target).closest('.nav-menu').length) {
            $('.nav-menu').css({
                'transform': 'translate(-100%)',
            });
        }
    });
    

});




$(document).ready(function () {
   
var swiper = new Swiper('.trend-swiper', {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true, // Enable loop mode
    navigation: {
            nextEl: '.trend-swiper-button-next',
            prevEl: '.trend-swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 10000, // Auto slide every 3 seconds (adjust as needed)
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
    }
});    
       
    
}); 



$(document).ready(function () {
   
var swiper = new Swiper('.spotlight-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true, // Enable loop mode
    navigation: {
            nextEl: '.spotlight-swiper-button-next',
            prevEl: '.spotlight-swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds (adjust as needed)
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});    
       
    
}); 




$(document).ready(function(){

// Check for saved mode preference in local storage
const savedMode = localStorage.getItem('darkMode');

// Apply dark mode if saved preference exists
if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.theme-mode').checked = true;
}

// Toggle dark mode when the switch is clicked
document.querySelector('.theme-mode').addEventListener('click', () => {
    const darkModeEnabled = document.querySelector('.theme-mode').checked;
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

        
    
});