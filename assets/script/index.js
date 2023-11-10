'use strict';

// Utility Function

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

onEvent('load', window, carousel);

const slideShow = selectAll('.slides');
let myIndex = 0;

function carousel() {
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    myIndex++ 

        if (myIndex > slideShow.length) {
            myIndex = 1;
        }
        slideShow[myIndex -1].style.display = "flex";
        setTimeout(carousel, 3000);
    }
