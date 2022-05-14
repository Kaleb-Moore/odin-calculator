let results = document.querySelector('.results');

let buttons = document.querySelectorAll('button');

let numArray = [];

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (results.value === '0') {
            results.value = e.target.innerText;
        }else if (e.target.innerText === '-' || e.target.innerText === '/' || e.target.innerText === '*' || e.target.innerText === '+') {
            numArray.push(makeNum(results.value, e.target.innerText));
            results.value = '0';
        } else {
            results.value += e.target.innerText;
        }

    })
})

function makeNum(num, operator) {
    return {
        num,
        operator,
    };
}
