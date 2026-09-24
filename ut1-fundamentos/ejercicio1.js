let nombreEjercicio = "Bulbasur";
let tipoEjercicio = "agua";
let energiaEjercicio = 70;

console.log(`El pokemon ${nombreEjercicio} de tipo ${tipoEjercicio} tiene ${energiaEjercicio} puntos de energia`);
energiaEjercicio = energiaEjercicio - 30;
console.log(`El pokemon ${nombreEjercicio} de tipo ${tipoEjercicio} tiene ${energiaEjercicio} puntos de energia`);
if(energiaEjercicio < 50){
    console.log("Tienes menos de 50 puntos de energia");
}else
    console.log("Todo bien. Todaviaaa");

