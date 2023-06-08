let txt = "This is demo text for writing !I just added some random text ."

let i = 0;

const txtHolder = document.querySelector('.txt');

function typewritter() {
    if (i < txt.length) {
        txtHolder.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewritter, 100);
    }
}
const btn = document.querySelector('button');

btn.onclick = () => {
    i = 0;
    typewritter();
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        typewritter();
    }
}