let results = document.querySelector('.results');

let buttons = document.querySelectorAll('button');

let numObj = {
    num: 0,
    operator: '',
};

let total = 0;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //just started using calculator
        if (results.value === '0' || results.value == total) {
            results.value = e.target.innerText;

        //if an operator was clicked and there is already a num in obj
        } else if ((e.target.innerText === '-' || e.target.innerText === '/' 
        || e.target.innerText === '*' || e.target.innerText === '+') && numObj.num != "0"){
            doMath(numObj, results.value);
            results.value = total;
        
        //it an operator was clicked and there is no num in obj
        } else if (e.target.innerText === '-' || e.target.innerText === '/' 
        || e.target.innerText === '*' || e.target.innerText === '+' && numObj.num == 0) {
            numObj = (makeNum(results.value, e.target.innerText));
            total = parseInt(numObj.num)
            results.value = total;
        
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
    if (obj.operator === '/') {
        total = parseInt(obj.num) / parseInt(nextVal);
    } else if (obj.operator === '*') {
        total = parseInt(obj.num) * parseInt(nextVal);
    } else if (obj.operator === '-') {
        total = parseInt(obj.num) - parseInt(nextVal);
    } else if (obj.operator === '+') {
        total = parseInt(obj.num) + parseInt(nextVal);
    };
}

function clear() {
    numObj.num = 0;
    numObj.operator = '';
    total = 0;
    results.value = 0;
}
