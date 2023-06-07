let slideNumber = 0;
showSlide(slideNumber);

function myFunc(n) {
    console.log('acire vhai');
    showSlide(slideNumber += n);
}

function dotBtnClick(n) {
    showSlide(slideNumber = n);
}


function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length - 1) {
        slideNumber = 0;
    }
    if (n < 0) {
        slideNumber = slides.length - 1;
    }

    for (let slide of slides) {
        slide.style.display = 'none';
    }
    for (let dot of dots) {
        dot.classList.remove('active');
    }

    slides[slideNumber].style.display = 'block';
    dots[slideNumber].classList.add('active');
}