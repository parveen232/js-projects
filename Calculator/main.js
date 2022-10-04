const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (type === 'number') {
        if (displayValue === '0' || previousKeyType === 'operator') {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }
    }

    if (type === 'operator') {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(el => {el.dataset.state = ''});

        // const currentActiveOperator = calculator.querySelector('[data-state="selected"]');
        // if (currentActiveOperator) {
        //     currentActiveOperator.dataset.state = '';
        // }

        key.dataset.state = 'selected';

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if (type === 'equal') {
        // perform a calculation
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;

        display.textContent = calculate(firstNumber, operator, secondNumber);
    }

    calculator.dataset.previousKeyType = type;
})

function calculate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if(operator === 'plus') return firstNumber + secondNumber;
    if(operator === 'minus') return firstNumber - secondNumber;
    if(operator === 'times') return firstNumber * secondNumber;
    if(operator === 'divide') return firstNumber / secondNumber;
}