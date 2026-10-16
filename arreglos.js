let arregloIzquierdo = [12, 15];

let arregloDerecho = [20, 25];

function agregarEdad() {
    let edad = parseInt(document.getElementById("edad").value);

    arregloIzquierdo.push(edad);

    console.log(arregloIzquierdo);
}