var alt = 15, larg = 25, comp = 10;


function calcVolume (a, l, c){
    var volume = a*l*c;
    alert ("Volume de: "+volume);    
}

calcVolume (alt, larg, comp);

var multval = [];
for (i= 0; i<10; i++){
    multval [i] = i;
}
multval[10] = "João";
console.log (multval);

var variosDados = ["Mês", "Ano", "Nome"];
//ou
var variosDados1 = new Array ("Mês","Ano","Nome");
//ou
var variosDados2 = Array ("Mês","Ano","Nome");

console.log ("tamanho: "+variosDados.length); //exibe o tamanho do array

var myArrayOfLinks = document.getElementsByTagName("a"); 
//Pega todos os elementos com a tag 'a' e coloca na array
console.log (myArrayOfLinks);