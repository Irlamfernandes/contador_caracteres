function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var numCaracteres = texto.length;
    document.getElementById("contador").textContent = numCaracteres;
}