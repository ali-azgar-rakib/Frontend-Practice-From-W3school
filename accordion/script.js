const accordion = document.querySelectorAll('.accordion');
let item = {};
for (item of accordion) {

    item.onclick = function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('panelToggle')
    };
}

function name(params) {

}