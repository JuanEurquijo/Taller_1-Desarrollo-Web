function changeColorEnter() {
    var doc = document.getElementsByTagName("section");
    var sub = document.getElementsByClassName("sub-section");
    var com = document.getElementsByClassName("contenedor-agg-com");
    var i;
    for (i = 0; i < doc.length; i++) {
        doc[i].style.background = "green";
    }
    for (let j = 0; j < sub.length; j++) {
        sub[j].style.border = "solid 1px #48ec45";
    }
    for (let k = 0; k < com.length; k++) {
        com[k].style.border = "solid 1px #48ec45";
    }


       
}

function changeColorLeave() {
    var doc = document.getElementsByTagName("section");
    var his = document.getElementsByClassName("history");
    var sub = document.getElementsByClassName("sub-section");
    var com = document.getElementsByClassName("contenedor-agg-com");

    var i;
    for (i = 0; i < doc.length; i++) {
        doc[i].style.background = "white";
    }

    for (let j = 0; j < sub.length; j++) {
        sub[j].style.background = "linear-gradient(to bottom right, #42a386, #4a63d4)";
        sub[j].style.border = "solid 1px white";
    }
    for (let k = 0; k < com.length; k++) {
        com[k].style.border = "solid 1px black";
    }

    his[0].style.background = "linear-gradient(to bottom right, #a258f8, #eebd54b7)";
    com[0].style.border = "solid 1px black";
}


function nComentario(){
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if(valorIngresado === ''){
        alert("No dejes el campo vacío!")
    }if(valorIngresado.length > 300){
	  alert("El comentario debe tener menos de 300 caracteres")
    }else{
        document.getElementById("comentarios").appendChild(li);
    }

    document.getElementById("nuevoComentario").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}