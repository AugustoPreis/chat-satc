//adiciona mensagem no chat
function enviaMensagem() {
  const form = new FormData(document.querySelector('form'));
  const mensagem = form.get('mensagem');

  if (typeof mensagem != 'string' || !mensagem.trim()) {
    return criaAviso('Aviso!', 'Digite uma mensagem válida para enviar');
  }

  const chat = document.querySelector('.chat-body');

  const msgDiv = criaMensagem(mensagem);

  chat.appendChild(msgDiv);

  chat.scrollTop = chat.scrollHeight;

  limpaInput();
}

//recebe string com a mensagem e transforma em uma estrutura html estilizada
function criaMensagem(mensagem) {
  const msgDiv = document.createElement('div');
  const labelDiv = document.createElement('div');
  const label = document.createElement('label');
  const msgBoxDiv = document.createElement('div');

  msgDiv.classList.add('chat-body-msg', 'chat-body-msg-right');
  labelDiv.classList.add('chat-body-msg-label');
  label.textContent = 'Você diz:';
  msgBoxDiv.classList.add('chat-body-msg-box');
  msgBoxDiv.textContent = mensagem;

  labelDiv.appendChild(label);
  msgDiv.appendChild(labelDiv);
  msgDiv.appendChild(msgBoxDiv);

  return msgDiv;
}

//limpa a caixa de texto
function limpaInput() {
  const input = document.querySelector('input[name="mensagem"]');

  if (input) {
    input.value = '';
  }
}

//cria aviso na tela
function criaAviso(titulo, conteudo) {
  const avisoDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const titleTextSpan = document.createElement('span');
  const titleCloseSpan = document.createElement('span');
  const contentDiv = document.createElement('div');
  const mensagensDiv = document.getElementById('avisos');

  titleTextSpan.textContent = titulo;
  contentDiv.textContent = conteudo;
  titleCloseSpan.textContent = 'X';

  titleCloseSpan.addEventListener('click', () => {
    mensagensDiv.removeChild(mensagensDiv.lastElementChild);
  });

  avisoDiv.classList.add('notification');
  titleDiv.classList.add('notification-title');
  titleTextSpan.classList.add('notification-title-text');
  titleCloseSpan.classList.add('notification-title-close');
  contentDiv.classList.add('notification-content');

  titleDiv.appendChild(titleTextSpan);
  titleDiv.appendChild(titleCloseSpan);
  avisoDiv.appendChild(titleDiv);
  avisoDiv.appendChild(contentDiv);

  mensagensDiv.appendChild(avisoDiv);
}