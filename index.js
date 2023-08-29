//adiciona mensagem no chat
function enviaMensagem() {
  const form = new FormData(document.querySelector('form'));
  const mensagem = form.get('mensagem');

  if (typeof mensagem != 'string' || !mensagem.trim()) {
    return;
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