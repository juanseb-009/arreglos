let arregloIzquierdo = [12, 15];

let arregloDerecho = [20, 25];

function agregarEdad() {
    let edad = parseInt(document.getElementById("edad").value);

    arregloIzquierdo.push(edad);

    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let tabla = document.getElementById("tablaIzquierda");

    let contenido = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + arregloIzquierdo[i] + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';
        contenido += '<td><button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">➜</button></td>';
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;
}

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
}

pintarArregloIzquierda();