const mostraDetalhes = () => {
  const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

  const el = document.getElementById("listaCadastros");
  el.innerHTML = "";

  el.insertAdjacentHTML('beforeend', contatos.map(contato => `
    <div class="row">
      <div class="col-lg-12">
        <p>Nome: ${contato.nome}</p>
        <p>Endereço: ${contato.endereco}</p>
        <p>Telefone: ${contato.telefone}</p>
        <p>Email: ${contato.email}</p>
      </div>
    </div>
  `).join('\n'));
};

const guardavalores = () => {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  const obj = { nome, endereco, telefone, email }

  const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

  if ( nome && endereco && telefone && email ) {
    contatos.push(obj);
    localStorage.setItem('contatos', JSON.stringify(contatos));

    document.getElementById('cadastro').reset();
    mostraDetalhes();
  }
}

const deletaCadastro = () => {
  console.log('deletaCadastro');
  localStorage.removeItem('contatos');
  mostraDetalhes();
}

mostraDetalhes();