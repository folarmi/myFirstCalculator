//Selectors
const display = document.getElementById("display");
const decimalPoint = document.getElementById("dp");
const clearButton = document.getElementById("clear");
const buttonNumbers = document.getElementsByClassName("digits");
const operators = document.getElementsByClassName("keyOperators");

var displayValue = "0";
var pendingValue;
var evaluate = [];

//function
showDisplayValue = (e) => {
    //holds the content of the button clicked
    var buttonContent = e.target.innerText;
    if (displayValue === "0"){
        displayValue = ""
    } 
    displayValue += buttonContent;
    display.innerText = displayValue;
}

 
// Performs mathematical evaluations
engine = (e) => {
    var checkOperator = e.target.innerText;

     switch(checkOperator){
        case '+':
             pendingValue = displayValue;
             displayValue = '0';
             display.innerText = displayValue;
             evaluate.push(pendingValue);
             evaluate.push('+');
             break;
        case '-':
            pendingValue = displayValue;
            displayValue = '0';
            display.innerText = displayValue;
            evaluate.push(pendingValue);
            evaluate.push('-');
            break;
        case 'x':
            pendingValue = displayValue;
            displayValue = '0';
            display.innerText = displayValue;
            evaluate.push(pendingValue);
            evaluate.push('*');
            break;
        case '÷':
            pendingValue = displayValue;
            displayValue = '0';
            display.innerText = displayValue;
            evaluate.push(pendingValue);
            evaluate.push('/');
            break;
        case '=':
            evaluate.push(displayValue);
            var finalResult = eval(evaluate.join(''));
            displayValue = finalResult + '';
            console.log(typeof displayValue);
            display.innerText = displayValue;
            evaluate = [];
            break;
        default:
            break;
     }
}

//event Listeners
for (let i = 0; i < buttonNumbers.length; i++) {
    buttonNumbers[i].addEventListener('click' ,showDisplayValue)
};

for (let i =0; i < operators.length; i++){
    operators[i].addEventListener('click' , engine)
};


clearButton.onclick = () => {
    displayValue = '0'
    pendingValue = undefined;
    evaluate = []
    display.innerHTML = displayValue;
}

decimalPoint.onclick = () => {
    if(!displayValue.includes('.')) {
        displayValue += '.';
    }
    display.innerText = displayValue;
}
