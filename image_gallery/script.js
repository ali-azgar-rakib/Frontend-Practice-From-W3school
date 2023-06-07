function openModal() {
    document.getElementById('myModel').style.display = 'block';
}
function closeModal() {
    document.getElementById('myModel').style.display = 'none';
}

let slideNumber = 0;



function showSlide(n) {
    if (typeof (n) === 'number') {
        slideNumber = n;
    }

    const slides = document.querySelectorAll('.mySlide');
    const demoImages = document.querySelectorAll('.demo');
    const caption = document.querySelector('.caption');
    if (n === 'increment') {
        n = ++slideNumber;
    }
    if (n === 'decrement') {
        n = --slideNumber;
    }

    if (n > slides.length - 1) {
        slideNumber = 0;
    }
    if (n < 0) {
        slideNumber = slides.length - 1;
    }
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    for (let image of demoImages) {
        image.classList.remove('active');
    }

    slides[slideNumber].style.display = 'block';
    demoImages[slideNumber].classList.add('active');
    caption.innerHTML = demoImages[slideNumber].alt;
}


window.onkeydown = (event) => {
    if (event.keyCode === 27) {
        closeModal();
    }
}