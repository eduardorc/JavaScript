var document, alert, setInterval ;

/*document.onclick = function() {
    alert("Aviso de click pelo Event Listener");
}*/

var paragrafoclick = document.getElementById("paragrafo1");

paragrafoclick.onclick = function() {
    alert("Clique no parágrafo 1");
}



var campoemail = document.getElementById("email");

campoemail.onblur = function() {
    if (campoemail.value == ""){
        campoemail.value = "Digite seu email";
    }
}

campoemail.onfocus = function() { //quando clicar, acontece
    if (campoemail.value == "Digite seu email"){
        campoemail.value = "";
    }
}

var imagem = document.getElementById("a29");

var arrayImagens = ["a29.jpg","eda.jpg"];

var imagemIndex = 0;

function mudaImagem() {
    imagem.setAttribute ("src", arrayImagens[imagemIndex]);
    imagemIndex++;
    
    if (imagemIndex>=arrayImagens.length){
        imagemIndex = 0;
    }
}

setInterval(mudaImagem, 2000);