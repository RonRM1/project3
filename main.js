
let esJugadorX = true
//leer datos
const playerClick = (ev) => {
    console.log(`id: ${ev.target.id}`)

    
    //verificar que no hay nada
    let box = ev.target
    let boxValue = box.innerHTML
    
    if (boxValue == "") {
        if (esJugadorX == true){
            box.innerHTML='x'
            esJugadorX = false
            
        }else{
          box.innerHTML = 'o'
          esJugadorX = true
        }
    }
    console.log(ev.target.innerHTML)
}
//verificar tablero
let box11Value= document.getElementById('box11').innerHTML
let box12Value= document.getElementById('box12').innerHTML
let box13Value= document.getElementById('box13').innerHTML

let box21Value= document.getElementById('box21').innerHTML
let box22Value= document.getElementById('box22').innerHTML
let box23Value= document.getElementById('box33').innerHTML

let box31Value= document.getElementById('box31').innerHTML
let box32Value= document.getElementById('box32').innerHTML
let box33Value= document.getElementById('box33').innerHTML