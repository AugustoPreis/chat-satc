function enviaMensagem() {
  const form = new FormData(document.querySelector('form'));
  const mensagem = form.get('mensagem');

  if (typeof mensagem != 'string' || !mensagem.trim()) {
    return;
  }

  const chat = document.querySelector('.chat-body');

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


  chat.appendChild(msgDiv)
  chat.scrollTop = chat.scrollHeight;

  document.querySelector('input[name="mensagem"]').value = '';
}