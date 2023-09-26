let firstNum = null;
let secondNum = null;
let curSign = null;
const equal = document.querySelector('.equal')
let digit = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');

digit.forEach((el) => {
  el.addEventListener('click', () => {
    if (firstNum) {
      secondNum = el.textContent;
      console.log(firstNum, secondNum);
    } else {
      firstNum = el.textContent;
      console.log(firstNum, secondNum);
    }
  });
});
operator.forEach((el) =>{
    el.addEventListener('click', () =>{
        curSign = el.textContent
    })
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
    console.log(operate(firstNum, secondNum, curSign))
})