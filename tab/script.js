function showContent(id) {
    const buttons = document.querySelectorAll('.tab button');
    const tabContents = document.querySelectorAll('.tab-content');

    for (let item of buttons) {
        item.classList.remove('active');

    }
    for (let tab of tabContents) {
        tab.classList.remove('showTab');
    }

    buttons[id].classList.add('active');
    tabContents[id].classList.add('showTab');



}