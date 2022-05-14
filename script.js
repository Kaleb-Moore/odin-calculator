let results = document.querySelector('.results');

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (results.value == '0') {
            results.value = e.target.innerText;
        } else {
            results.value += e.target.innerText;
        }

    })
})
