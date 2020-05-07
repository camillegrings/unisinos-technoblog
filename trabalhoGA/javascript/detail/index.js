$(document).ready(function () {
  $(".fontSizeRadio").on("change", function () {
    var size = $(
      "input[name=fontSizeRadio]:checked",
      "#preferences-form"
    ).val();
    changeFontSize(size);
  });

  $(".btn-color").on("click", function (val) {
    var color = this.id;
    changeFontColor(color);
  });

  const size = getFontSize();
  changeFontSize(size);

  const color = getReadColor();
  changeFontColor(color);
});

function changeFontSize(size) {
  localStorage.setItem("fontsize", size);
  document.getElementById("detail-description").className = `font-size-${size}`;
  document.getElementById("teacher-name1").className = `font-size-${size}`;
  document.getElementById("teacher-name2").className = `font-size-${size}`;
  document.getElementById("teacher-desc1").className = `font-size-${size}`;
  document.getElementById("teacher-desc2").className = `font-size-${size}`;
}

function changeFontColor(color) {
  localStorage.setItem("readcolor", color);
  document.getElementById("detail-description").style.color = `#${color}`;
  document.getElementById("teacher-name1").style.color = `#${color}`;
  document.getElementById("teacher-name2").style.color = `#${color}`;
  document.getElementById("teacher-desc1").style.color = `#${color}`;
  document.getElementById("teacher-desc2").style.color = `#${color}`;
}

function getDetailInfo() {
  let courseId = localStorage.getItem("courseId");

  if (!courseId) courseId = "1";
  const course = courses.find((c) => c.id.toString() === courseId);

  const image = document.createElement("img");
  image.className = "course-image";
  image.src = course.imagem;
  image.width = 700;
  image.height = 500;

  const title = document.getElementById("detail-title");
  title.innerHTML = course.nome;
  title.insertAdjacentElement("afterend", image);
  document.getElementById("detail-description").innerHTML = course.descricao;
  document.getElementById("teacher-name1").innerHTML =course.professor1
  document.getElementById("teacher-name2").innerHTML =course.professor2
}

getDetailInfo();
