document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('form').addEventListener('input', function () {

    var nome = document.getElementById('nome').value;
    var setor = document.getElementById('setor').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    var cadastroButton = document.getElementById('botaoCadastro');

    if (nome !== '' && setor !== '' && email !== '' && telefone !== '' && mensagem !== '') {
      cadastroButton.disabled = false;
    } else {
      cadastroButton.disabled = true;
    }
  });


  document.getElementById('form').addEventListener('submit', function (event) {

    if (document.getElementById('botaoCadastro').disabled) {
      event.preventDefault();
    }
  });
});

function ticket() {

  var nome = document.getElementById('nome').value;
  var setor = document.getElementById('setor').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var mensagem = document.getElementById('mensagem').value;
  var problema = document.querySelector('input[name="problem"]:checked').value;


  var ticketData = {
    nome: nome,
    setor: setor,
    email: email,
    telefone: telefone,
    mensagem: mensagem,
    problema: problema
  };


  var tickets = JSON.parse(localStorage.getItem('tickets')) || [];

  tickets.push(ticketData);

  localStorage.setItem('tickets', JSON.stringify(tickets));

  document.getElementById('form').reset();

  window.location.href = 'tickets.html';
}
