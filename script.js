class Calculator{
    constructor(currentScreen , previousScreen){
        this.previousText = previousScreen;
        this.currentText = currentScreen;
        this.clear();

    }
    putNumber(num){
        if(num === '.' && this.currentOperand.includes('.'))return
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }
    chooseOperation(op){
        if(this.currentOperand === "")return
        if(this.previousOperand !== ""){
            this.compute();
        }
        this.operation = op;
        this.previousOperand = this.currentOperand + " " + op ;
        this.currentOperand = '';
    }
    compute(){
        let result
        let previous = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        switch (this.operation){
            case '+' :
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '/':
                result = previous / current;
                break;
            case '*':
                result = previous * current;
                break
            default:
                return
        }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";

    }
    update(){
       this.currentText.innerText = this.currentOperand ;
       this.previousText.innerText = this.previousOperand;

    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }
}

//selectors
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const backspaceButton = document.querySelector('.backspace');
const currentScreen = document.querySelector('.currentOperand')
const previousScreen = document.querySelector('.previousOperand')
const point = document.querySelector('.point');

const calculator = new Calculator(currentScreen , previousScreen)

numbers.forEach(number=>{
    number.addEventListener('click',()=>{
        calculator.putNumber(number.innerText);
        calculator.update()
    })
})

operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
        calculator.chooseOperation(operator.innerText);
        calculator.update();
    })
})
equalsButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.update();
})
deleteButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.update();
})
backspaceButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.update();
})
