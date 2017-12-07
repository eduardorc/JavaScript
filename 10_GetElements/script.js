var tituloPrincipal = document.getElementById("mainTitle");
console.log ("Este elemento é do tipo: ", tituloPrincipal.nodeType);
console.log ("O conteúdo do HTML é: ", tituloPrincipal.innerHTML);
console.log ("Quantos child nodes: ", tituloPrincipal.childNodes);

var meusLinks = document.getElementsByTagName ("a");
console.log ("Quantidade de links: ", meusLinks.length);