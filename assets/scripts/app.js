// toggle mobile menu
const navMenu = document.querySelector("#nav-menu"),
    navClose = document.querySelector("#nav-close"),
    navShow = document.querySelector("#nav-show"),
    header = document.querySelector("#header");

if (navShow) {
    navShow.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        if (navMenu.classList.contains("active"))
            navMenu.classList.remove("active");
    });
}

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 25)
        header.classList.add("active");
    else
        header.classList.remove("active");
});

// modal
const modals = document.querySelectorAll(".shop__modal"),
    shopButtons = document.querySelectorAll(".shop__button"),
    modalCloses = document.querySelectorAll(".modal__close"),
    modalBoxes = document.querySelectorAll(".modal__box");

let activeModal = (modalClick) => {
    modals[modalClick].classList.add("active");
}

shopButtons.forEach((shopButton, i) => {
    shopButton.addEventListener("click", () => {
        activeModal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modals.forEach((modal) => {
            modal.classList.remove("active");
        });
    });
});

modals.forEach((modal) => {
    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});

modalBoxes.forEach((modalBox) => {
    modalBox.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

// swiper
const swiperShowcase = new Swiper('.showcase__swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        formatFractionCurrent: (number) => { return "0" + number },
        formatFractionTotal: (number) => { return "0" + number },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const swiperTop = new Swiper('.top__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto",

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});