const userSign = getSign()
const operandA = getOperand ('first')
const operandB = getOperand ('second')
const res = calc(userSign,operandA,operandB)

function getSign () {
    return prompt (' Enter operator /, *, +, - ')
}
function getOperand (name) {
    return Number (prompt (`Enter ${name} number`)) 
}
function calc(userSign,operandA,operandB){
if (userSign === '+') {
    showResult (userSign, operandA, operandB,  sum(operandA, operandB)) 
} else if (userSign === '-') {
    showResult (userSign, operandA, operandB,  sub(operandA, operandB))
} else if (userSign === '*') {
    showResult (userSign, operandA, operandB,  mult(operandA, operandB))
} else if (userSign === '/') {
    showResult (userSign, operandA, operandB,  div(operandA, operandB)) 
}
 else alert('Error, invalid operator')
}

function showResult (userSign, operandA, operandB, res, ) {
    alert(` Your result is  ${res}`)
}

function validNumber (operandA, operandB) {
    if (isNaN(operandA) || isNaN(operandB))
    alert('Error, invalid number')
}

function sum(a, b) {
   validNumber(operandA,operandB)
   return a +  b;
}
function sub(a, b) {
    validNumber(operandA,operandB)
    return a - b
}
function mult(a, b) {
    validNumber(operandA,operandB)
    return a * b
}
function div(a,b) {
    validNumber(operandA,operandB)
    return a / b
}

