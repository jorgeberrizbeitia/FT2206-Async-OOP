console.log("funcionando!")



// CALLBACKS

let someString = "hola";

function simpleFunction(string) {
    console.log(string)
}

simpleFunction(someString)




const sayHello = () => {
    console.log("Hola, como estas?")
    return "Adios"
} // ref 1234

function functionThatAcceptsAnotherFunction(patata) {
    // let patata = sayHello (internamente) misma referencia 1234
    // console.log(patata)
    let mensageRetornado = patata() // ref 1234
    console.log(mensageRetornado)

}

functionThatAcceptsAnotherFunction(sayHello)



// 1. Existen metodos avanzados de JS que utilizan este sistema de callbacks

let string = "what does the fox say?";

let string2 = string.replace("fox", "cow");
console.log(string2) // "what does the cow say?"

function replacerFunction(currentWord) {
    return currentWord.toUpperCase() + "wolf!"
}

let string3 = string.replace("fox", replacerFunction)
console.log(string3) // what does the FOXwolf! say?

// esto es como esta creado el metodo replace en JS
function replace(arg1, arg2) {
    // ...
    arg2(arg1)
    // ...
}

// let string4 = string3.replace("what", replacerFunction)
// console.log(string4)




// 2. Existen formas de crear funcionalidades avanzadas con este sistema

let personObj = {
    title: "Sir",
    name: "Ian",
    lastName: "McKellen",
}

let person2Obj = {
    title: "Sir",
    name: "Patrick",
    lastName: "Stewart",
}

function fullName(person) {
    return `${person.name} ${person.lastName}`
}
// console.log( fullName(personObj)  )

function titleName(person) {
    return `${person.title} ${person.name}`
}
// console.log( titleName(personObj) )



function greetPerson(person, howToGreet) {
    // let greetMessage = howToGreet(person)
    // return `Hola ${greetMessage}`

    // una forma reducida
    return `Hola ${howToGreet(person)}`
}

console.log( greetPerson(personObj, fullName) )
console.log( greetPerson(personObj, titleName) )
console.log( greetPerson(person2Obj, titleName) )


// en JS tenemos dos metodos que nos permiten replicar comportamientos asyncronos

// SETTIMEOUT => ejecutar una funcion luego de x cantidad de segundos

function enviarMensaje() {
    console.log("Se acaba el tiempo!")
}

function enviarMensaje2() {
    console.log("esto se ejecuta a los 0 segundos")
}


setTimeout( enviarMensaje, 2000 ) // 3

setTimeout( enviarMensaje2, 0 ) // 2

// JS ejecuta primero todo lo sincrono
console.log("despues del timeout!") // 1

// 1000 lineas de codigo

// SETINTERVAL => ejecuta una funcion cada x cantidad de segundos


let idInterval = setInterval(() => {
    console.log("timer andando")
}, 1500)

// clearinterval

function detenerIntervalo() {
    clearInterval(idInterval)
}

setTimeout( detenerIntervalo, 6000 )