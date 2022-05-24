/*let nombreApellido = prompt("Nombre y apellido de quien reserva");
if (nombreApellido == ""){
    alert ("No olvides ingresar tu nombre y apellido");
}
else {
    alert ("Reserva:" + " " + nombreApellido)
}


let diaMes = parseInt(prompt("Dia y mes en el que le gustaria visitarnos"));
if (diaMes == ""){
    alert ("No olvides ingresar el dia y mes");
}
else{
    alert ("Dia:" + " " + diaMes)
}


function Producto(nombre, capacidad, precio, stock){
    this.nombre = nombre
    this.capacidad = capacidad
    this.precio = precio
    this.stock = stock
}

const producto1 = new Producto("Habitacion Estandar", 2, 70, 5)
const producto2 = new Producto("Habitacion Suite", 4, 110, 5)
const producto3 = new Producto("Habitacion Micro", 2, 50, 5)
const producto4 = new Producto("Habitacion Familiar", 5, 100, 3)
const producto5 = new Producto("Habitacion Comaprtida", 6, 40, 10)

console.log(producto1)

let array = [Producto]
console.log(array)

const miArray = [Producto]
console.log (myArray.length);

console.log(producto.filter(producto => producto.stock >= 5)) */

console.log(document)

let tituloCreado = document.createElement("h1")

tituloCreado.innerText = "Reserva tu mesa"
tituloCreado.id = "tituloCreado"

tituloCreado.prepend(tituloCreado)




let habEstandar = document.getElementById("habEstandar")
let habEstandarDesayuno = document.getElementById("habEstandarDesayuno")

habEstandar.addEventListener("click", () =>{
    console.log("Reservar esta habitacion")
})

habEstandarDesayuno.addEventListener("click", () =>{
    console.log("Reservar esta habitacion")
})




let arrayHabitaciones = [{tipo: "estandar"}, {tipo: "suite"}, {tipo: "micro"}, {tipo: "familiar"}, {tipo: "compartida"}]
let HabitaionesJSON = JSON.stringify(arrayHabitaciones)
console.log(HabitaionesJSON)