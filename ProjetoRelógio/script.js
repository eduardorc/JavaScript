const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

date = new Date();
console.log(date);

let hora = date.getHours();
let minuto = date.getMinutes();
let segundo = date.getSeconds();
console.log(hora+":"+minuto+":"+segundo);


let hrPosi = hora*360/12 + (minuto*(360/60)/12); //Conta a mais pra ajustar mudança de posição
let minPosi = minuto*360/60 + (segundo*(360/60)/60); //Conta a mais pra correção de posição
let segPosi = segundo*360/60;

function alteraRelogio(){

    hrPosi = hrPosi+(3/360);// 3 pois 360/12 = 3, avança 3º a cada minuto
    minPosi = minPosi + (6/60);
    segPosi = segPosi + 6;

    HOURHAND.style.transform = "rotate(" + hrPosi + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosi + "deg)";
    SECONDHAND.style.transform = "rotate(" + segPosi + "deg)";

}
setInterval (alteraRelogio, 1000);