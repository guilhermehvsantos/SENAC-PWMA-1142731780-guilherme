const form = document.getElementById('form');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const telefone = document.getElementById('telefone');

const botaoCadastro = document.getElementById('botaoCadastro');

function verificarCampos() {
  if (nome.value.trim() !== '' && sobrenome.value.trim() !== '' && email.value.trim() !== ''&& senha.value.trim() !== ''&& telefone.value.trim() !== '') {
    botaoCadastro.removeAttribute('disabled');
  } 
}

nome.addEventListener('input', verificarCampos);
sobrenome.addEventListener('input', verificarCampos);
email.addEventListener('input', verificarCampos);
senha.addEventListener('input', verificarCampos);
telefone.addEventListener('input', verificarCampos);


function cadastradoComSucesso() {
    window.alert("Usuário cadastrado com sucesso!")
}