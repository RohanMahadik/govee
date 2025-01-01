let swiper = null; // Declare swiper instance

function initSwiper() {
    // Check if the screen width is less than or equal to 768px
    if (window.matchMedia('(max-width: 768px)').matches) {
        if (!swiper) {
            swiper = new Swiper('#services', {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
            });
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true); // Destroy Swiper instance
            swiper = null;
        }
    }
}

// Initialize Swiper on page load
window.addEventListener('load', initSwiper);

// Reinitialize Swiper on window resize
window.addEventListener('resize', initSwiper);
