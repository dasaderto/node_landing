import WOW from 'wowjs';

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var slider = Peppermint(document.getElementById('peppermint'));

    let prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    prev.addEventListener('click', function () {
        slider.next();
    });

    next.addEventListener('click', function () {
        slider.prev();
    });

    slider.start();
    window.onresize = function (event) {
        slider.recalcWidth();
    };

    const wow = new WOW.WOW({
        live: false
    });
    wow.init();
});