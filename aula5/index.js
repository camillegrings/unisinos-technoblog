const dados = [
  {
    nome: "Chiforinfola del Ocho",
    email: "chiforinfola@unisinos.br",
    notaGA: 5.7,
    notaGB: 6.2,
    media: function () {
      return (this.notaGA + this.notaGB) / 2;
    },
  },
  {
    nome: "Boneco Sinforoso",
    email: "sinforoso@unisinos.br",
    notaGA: 6.1,
    notaGB: 5.9,
    media: function () {
      return (this.notaGA + this.notaGB) / 2;
    },
  },
  {
    nome: "Ximira traz o Gelo",
    email: "ximira@unisinos.br",
    notaGA: 7.8,
    notaGB: 10,
    media: function () {
      return (this.notaGA + this.notaGB) / 2;
    },
  },
  {
    nome: "Jão das Neves",
    email: "jao@unisinos.br",
    notaGA: 2.4,
    notaGB: 1.7,
    media: function () {
      return (this.notaGA + this.notaGB) / 2;
    },
  },
  {
    nome: "Geraldo da Rivia",
    email: "geraldao@unisinos.br",
    notaGA: 10,
    notaGB: 9.9,
    media: function () {
      return (this.notaGA + this.notaGB) / 2;
    },
  },
];

const createTdElementAndAppend = (node, prop) => {
  const el = document.createElement("td");

  el.textContent = prop;

  node.append(el);
};

const montaGrid = () => {
  const grid = document.querySelector("tbody[id=turma]");

  let melhorAluno = null;

  dados.forEach((el) => {
    if (!melhorAluno) {
      melhorAluno = el;
    } else if (el.media() > melhorAluno.media()) {
      melhorAluno = el;
    }

    const rowEl = document.createElement("tr");

    createTdElementAndAppend(rowEl, el.nome);
    createTdElementAndAppend(rowEl, el.email);
    createTdElementAndAppend(rowEl, el.notaGA.toFixed(2));
    createTdElementAndAppend(rowEl, el.notaGB.toFixed(2));
    createTdElementAndAppend(rowEl, el.media().toFixed(2));

    const statusText = document.createElement("span");
    statusText.textContent = el.media() >= 6 ? "Aprovado" : "Reprovado";

    const statusEl = document.createElement("td");
    statusEl.className = el.media() >= 6 ? "table-success" : "table-danger";
    statusEl.appendChild(statusText);
    rowEl.append(statusEl);

    grid.append(rowEl);
  });

  const resultados = document.querySelector("div[id=resultados]");

  const mediaTurma = dados
    .map((aluno) => aluno.media())
    .reduce((acc, value) => {
      return acc + value / dados.length;
    }, 0)
    .toFixed(2);

  resultados.insertAdjacentHTML(
    "beforeend",
    `<h4>Média da turma: ${mediaTurma}</h4><h3>Melhor Aluno: ${
      melhorAluno.nome
    } nota: ${melhorAluno.media()}</h4>`
  );
};

montaGrid();
