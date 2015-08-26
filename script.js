function pulsada (tecla) {
        
        var listaNodosPantalla = document.getElementsByClassName('pantalla');
        var nodoTextoPantalla = listaNodosPantalla[0].firstChild;
        
        switch(tecla) {
                case 'C':
                nodoTextoPantalla.nodeValue = ' ';
                break;
                case '=':
                var resultado = eval(nodoTextoPantalla.nodeValue);
                nodoTextoPantalla.nodeValue = resultado;
                break;
                default:
                nodoTextoPantalla.nodeValue = nodoTextoPantalla.nodeValue + tecla;
                break;
        }
}
 
function marcarOperadores() {
        var listaNodosOperadores = document.querySelectorAll("#calculadora .teclas span.operador");
        var nodoIgual = document.querySelector (".igual");
        for (var i=0; i<listaNodosOperadores.length; i++) {
                listaNodosOperadores[i].style.backgroundColor = "yellow";
                listaNodosOperadores[i].style.color = "black";
                listaNodosOperadores[i].style.border = "solid 1px";
                }
        nodoIgual.style.backgroundColor = "yellow";
        nodoIgual.style.color = "black";
        nodoIgual.style.border = "solid 1px";
}

function desmarcarOperadores(){
        var listaNodosOperadores = document.querySelectorAll("#calculadora .teclas span.operador");
        var nodoIgual = document.querySelector (".igual");
        for (var i=0; i<listaNodosOperadores.length; i++) {
                listaNodosOperadores[i].style.backgroundColor = "#FFDAB9";
                listaNodosOperadores[i].style.color = " #888888";
                listaNodosOperadores[i].style.border = "solid 0px";
                }
        nodoIgual.style.backgroundColor = "#F1FF92";
        nodoIgual.style.color = " #888888";
        nodoIgual.style.border = "solid 0px";
}
 
function marcarNumeros() {
        var listaNodosNumeros = document.querySelectorAll("#calculadora .teclas span.numero");
        for (var i=0; i<listaNodosNumeros.length; i++) {
                listaNodosNumeros[i].style.backgroundColor = "black";
                listaNodosNumeros[i].style.color = "white";
                listaNodosNumeros[i].style.border = "solid 1px";
                }
}

function desmarcarNumeros(){
        var listaNodosNumeros = document.querySelectorAll("#calculadora .teclas span.numero");
        for (var i=0; i<listaNodosNumeros.length; i++) {
                listaNodosNumeros[i].style.backgroundColor ="#FFFFFF";
                listaNodosNumeros[i].style.color = "#888888";
                listaNodosNumeros[i].style.border = "solid 0px";
                }
}

