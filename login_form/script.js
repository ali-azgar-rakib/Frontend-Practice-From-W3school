const startBtn = document.querySelector('#startBtn');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');
const cancelBtn = document.querySelector('.cancelBtn')

startBtn.onclick = () => {
    modal.style.display = 'block';
    startBtn.style.display = 'none';
};

close.onclick = () => {
    modal.style.display = 'none';
    startBtn.style.display = 'block';
}
cancelBtn.onclick = () => {
    modal.style.display = 'none';
    startBtn.style.display = 'block';
}

