document.addEventListener("DOMContentLoaded", function() {
    const checkboxWrapper = document.querySelector(".checkbox-wrapper input[type='checkbox']");
    const button = document.querySelector(".button");
    const confirmCheck = document.getElementById("confirm-check");
    const downloadButtons = document.querySelectorAll('.download-btn');

    // Função para verificar o estado do checkbox e atualizar o botão
    function updateButtonState() {
        if (checkboxWrapper.checked) {
            button.classList.remove("disabled2");
        } else {
            button.classList.add("disabled2");
        }
    }

    // Função para verificar o estado do confirmCheck e atualizar os botões de download
    function updateDownloadButtons() {
        if (confirmCheck.checked) {
            downloadButtons.forEach(button => button.classList.remove("disabled"));
        } else {
            downloadButtons.forEach(button => button.classList.add("disabled"));
        }
    }

    // Carregar o estado do checkbox e do confirmCheck do localStorage
    if (localStorage.getItem('checkboxWrapperChecked') === 'true') {
        checkboxWrapper.checked = true;
        checkboxWrapper.disabled = true;
    }
    
    if (localStorage.getItem('confirmCheckChecked') === 'true') {
        confirmCheck.checked = true;
        confirmCheck.disabled = true;
    }

    // Atualizar o estado dos botões com base no estado dos checkboxes
    updateButtonState();
    updateDownloadButtons();

    checkboxWrapper.addEventListener("change", function() {
        getIP();
        if (this.checked) {
            this.disabled = true; // Desativar o checkbox quando marcado
            button.classList.remove("disabled2");
            localStorage.setItem('checkboxWrapperChecked', 'true');
        } else {
            this.checked = true; // Forçar o checkbox a permanecer marcado
            button.classList.remove("disabled2");
            localStorage.setItem('checkboxWrapperChecked', 'true');
        }
    });

    button.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("mensagem").style.display = "none";
        document.getElementById("container").style.display = "flex";
    });

    confirmCheck.addEventListener("change", function(event) {
        event.preventDefault(); // Prevenir ação padrão de mudança

        // Garantir que o checkbox não possa ser desmarcado depois de marcado
        if (this.checked) {
            this.disabled = true; // Desativar checkbox quando marcado
            downloadButtons.forEach(button => button.classList.remove("disabled"));
            localStorage.setItem('confirmCheckChecked', 'true');
        } else {
            this.checked = true; // Forçar o checkbox a permanecer marcado
            downloadButtons.forEach(button => button.classList.add("disabled"));
            localStorage.setItem('confirmCheckChecked', 'true');
        }
    });

    // Impedir desmarcação do checkbox ao clicar
    confirmCheck.addEventListener("mousedown", function(event) {
        event.preventDefault();
        return false;
    });
});

// Exemplo de função para obter o IP
function getIP() {
    let pegandoData = new Date();
    let IP = "192.182.123.145";
    let carteirinha = "0656330.00";
    let cliente = "Douglas Almeida";
    console.log(`Carteirinha: ${carteirinha} | Associado: ${cliente} | Endereço IP: ${IP} | Data: ${pegandoData}`);
}
