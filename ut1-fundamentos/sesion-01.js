
{
    let secreto = "Dentro";
    console.log(secreto);
}



console.log(5+1);
console.log("5"+1);
console.log(Number("5")+1);



let apodo;
const entrenador = null;

console.log(apodo);
console.log(entrenador);


const nombrePokemon = "Eevee";
console.log("Pokemon", nombrePokemon);



const nombrePokemon2 = "Eevee";
let energia = 80;

energia = energia - 20;

console.log(`El pokemon ${nombrePokemon} tiene ${energia} de energia`);

let energia2 = 80;
if(energia2 >= 50){
    console.log("Esta lista para pelear");
}else{
    console.log("Necesita descansar");
}

function saludar(nombrePokemon) {
    console.log(`Hola, ${nombrePokemon}`);
}

function calcularEnergia(energiaActual, gasto){
    return energiaActual - gasto;
}

const energiaTotal = calcularEnergia(100,20);
console.log(energiaTotal);

saludar("Pikachu");
saludar("Eevee");
saludar("Squirtle");
console.log(obtenerEstado(energiaTotal));


function obtenerEstado(energiaActual){
    if (energiaActual >= 50) {
        return "Puedo entrenar";
    }else{
        return "Necesito descansar";
    }
}


