var mySwiper = new Swiper('.swiper', {
    // Parámetros de configuración
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        // cuando el ancho de la ventana es >= 320px
        320: {
            slidesPerView: 1,
        },
        // cuando el ancho de la ventana es >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // cuando el ancho de la ventana es >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var openButton = document.querySelector('.open-button');
    var closeButton = document.querySelector('.close-button');
    var sidebar = document.querySelector('.sidebar');

    openButton.addEventListener('click', function () {
        sidebar.classList.add('sidebar--active');
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('sidebar--active');
    });
});