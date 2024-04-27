

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Swiper após o carregamento do DOM
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Isso permite o loop infinito
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Adiciona autoplay para o loop contínuo
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
