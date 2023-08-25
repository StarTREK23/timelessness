document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        slides[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    
    function animate() {
        Wave(title);
        Wave(titleshadow);
        illo.rotate.y+=isSpinning ? -0.03 :0;
        t += tStep;
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    animate();
    });