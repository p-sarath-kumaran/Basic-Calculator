let expression = '';

function calcNumber(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function calcOperator(operator) {
    expression += operator;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
