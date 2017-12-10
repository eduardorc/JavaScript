function prepareEventHandler() { //segurar evento antes que aconteça
    
    document.getElementById("formulario1").onsubmit = function() {
        if (document.getElementById("email").value == ""){
            document.getElementById("mensagemErro").innerHTML = "Digite um email válido";
            //impedir que o fórmulário seja enviado
            return false;        
        }
        else {
            document.getElementById("mensagemErro").innerHTML = "";
            //permitindo envio de formulário
            return true;        
        }
    }
    
}

window.onload = function(){
    prepareEventHandler();
}