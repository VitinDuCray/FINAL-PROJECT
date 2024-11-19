function validarCampos() {
    const nome = document.getElementById("campoNome").value;
    const email = document.getElementById("campoEmail").value;
    const telefone = document.getElementById("campoTelefone").value;

    if (nome.trim() === "" || email.trim() === "" || telefone.trim() === "") {
  
        alert("Por favor, preencha todos os campos antes de continuar.");
        return false; 
    } else {
 
        return true;
    }
}  