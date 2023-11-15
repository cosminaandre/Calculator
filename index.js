let calculation = '';
const display = document.getElementById('display');
let equal = document.getElementById('equal-btn');
let erase = document.getElementById('delete-btn');

function calculateNumbers(value){
 calculation += value;
 display.textContent = calculation;
 console.log(calculation);
};

function equalCalculate(){
  calculation = eval(calculation);
  console.log(calculation);
  display.textContent = calculation
};

function eraseCalculate(){
  if(erase) {
    calculation = '';
    console.log(calculation);
    display.textContent = calculation
  } else {
    console.log('wasnt erased')
  };
};
  






