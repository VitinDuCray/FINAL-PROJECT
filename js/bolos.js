const openModalButtons2 = document.querySelectorAll('.open-modal2');
const modals2 = document.querySelectorAll('.modal2');
const closeModalButtons2 = document.querySelectorAll('.close-modal2');

// Adiciona um evento de clique para cada botão de imagem
openModalButtons2.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals2[index].style.display = 'flex'; // Exibe o modal correspondente
    });
});

// Adiciona um evento de clique para cada botão de fechar
closeModalButtons2.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals2[index].style.display = 'none'; // Oculta o modal correspondente
    });
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    modals2.forEach((modal, index) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Oculta o modal correspondente
        }
    });
});