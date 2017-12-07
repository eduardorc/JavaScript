/*Criação de Objetos
var player = new Object();
player.name = "fred";
player.score = 10000;
player.rank = 1;*/


var player1 = {name: "Fred", score: 1000, rank: 1}
var player2 = {name: "Sam", score: 100000, rank: 2}

/*
console.log (player1.name); //mostra só o nome no console
console.log (player2); // mostra tudo no console
*/

function detalhesPlayers () {
    console.log (this.name+" está na posição ", this.rank," do ranking e possui ", this.score, " pontos.");
}

player1.logPlayers = detalhesPlayers;
player2.logPlayers = detalhesPlayers;

player1.logPlayers();
player2.logPlayers();
