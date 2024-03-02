let expression='';
function addnumber(num) {
    expression += num;
    document.getElementById('display').value = expression;
}
function addoperator(operator) {
    expression += operator;
    document.getElementById('display').value = expression;
}
function rem() {
    expression = '';
    document.getElementById('display').value = expression;
}
function del(){
    expression = expression.slice(0,-1);
    document.getElementById('display').value = expression;
}
function calculate() {
    const result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
}
