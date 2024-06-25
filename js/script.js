document.getElementById("read-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("container").style.display = "flex";     

    getIP();
});

document.getElementById("confirm-check").addEventListener("change", function() {
    const downloadButtons = document.querySelectorAll('.download-btn');    

    if (this.checked) {
        downloadButtons.forEach(button => button.classList.remove("disabled"));        
    } else {
        downloadButtons.forEach(button => button.classList.add("disabled"));  
          
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
