const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);
    });

    const scrollerInner = document.querySelector(".scroller__inner");
    let scrollerItems = Array.from(scrollerInner.children);

    scrollerItems.forEach(scrollerItem => {
        const duplicateItem = scrollerItem.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicateItem);
    })
}
