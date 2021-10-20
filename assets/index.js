function slideL() {
    let left = document.getElementById('checkleft');
    left.addEventListener('click', function () {
        document.getElementById("main").style.transform = `translateX(-100vw)`;
    });
}
slideL();
function slideR() {
    let right = document.getElementById('checkright');
    right.addEventListener('click', function () {
        document.getElementById("main").style.transform = `translateX(0)`;
    });
}
slideR();

let slideIndex = 0;

const showSlides = () => {
    const slides = document.getElementsByClassName("images-div");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
};

showSlides();
