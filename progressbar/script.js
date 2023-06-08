let statusProgress = 0;
function progressBar() {
    if (statusProgress === 0) {
        statusProgress = 1;
        const progressBar = document.querySelector('.progress-bar');

        let width = 1;


        let id = setInterval(() => {
            if (width >= 100) {
                console.log('end....')
                statusProgress = 0;
                clearInterval(id);
            } else {
                width++;
                progressBar.style.width = width + "%";
                progressBar.innerHTML = width + "%";

            }
        }, 100);
    }

}

document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
        progressBar();
    }
}

const btn = document.querySelector('.btn');
btn.onclick = () => progressBar();

