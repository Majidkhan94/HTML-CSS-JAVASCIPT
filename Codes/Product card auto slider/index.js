const slider = document.getElementById("productSlider");

let scrollSpeed = 1; // Pixels per frame

function autoScroll() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        // Wapis start pe le aao bina jump ke
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += scrollSpeed;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
