const menuBtn = document.getElementById("menuBtn");
const navMobile = document.getElementById("navMobile");

menuBtn.addEventListener("click", () => {
    navMobile.style.display =
        navMobile.style.display === "flex" ? "none" : "flex";
});
document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function () {
            this.classList.toggle('selecionada');
        });
    });
});
function iniciarNovoCaptcha() {
    const num1 = Math.floor(Math.random() * 900) + 100;
    const num2 = Math.floor(Math.random() * 900) + 100;
    const respostaCorreta = num1 + num2;
    document.querySelector('.captcha-area').dataset.resposta = respostaCorreta;
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    document.getElementById('resultado').value = '';
}
document.addEventListener('DOMContentLoaded', iniciarNovoCaptcha);

// botão de verificação
    const btn = document.getElementById('submit-btn');
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        const senha = document.getElementById('senha').value;
        const repitaSenha = document.getElementById('repitaSenha').value;
        if (senha !== repitaSenha) {
            alert(' As senhas não coincidem. Corrija antes de continuar.');
            return;
        }
        const respostaUsuario = document.getElementById('resultado').value;
        const respostaCorreta = document.querySelector('.captcha-area').dataset.resposta;

        if (parseInt(respostaUsuario) === parseInt(respostaCorreta)) {
            alert(' Cadastro realizado com sucesso!');
        } else {
            alert(' CAPTCHA incorreto. Tente novamente.');
            iniciarNovoCaptcha();
        }
    });
    function toggleSenha(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.type = campo.type === 'password' ? 'text' : 'password';
}
function toggleMenu() {
    const menu = document.getElementById("navMobile");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
