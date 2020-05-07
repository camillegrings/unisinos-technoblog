const courses = [
  {
    nome: "Curso de PHP",
    imagem: "../../assets/images/php-logo.png",
    link: "../detail/index.html",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque diam, nec feugiat ligula. Mauris eget massa sollicitudin, vulputate quam in, imperdiet urna. Phasellus ullamcorper turpis ut mauris lobortis, id iaculis lectus vestibulum. Curabitur eros enim, placerat quis nisl sed, laoreet volutpat ante."
  },
  {
    nome: "Curso de Javascript",
    imagem: "../../assets/images/js.png",
    link: "../detail/index.html",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque diam, nec feugiat ligula. Mauris eget massa sollicitudin, vulputate quam in, imperdiet urna. Phasellus ullamcorper turpis ut mauris lobortis, id iaculis lectus vestibulum. Curabitur eros enim, placerat quis nisl sed, laoreet volutpat ante."
  },
  {
    nome: "Curso de Go",
    imagem: "../../assets/images/golang.jpeg",
    link: "../detail/index.html",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque diam, nec feugiat ligula. Mauris eget massa sollicitudin, vulputate quam in, imperdiet urna. Phasellus ullamcorper turpis ut mauris lobortis, id iaculis lectus vestibulum. Curabitur eros enim, placerat quis nisl sed, laoreet volutpat ante."
  },
  {
    nome: "Banco de Dados",
    imagem: "../../assets/images/banco-dados-img.png",
    link: "../detail/index.html",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut pellentesque diam, nec feugiat ligula. Mauris eget massa sollicitudin, vulputate quam in, imperdiet urna. Phasellus ullamcorper turpis ut mauris lobortis, id iaculis lectus vestibulum. Curabitur eros enim, placerat quis nisl sed, laoreet volutpat ante."
  },
]

const toggleCoursesView = () => {
  let currentDisplayCourses = localStorage.getItem("displayCourses") || "card";
  const el = document.getElementById("cursos");

  localStorage.setItem("displayCourses", currentDisplayCourses === "card" ? "list" : "card");
  renderCourses();
}

const sortCourseName = (a, b) => {
  if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
  if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
  return 0;
};

const sortCourses = () => {
  renderCourses(true);
}

const renderCourses = (sorted = false) => {
  let currentDisplayCourses = localStorage.getItem("displayCourses") || "card";

  const el = document.getElementById("cursos");
  el.innerHTML = "";

  let coursesToMap = sorted ? courses.sort(sortCourseName) : courses;

  if (currentDisplayCourses === "card") {
    document.getElementById("toggle-display").classList.remove("fa-th-large");
    document.getElementById("toggle-display").classList.add("fa-list");

    el.insertAdjacentHTML('beforeend',
      coursesToMap.map(curso =>
        `
        <div class="col-sm-12 col-md-4 mt-2">
          <div class="card">
            <img src="${curso.imagem}" class="card-img-top" width="100" height="100">
            <div class="card-body">
              <h5 class="card-title">${curso.nome}</h5>
              <p class="card-text">${curso.descricao}</p>
              <a href="${curso.link}" class="btn btn-primary">Ver curso</a>
            </div>
          </div>
        </div>
      `
      ).join('\n')
    )
  } else {
    document.getElementById("toggle-display").classList.add("fa-th-large");
    document.getElementById("toggle-display").classList.remove("fa-list");

    el.insertAdjacentHTML('beforeend',
    coursesToMap.map(curso =>
        `
          <div class="col-sm-12 mt-2">
            <div class="card">
              <img src="${curso.imagem}" class="card-img-top" width="50" height="150">
              <div class="card-body">
                <h5 class="card-title">${curso.nome}</h5>
                <p class="card-text">${curso.descricao}</p>
                <a href="${curso.link}" class="btn btn-primary">Ver curso</a>
              </div>
            </div>
          </div>
      `
      ).join('\n')
    )
  }
}

renderCourses();