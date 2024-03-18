window.addEventListener("scroll", function () {
    var aboutSection = document.querySelector(".about-section");
    if (isElementInViewport(aboutSection) && !aboutSection.classList.contains("animate")) {
        aboutSection.classList.add("animate");
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// contact
window.addEventListener("scroll", function () {
    var contactSection = document.querySelector(".contact-section");
    if (isElementInViewport(contactSection) && !contactSection.classList.contains("animate")) {
        contactSection.classList.add("animate");
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
