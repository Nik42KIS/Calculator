let firstNum = '';
let secondNum = '';
let curSign = null;
const equal = document.querySelector('.equal')
const digit = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset')
let flag = false;

digit.forEach((el) => {
  el.addEventListener('click', () => {
    if (flag) {
      secondNum += el.textContent;
      console.log(firstNum, secondNum);
    } else {
      firstNum += el.textContent;
      console.log(firstNum, secondNum);
    }
  });
});
operator.forEach((el) =>{
    el.addEventListener('click', () =>{
        curSign = el.textContent
        flag = true
    })
})

reset.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    console.log(`firstNum : ${firstNum}`,  `secondNum : ${secondNum}`)
})

function operate(oneN, twoN, sign) {
    let result = 0;
    let first = Number(oneN);
    let second = Number(twoN)
    switch(sign){
        case '/': 
            result = first / second;
            break;
        case '+':
             result = first + second;
             break;
        case '*': 
            result = first * second;
            break;
        case '-': 
            result = first - second;
            break;
        default: result = 'error'
    }
    return result
    
}

equal.addEventListener('click', () =>{
    firstNum = operate(firstNum, secondNum, curSign)
    console.log(firstNum)
})