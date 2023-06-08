const image = document.querySelector('#myImage');
const modal = document.querySelector('#myModal');
const close = document.querySelector('.close');
const caption = document.querySelector('.caption');



image.onclick = () => {
    modal.style.display = 'flex';
    caption.innerHTML = image.alt;
};
close.onclick = () => modal.style.display = 'none';

window.onkeydown = event => {
    if (event.keyCode === 27) {
        modal.style.display = 'none';
    }
}
