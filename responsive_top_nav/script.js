const btn = document.querySelector('.icon');
const nav = document.querySelector('.topnav');

btn.onclick = () => {
    nav.classList.toggle('responsive');
}