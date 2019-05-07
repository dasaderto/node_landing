import WOW from 'wowjs';
const styles = require('../css/styles.js');

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

    //nav
    let btn = document.querySelector(".menu-icon");
    let collapse = document.querySelector('.nav__collapse');
    let menu = document.querySelector(".menu-icon");
    let lines = menu.querySelectorAll(".line");
    btn.addEventListener('click', function () {
        if (collapse.classList.contains("show")) {
            collapse.classList.remove("show");
            collapse.style.maxHeight = null;
            lines[0].style.width = "30px";
            lines[1].style.width = "15px";
            lines[2].style.width = "20px";
        } else {
            collapse.classList.add("show");
            collapse.style.maxHeight = collapse.scrollHeight + "px";
            menu.children[0].style.width = "30px";
            menu.children[1].style.width = "30px";
            menu.children[2].style.width = "30px";
        }
    });
});