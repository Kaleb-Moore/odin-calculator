let results = document.querySelector('.results');
let runningTotal = document.querySelector('.total');

let buttons = document.querySelectorAll('button');

let numObj = {
    num: 0,
    operator: '',
};

let total = 0;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //just started using calculator
        if (e.target.innerText === "=") {
            doMath(numObj, results.value);
            results.value = total;
            runningTotal.innerText = total;

        } else if (results.value === '0' && e.target.innerText != "/" && e.target.innerText != "*"
        && e.target.innerText != "-" && e.target.innerText != "+") {
            results.value = e.target.innerText;
        
        //if an operator was clicked and there is already a num in obj
        } else if ((e.target.innerText === '-' || e.target.innerText === '/' 
        || e.target.innerText === '*' || e.target.innerText === '+') && numObj.num != "0"){
            doMath(numObj, results.value);
            numObj = makeNum(total, e.target.innerText);
            runningTotal.innerText = total;
            results.value = 0;

        //it an operator was clicked and there is no num in obj
        } else if (e.target.innerText === '-' || e.target.innerText === '/' 
        || e.target.innerText === '*' || e.target.innerText === '+' && numObj.num === 0) {
            numObj = (makeNum(results.value, e.target.innerText));
            total = parseFloat(numObj.num)
            runningTotal.innerText = total;
            results.value = 0;
        
        //adds number to end of value to make a bigger number
        } else {
            results.value += e.target.innerText;
        }

        if (e.target.innerText === "Clear") {
            clear();
        }
    })
})

function makeNum(num, operator) {
    return {
        num,
        operator,
    };
}

function doMath(obj, nextVal) {

    if (obj.operator === '/' && nextVal == 0) {
        alert("You can't divide by Zero");
        clear();
    } else if (obj.operator === '/') {
        total = parseFloat(obj.num) / parseFloat(nextVal);
    } else if (obj.operator === '*') {
        total = parseFloat(obj.num) * parseFloat(nextVal);
    } else if (obj.operator === '-') {
        total = parseFloat(obj.num) - parseFloat(nextVal);
    } else if (obj.operator === '+') {
        total = parseFloat(obj.num) + parseFloat(nextVal);
    };
}

function clear() {
    numObj.num = 0;
    numObj.operator = '';
    total = 0;
    results.value = 0;
    runningTotal.innerText = 0;
}
