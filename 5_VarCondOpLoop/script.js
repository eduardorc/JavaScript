//Métodos de declarar variáveis:

//var ano = 2017; //Declaração de Variáveis com var.
var ano = 2016;
var Ano = 2017;

alert("ano: "+ano+"   Ano: "+Ano);
console.log(ano); //Mostra a informação no log do chorme (F12 -> console)


if (ano > Ano) {
    console.log ("ano>Ano.")
}
else {
    console.log ("ano<Ano")
}

var soma = ano+Ano, sub = ano-Ano, div = ano/Ano;

console.log ("Soma: "+soma+"   Subtração: "+sub+"   Divisão: "+div);

while (ano < 2025){
    console.log (ano);
    ano += 1;
}

console.log ("  ");

do {
    console.log (Ano);
    Ano -=1;
}while (Ano != 2010);

console.log ("  ");

for (var i = 1; i <=10; i++){
    console.log (i);
    if (i == 5){
        break; //ou continue
    }
}