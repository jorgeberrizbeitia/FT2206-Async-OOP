console.log("funcionando!");

// CALLBACKS

let someString = "hola";

function simpleFunction(string) {
  console.log(string);
}

simpleFunction(someString);

const sayHello = () => {
  console.log("Hola, como estas?");
  return "Adios";
}; // ref 1234

function functionThatAcceptsAnotherFunction(patata) {
  // let patata = sayHello (internamente) misma referencia 1234
  // console.log(patata)
  let mensageRetornado = patata(); // ref 1234
  console.log(mensageRetornado);
}

functionThatAcceptsAnotherFunction(sayHello);

// 1. Existen metodos avanzados de JS que utilizan este sistema de callbacks

let string = "what does the fox say?";

let string2 = string.replace("fox", "cow");
console.log(string2); // "what does the cow say?"

function replacerFunction(currentWord) {
  return currentWord.toUpperCase() + "wolf!";
}

let string3 = string.replace("fox", replacerFunction);
console.log(string3); // what does the FOXwolf! say?

// esto es como esta creado el metodo replace en JS
function replace(arg1, arg2) {
  // ...
  arg2(arg1);
  // ...
}

// let string4 = string3.replace("what", replacerFunction)
// console.log(string4)

// 2. Existen formas de crear funcionalidades avanzadas con este sistema

let personObj = {
  title: "Sir",
  name: "Ian",
  lastName: "McKellen",
};

let person2Obj = {
  title: "Sir",
  name: "Patrick",
  lastName: "Stewart",
};

function fullName(person) {
  return `${person.name} ${person.lastName}`;
}
// console.log( fullName(personObj)  )

function titleName(person) {
  return `${person.title} ${person.name}`;
}
// console.log( titleName(personObj) )

function greetPerson(person, howToGreet) {
  // let greetMessage = howToGreet(person)
  // return `Hola ${greetMessage}`

  // una forma reducida
  return `Hola ${howToGreet(person)}`;
}

console.log(greetPerson(personObj, fullName));
console.log(greetPerson(personObj, titleName));
console.log(greetPerson(person2Obj, titleName));

// en JS tenemos dos metodos que nos permiten replicar comportamientos asyncronos

// SETTIMEOUT => ejecutar una funcion luego de x cantidad de segundos

function enviarMensaje() {
  console.log("Se acaba el tiempo!");
}

function enviarMensaje2() {
  console.log("esto se ejecuta a los 0 segundos");
}

// setTimeout(enviarMensaje, 2000); // 3

// setTimeout(enviarMensaje2, 0); // 2

// JS ejecuta primero todo lo sincrono
console.log("despues del timeout!"); // 1

// 1000 lineas de codigo

// SETINTERVAL => ejecuta una funcion cada x cantidad de segundos

// let idInterval = setInterval(() => {
//   console.log("timer andando");
// }, 1500);

// clearinterval

// function detenerIntervalo() {
//     clearInterval(idInterval)
// }

// setTimeout(() => {
//   clearInterval(idInterval);
// }, 6000);




// OBJ METHODS & PROPERTIES

let person = {
    name: "Alicia",
    place: "Pais de las Maravillas",
    friends: ["Sombrerero", "Gato Cheshire", "Liebre de Marzo", "Humpty Dumpty", "Conejo Blanco"],
    sayHello() {
        console.log(this)
        return `Hola, mi nombre es ${this.name} de ${this.place}`
        // this => para referirnos al objeto donde la estamos utilizamos
    },
    currentSize() {
        // nos diga si Alicia esta grande o pequeña
        // completamente aleatorio
        // 50% Alice es grande
        // 50% Alice es pequeña
        let randomNum = Math.random() // => 0 - 0.999999999
        if (randomNum > 0.5) {
            return `${this.name} es grande`
        } else {
            return `${this.name} es pequeña`
        }
    },
    felizNoCumpleaños() {
        // alreatoriamente va a desear feliz no cumpleaños a un amigo de la persona
        let friendQty = this.friends.length;
        
        // clausula guardia
        if (friendQty === 0) {
            return "no tiene amigos :("
        }

        let randomNum = Math.random() * friendQty // 0 - 5 (decimales)
        let randomIndex = Math.floor(randomNum)
        return `Feliz Feliz no cumpleaños a ${this.friends[randomIndex]}`
    }
}

console.log( person.name )

console.log( person.sayHello() )
// person.name = "Caro"
// console.log( person.sayHello() )

console.log( person.currentSize() )

console.log( person.felizNoCumpleaños() )


// en metodos tradicionales la palabra this apunta al objeto que tiene es ese metodo
// en metodos de flecha, la palabra this apunta al scope global (window)

// creando metodos en OBJ es mejor utilizar funciones tradicionales.



// OOP

let newStr1 = "Hola"
console.log(newStr1)

// String
let newStr2 = String("Hola")
console.log(newStr2)

let newStr3 = new String("Hola")
console.log(newStr3)


String.prototype.patata = function() {
    return "Mi metodo Custom Made!"
}

console.log( newStr1.patata() )



// Clases


class Hero {

    // la seccion donde definimos todas las propiedades que tendran los objetos de esta clase
    constructor(nameParam, identityParam) {
        // this.name = "Iron Man";
        this.name = nameParam;
        this.identity = identityParam;
        this.isEvil = false;
    }

    // la seccion donde definimos todos los metodos que tendran los objetos de esta clase

    // Aqui podemos definirlas como tradicionales o como flecha
    revealSecret() {
        return `Mi identidad secreta es ${this.identity}`
    }

    // ejemplo de metodo funcion de flecha
    turnEvil = () => {
        this.isEvil = true;
        return `${this.name} se ha vuelto villano!`
    }

}

// crea un nuevo (new) elemento basado en esta plantilla (Clase)
let hero1 = new Hero("Iron Man", "Tony Stark")
console.log(hero1)
console.log(hero1.name)
console.log(hero1.revealSecret())
console.log(hero1.turnEvil())
console.log(hero1)

// let hero2 = new Hero("Black Widow", "Natasha Romanof")
// console.log(hero2)
// console.log(hero2.revealSecret())


