const previousOutput = document.getElementById('previous-output');;
const currentOutput = document.getElementById('current-output');
const operatorButton = document.getElementsByClassName('operator');
const numberButton = document.getElementsByClassName('number');

function getOutputHistory(){
  return previousOutput.innerText;
}
function printOutputHistory(num){
  return previousOutput.innerText = num;
}
function getOutput(){
  return currentOutput.innerText;
}
function printOutput(num){
  if(num === '-'){
    return "";
  }
  let e = Number(num);
  let coma = e.toLocaleString("en");
  if(num === ""){
    return currentOutput.innerText = num;
  }else{
    return currentOutput.innerText = coma;
  }
}
function reverseFormat(num){
  return Number(num.replace(/,/g,''));
}

for(let i = 0; i < operatorButton.length; i++){
	operatorButton[i].addEventListener('click',function(){
		if(this.id === "clear"){
			printOutputHistory("");
			printOutput("");
		}
		else if(this.id === "delete"){
			let output = reverseFormat(getOutput()).toString();
			if(output){
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			let output = getOutput();
			let history = getOutputHistory();
			if(output === "" && history !== ""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0, history.length-1);
				}
			}
			if(output !== "" || history !== ""){
				output = output===""?output:reverseFormat(output);
				history = history + output;
				if(this.id === "="){
					let result = eval(history);
					printOutput(result);
					printOutputHistory("");
				}
				else{
					history=history+this.id;
					printOutputHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

for(i = 0; i < numberButton.length; i++){
  numberButton[i].addEventListener('click', function(){
    let output = reverseFormat(getOutput());
    if(output !== NaN){
      output = output+this.id;
      printOutput(output);
    }
  });
  }