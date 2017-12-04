var console;
var comida = "55";
var converteNum = Number(comida);

console.log(comida + " " + converteNum);

console.log("  ");

var c = "Teste";
var convertC = Number(c); //Exibe NaN pra falar que não é um número

console.log(c + " " + convertC);

if (isNaN(convertC)) { //isNaN: NaN = Not a Number
    console.log("não é numero");
}


var hoje = new Date();
console.log("Data de hoje: ", hoje); //semana, dia, mês, ano, horário e de onde é o horário


var data2000 = new Date(2000, 0, 5, 0, 1, 50);// (Ano, mes, dia, h, min, seg)
console.log("Data em 2000: ", data2000);

var mes = hoje.getMonth(); //Mostra o número do mês
var sem = hoje.getDay(); //Mostra o dia da semana
var fullyear = hoje.getFullYear(); // Mostra o ano
var ano = hoje.getYear(); // Mostra o dia do ano (365 dias)
var dia = hoje.getDate(); //Mostra o dia do mês

console.log(mes, sem, fullyear, ano, dia);
