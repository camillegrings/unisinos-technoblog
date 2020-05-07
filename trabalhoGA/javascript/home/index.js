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
              <button onclick={goToCourseDetail(${curso.id})} class="btn btn-primary">Ver curso</a>
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
            <button onclick={goToCourseDetail(${curso.id})} class="btn btn-primary">Ver curso</a>
          </div>
        </div>
      </div>
    `
      ).join('\n')
    )
  }
}

const goToCourseDetail = (id) => {
  localStorage.setItem("courseId", id);
  window.location = '../detail/index.html'
}

renderCourses();