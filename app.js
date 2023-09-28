let firstNum = '';
let secondNum = '';
let curSign = null;
const equal = document.querySelector('.equal');
const digit = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const out = document.querySelector('.display__out');
let flag = false;

digit.forEach((el) => {
  el.addEventListener('click', () => {
    if (flag) {
      secondNum += el.textContent;
      out.textContent += el.textContent;
    } else {
      firstNum += el.textContent;
      out.textContent = firstNum;
    }
  });
});
operator.forEach((el) => {
  el.addEventListener('click', () => {
    curSign = el.textContent;
    out.textContent += el.textContent;
    flag = true;
  });
});

reset.addEventListener('click', () => {
  firstNum = '';
  secondNum = '';
  out.textContent = 0;
  flag = false;
});

function operate(oneN, twoN, sign) {
  let result = 0;
  let first = Number(oneN);
  let second = Number(twoN);

  switch (sign) {
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
    default:
      result = 'error';
  }
  return result;
}

equal.addEventListener('click', () => {
  firstNum = operate(firstNum, secondNum, curSign);
  out.textContent =  firstNum.toFixed(2);
  secondNum = '';
});
