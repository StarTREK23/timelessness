window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");

    // Simulate loading time (you can replace this with actual content loading logic)
    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 1000); // Adjust the time as needed
});