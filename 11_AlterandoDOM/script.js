var document;

var paragrafo1 = document.getElementById("paragrafo1");
paragrafo1.setAttribute("align" , "left");

var paragrafo2 = document.getElementById("paragrafo2");
paragrafo2.setAttribute("align","center");

var paragrafo3 = document.getElementById("paragrafo3");
paragrafo3.setAttribute("align","right");


var novoH1 = document.createElement("h1");
var novoParagrafo = document.createElement("p");

//Para adicionar conteúdo, usa-se o innerHTML

novoH1.innerHTML = "Novo Cabeçalho";
novoParagrafo.innerHTML = "Novo Parágrafo inserido JS";


document.getElementById("informacoes").appendChild(novoH1);
document.getElementById("informacoes").appendChild(novoParagrafo);