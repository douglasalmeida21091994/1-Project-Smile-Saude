document.getElementById("read-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.querySelector('.download-btn').style.display = "none";
    document.getElementById("alert").style.display = "block";
    document.getElementById("footer").style.display = "none";

    getIP();
});

document.getElementById("confirm-check").addEventListener("change", function() {
    const container = document.getElementById("container");

    if (this.checked) {
        document.querySelector('.download-btn').style.display = "flex";
        document.getElementById("alert").style.display = "none";
        container.style.borderRadius = "8px";
    } else {
        document.querySelector(".download-btn").style.display = "none";
        document.getElementById("alert").style.display = "block";
    }
});

// Exemplo de quando vai pegar o IP
function getIP() {
    let pegandoData = new Date();
    let IP = "192.182.123.145";
    let carteirinha = "0656330.00";
    let cliente = "Douglas Almeida";
    console.log(`Carteirinha: ${carteirinha} | Associado: ${cliente} | Endereço IP: ${IP} | Data: ${pegandoData}`);
}
