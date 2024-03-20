function criptografar() {
    let texto = document.querySelector('textarea').value;
    let criptoE = texto.replace(/e/g, 'enter');
    let criptoI = criptoE.replace(/i/g, 'imes');
    let criptoA = criptoI.replace(/a/g, 'ai');
    let criptoO = criptoA.replace(/o/g, 'ober');
    let criptoU = criptoO.replace(/u/g, 'ufat');
    document.getElementById("resultado").value = criptoU;
    document.getElementById("img").hidden = true;
    document.getElementById("texto").value = "";
    document.getElementById("img_tablet").hidden = true;
}


function descriptografar() {
    let texto = document.querySelector('textarea').value;
    let decriptoE = texto.replace(/enter/g, 'e');
    let decriptoI = decriptoE.replace(/imes/g, 'i');
    let decriptoA = decriptoI.replace(/ai/g, 'a');
    let decriptoO = decriptoA.replace(/ober/g, 'o');
    let decriptoU = decriptoO.replace(/ufat/g, 'u');
    document.getElementById("resultado").value = decriptoU;
    document.getElementById("img").hidden = true;
    document.getElementById("texto").value = "";
    document.getElementById("img_tablet").hidden = true;

}

function copiar() {
    let texto = document.getElementById("resultado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto.value);
    document.getElementById("resultado").value = "";


}
