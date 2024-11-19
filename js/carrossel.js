document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function updateCarousel() {
        const imageWidth = images.children[0].clientWidth;
        images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.children.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.children.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});
