var modal = document.getElementById("myModal");

    // Pega o botão que abre o modal
    var btn = document.getElementById("myBtn");

    // Pega o <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Quando o usuário clica no botão, abre o modal
    btn.onclick = function() {
      modal.style.display = "block";
      // Adiciona a classe "show" para animar o modal
      setTimeout(function() {
        modal.classList.add("show");
      }, 10); // Pequeno delay para garantir que o CSS tenha tempo de aplicar
    }

    // Quando o usuário clica no <span> (x), fecha o modal
    span.onclick = function() {
      modal.classList.remove("show"); // Remove a classe para esconder o modal
      // Espera o tempo da animação e então esconde o modal completamente
      setTimeout(function() {
        modal.style.display = "none";
      }, 500); // Tempo de duração da transição (500ms)
    }

    // Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(function() {
          modal.style.display = "none";
        }, 500);
      }
    }
