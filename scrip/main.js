let isPlayerX = true;
let winner;

info("Comienza ❎");

const startClick = () => {
  var e = document.querySelector(".ganar");
  e.style = "display: none";
  let boxes = document.querySelectorAll(".tablero div"); //esta funcion asigna los valores predeterminados al comienzo de la partida
  boxes.forEach(function (box) {
    box.innerHTML = "";
  });

  if (isPlayerX) {
    info("Comienza ❎ ");
  } else {
    info("Comienza 🅾 ");
  }

  winner = undefined;
};
document.getElementById("btnStart").addEventListener("click", startClick);

const playerClick = (event) => {
  if (!winner) {
    //winner undefined para que entre aqui
    var box = event.target;
    var boxValue = box.innerHTML;

    mark(box);
    let result = checkWinner(boxValue);
    winner = result; //si winner tiene un valor es porque hay ganador

    if (winner) {
      // console.log(winner[0]);

      let boxValue = document.getElementById(winner[0]).innerText;
      console.log(boxValue);
      let playerName;
      var e = document.querySelector(".ganar");
      e.style = "display: block";

      if (boxValue == "❎") {
        playerName = document.getElementById("name2").value;
      } else {
        playerName = document.getElementById("name1").value;
      }
      info(`Ha ganado ${playerName} la partida!!!`);
    }
  }
};

//marcar casilla
const mark = (box) => {
  if (box.innerHTML !== "") {
    alert(`La casilla ${box.id} ya fue utilizada.`);
  } else {
    if (isPlayerX == true) {
      box.innerHTML = "❎";
      let player1 = document.getElementById("name1").value;
      info("El turno es de 🅾: " + player1);
    } else {
      let player2 = document.getElementById("name2").value;
      box.innerHTML = "🅾";
      info("El turno es de ❎: " + player2);
    }
    isPlayerX = !isPlayerX;
  }
};
//regla ganadora
const rules = [];

rules.push(["b11", "b12", "b13"]);
rules.push(["b21", "b22", "b23"]);
rules.push(["b31", "b32", "b33"]);
rules.push(["b11", "b21", "b31"]);
rules.push(["b12", "b22", "b32"]);
rules.push(["b13", "b23", "b33"]);
rules.push(["b11", "b22", "b33"]);
rules.push(["b13", "b22", "b31"]);

const checkWinner = () => {
  let result;
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    let initialBoxValue;

    for (let j = 0; j < rule.length; j++) {
      const boxId = rule[j];

      if (j == 0) {
        //tomamos el primer elemento para compararlo con los otros dos
        initialBoxValue = document.getElementById(boxId).innerHTML;
        if (initialBoxValue == "") {
          break;
        }

        continue; //para que vaya a la siguiente iteracion
      }

      let currentBoxValue = document.getElementById(boxId).innerHTML;
      if (currentBoxValue == "" || initialBoxValue != currentBoxValue) {
        break;
      }

      if (j == rule.length - 1) {
        result = rule;
      }
    }

    if (result) {
      break;
    }
  }

  return result;
};

function info(mensaje) {
  document.querySelectorAll(".alert-info").forEach((element) => {
    element.innerHTML = mensaje;
  });
}
