let isPlayerX = true;
//leer datos

const playerClick = (event) => {
    
    var box = event.target;
    var boxId = box.id;
    var boxValue = box.innerHTML;
  
    markBox(box);
    let ruleWinner = checkWinner(boxValue);
    if(ruleWinner){
        console.log(ruleWinner);
    }
  };

var markBox = (box) => {

  if (box.innerHTML !== "" || box.innerHTML.length > 0) {
    console.log(`La casilla ${box.id} ya fue utilizada.`);
    return;
  }

  if (isPlayerX == true) {
    box.innerHTML = "X";
  } else {
    box.innerHTML = "O";
  }
//   console.log(isPlayerX)
  isPlayerX = !isPlayerX;
//   console.log(isPlayerX)
};

let box11Value = document.getElementById("11").innerHTML;
let box12Value = document.getElementById("12").innerHTML;
let box13Value = document.getElementById("13").innerHTML;

let box21Value = document.getElementById("21").innerHTML;
let box22Value = document.getElementById("22").innerHTML;
let box23Value = document.getElementById("23").innerHTML;

let box31Value = document.getElementById("31").innerHTML;
let box32Value = document.getElementById("32").innerHTML;
let box33Value = document.getElementById("33").innerHTML;

var rule1 = [11, 12, 13];
var rule2 = [21, 22, 23];
var rule3 = [31, 32, 33];
var rule4 = [11, 21, 31];
var rule5 = [12, 22, 32];
var rule6 = [13, 23, 33];
var rule7 = [11, 22, 33];
var rule8 = [13, 22, 31];

var rules = [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8];

var checkWinner = (boxId) => {

    let ruleWinner;
    for (let i = 0; i < rules.length; i++) {

        const rule = rules[i];  
        let initialBoxValue;

        for (let j = 0; j < rule.length; j++) {

            const id = rule[j];
            
            if(j == 0) {

                initialBoxValue = document.getElementById(id).innerHTML
                if(initialBoxValue == "") {
                    break;
                }

                continue;
            }
            
            let currentBoxValue = document.getElementById(id).innerHTML
            if(currentBoxValue == "" || initialBoxValue != currentBoxValue){
                break;
            }

            if(j == (rule.length - 1)){
                ruleWinner = rule; 
            }
        }

        if(ruleWinner){
            break;
        }
    }

    return ruleWinner;
    
};

