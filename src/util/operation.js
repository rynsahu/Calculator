export default function operation(leftOperand, rightOperand, operator) {


    let result;

    switch (operator) {
        case '+' : 
            result = leftOperand + rightOperand;
            break;
        case '-' : 
            result = leftOperand - rightOperand
            break;
        case '/' : 
            result = leftOperand / rightOperand
            break;
        case 'x' : 
            result = leftOperand * rightOperand
            break;
        case 'DEL' : 
            result = DEL()
            break;
        case 'AC' : 
            result = AC()
            break;
        default:
            result = 'Error';
    }

    return result;
}

function DEL() {
    return null;
}

function AC() {
    return null;
}