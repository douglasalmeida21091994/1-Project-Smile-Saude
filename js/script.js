document.querySelector(".checkbox-wrapper input[type='checkbox']").addEventListener("change", function() {
    getIP();
    const checkConfirma = document.querySelector(".button");
    if (this.checked) {
        this.disabled = true; // Desativar o checkbox quando marcado
        checkConfirma.classList.remove("disabled2");
    }
});

document.querySelector(".button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("container").style.display = "flex";
});

document.getElementById("confirm-check").addEventListener("change", function(event) {
    event.preventDefault(); // Prevenir ação padrão de mudança

    const downloadButtons = document.querySelectorAll('.download-btn');

    // Garantir que o checkbox não possa ser desmarcado depois de marcado
    if (this.checked) {
        this.disabled = true; // Desativar checkbox quando marcado
        downloadButtons.forEach(button => button.classList.remove("disabled"));
    } else {
        this.checked = true; // Forçar o checkbox a permanecer marcado
        downloadButtons.forEach(button => button.classList.add("disabled"));
    }

    // Manipular o histórico do navegador para evitar recarregamento da página
    // window.history.pushState(null, null, window.location.href);
    // window.addEventListener('popstate', function () {
    //     window.history.pushState(null, null, window.location.href);
    // });
});

// Exemplo de função para obter o IP
function getIP() {
    let pegandoData = new Date();
    let IP = "192.182.123.145";
    let carteirinha = "0656330.00";
    let cliente = "Douglas Almeida";
    console.log(`Carteirinha: ${carteirinha} | Associado: ${cliente} | Endereço IP: ${IP} | Data: ${pegandoData}`);
}

// Impedir desmarcação do checkbox ao clicar
document.addEventListener("DOMContentLoaded", function() {
    const confirmCheck = document.getElementById("confirm-check");
    confirmCheck.addEventListener("mousedown", function(event) {
        event.preventDefault();
        return false;
    });
});
