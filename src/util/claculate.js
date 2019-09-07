import operation from './operation';

export default function calculate (keyInputs, display) {

    const { leftOperand, operator , rightOperand} = extract(keyInputs, display);

    console.log(`Left operand: ${leftOperand} || type: ${typeof leftOperand}`)
    console.log(`Right Operand: ${rightOperand} || type: ${typeof rightOperand}`)
    console.log(`Operator: ${operator}`)

    const result = operation(leftOperand, rightOperand, operator);
    
    const currentValue = ''+result;
    const currentIndex = keyInputs.length;

    return { currentValue, currentIndex};
}

function extract(keyInputs, { value, nextIndex: initialIndex}){
    let leftOperand = value;
    let rightOperand = '';
    let operator;
    let isOperatorGet = false;

    for(let index = initialIndex; index < keyInputs.length; index++){

        if(typeof keyInputs[index] === "number") { 
            if(isOperatorGet) rightOperand += keyInputs[index];
            else leftOperand += keyInputs[index];
        }
        else if(keyInputs[index] === '.') {
            if(isOperatorGet) rightOperand += keyInputs[index];
            else leftOperand += keyInputs[index];
        }
        else {
            isOperatorGet = true;
            operator = keyInputs[index];
        }

    }

    console.log(`-->Left operand: ${leftOperand} || type: ${typeof leftOperand}`)
    console.log(`-->Right Operand: ${rightOperand} || type: ${typeof rightOperand}`)
    console.log(`-->Operator: ${operator}`)
    console.log(`-->isOperatorGet: ${isOperatorGet}`)

    leftOperand = leftOperand.includes('.') ? parseFloat(leftOperand) : parseInt(leftOperand);
    rightOperand = rightOperand.includes('.') ? parseFloat(rightOperand) : parseInt(rightOperand); 

    return { leftOperand, operator , rightOperand}
}

