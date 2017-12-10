function preparaPagina(){
    
    document.getElementById("formulario1").onclick = function(){
        if (document.getElementById("botao").className == "padrao1"){
            document.getElementById("botao").className = "padrao2";
        }
        else {
            document.getElementById("botao").className = "padrao1";
        }
    }
    
}

window.onload = function(){
    preparaPagina();
} //Faz carregar o JS assim que a página terminar de carregar