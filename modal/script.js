const btn = document.querySelector('.btn');
const modal = document.querySelector('#myModal');
const closeBtn = document.querySelector('.close');

btn.onclick = () => {
    modal.classList.add('showModal');
}

closeBtn.onclick = () => {
    modal.classList.remove('showModal');
}