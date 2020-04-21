const vendas_cursos = [
  {
    aluno: 'Emmanuel Gomes',
    data: '10/06/2018',
    valor: 34.99,
    reembolso: null
  },
  {
    aluno: 'Carla Dias',
    data: '10/06/2018',
    valor: 29.99,
    reembolso: null
  },
  {
    aluno: 'Rafael Marques',
    data: '11/06/2018',
    valor: 39.99,
    reembolso: '13/06/2018'
  },
  {
    aluno: 'Maria Isabel Pereira',
    data: '11/06/2018',
    valor: 29.99,
    reembolso: null
  },
  {
    aluno: 'Andre Luis Silva',
    data: '12/06/2018',
    valor: 34.99,
    reembolso: null
  }
];

const exercicio_03 = () => {
  const vendas_cursos_sem_reembolso = vendas_cursos.filter(el => !el.reembolso);
  let valor_total = 0;

  vendas_cursos_sem_reembolso.forEach(venda => {
    const { aluno, data, valor } = venda;
    const el = document.createElement('tr');

    el.insertAdjacentHTML('afterbegin', `<td>${aluno}</td><td>${data}</td><td>${valor}</td>`);

    valor_total += valor;

    document.getElementById('vendas').append(el);
  })

  document.getElementById('total_vendas').innerHTML = valor_total;
};

exercicio_03();