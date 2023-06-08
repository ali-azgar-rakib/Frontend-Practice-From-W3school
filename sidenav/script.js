const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const mySidenav = document.querySelector('#mySidenav');
const closeBtn = document.querySelector(' .closeBtn');
const main = document.querySelector('main');

btn.onclick = () => mySidenav.style.width = "20vw";
closeBtn.onclick = () => {
    mySidenav.style.width = "0";
    if (main.style.marginLeft !== 0) {
        main.style.marginLeft = 0;
    }
};

window.onkeydown = event => {
    if (event.keyCode === 27 && mySidenav.style.width !== 0) {
        mySidenav.style.width = "0";
        if (main.style.marginLeft !== 0) {
            main.style.marginLeft = 0;
        }
    }
}

btn1.onclick = () => {
    mySidenav.style.width = "250px";
    main.style.marginLeft = "250px";
};