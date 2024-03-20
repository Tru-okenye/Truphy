// window.addEventListener("scroll", function () {
//     var aboutSection = document.querySelector(".about-section");
//     if (isElementInViewport(aboutSection) && !aboutSection.classList.contains("animate")) {
//         aboutSection.classList.add("animate");
//     }
// });

// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // contact
// window.addEventListener("scroll", function () {
//     var contactSection = document.querySelector(".contact-section");
//     if (isElementInViewport(contactSection) && !contactSection.classList.contains("animate")) {
//         contactSection.classList.add("animate");
//     }
// });

// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// new

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            scroller.classList.add("animated"); // Add a class to trigger animation
            const scrollerInner = document.querySelector('.inner-scroller');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
            console.log(duplicatedItem)
            })
        });
    }
});



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');

        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}



