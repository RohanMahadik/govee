
// Swiper for service section
let swiper = null; // Declare swiper instance

function initSwiper() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        if (!swiper) {
            swiper = new Swiper('#servies', {
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

// Initialize on load
initSwiper();

// Re-check on window resize
window.addEventListener('resize', initSwiper);