// Set-up relevant HTML elements as variables

let burger = document.querySelector('.burger');
let links = document.querySelectorAll('.links');

/* CLICK */

// Toggle the display class of the links
const clickHandler = () => {
    links.forEach((link) => {
        link.classList.toggle("display-none");
        link.classList.toggle("display-block");
    });
};

burger.addEventListener("click", clickHandler);

/* RESIZE */

// Necessary function to stay DRY on the resizeHandler for links
const linkResizer = (classRemoved, classAdded) => {
    links.forEach((link) => {
        link.classList.remove(classRemoved);
        link.classList.add(classAdded);
    });
};

// Necessary function to stay DRY on the resizeHandler for the burger
const burgerResizer = (classRemoved, classAdded) => {
        burger.classList.remove(classRemoved);
        burger.classList.add(classAdded);
};

// At 880px make the burger appear and the links disappear
const resizeHandler = () => {
    if (window.innerWidth <= 880) {
        burgerResizer("display-none" , "display-block");
        linkResizer("display-block" , "display-none");
    } else {
        burgerResizer("display-block" , "display-none");
        linkResizer("display-none" , "display-block");
    }
};

window.addEventListener("resize", resizeHandler);