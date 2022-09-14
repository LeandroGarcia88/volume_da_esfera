
const PI = 3.14159;

let output = document.getElementById("output");
let val_raio = document.getElementById("val_raio");

let button = document.getElementById("button");
button.addEventListener("click", calcularVolume, false)

function calcularVolume(){
 let raio = parseInt(val_raio.value);
 let raio_poten = Math.pow(raio, 3);

 let volume = 4 * PI * raio_poten / 3;
 volume = volume.toFixed(3);

 if(raio > 0){
 	output.innerHTML = `Volume da esfera:<br/>${volume} metros <sup> 3 </sup>`
 }else{
 	output.innerHTML = "valor inválido"
 }
}