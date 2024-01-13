function multiply(x, y) {
    return x * y;
}

const add = (num1, num2) => {
    return num1 + num2;
};

function minus(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const divideByTwo = (num) => {
    return num / 2;
};

module.exports = {
    add,
    minus,
    multiply,
    divide,
    divideByTwo
}
