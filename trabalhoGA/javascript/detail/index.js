const getDetailInfo = () => {
  const courses = JSON.parse(data);
  let courseId = localStorage.getItem("courseId");

  if (!courseId) courseId = 1;
  const course = courses.find((course) => course.id === courseId);

  const image = document.createElement("img");
  image.src = course.image;
  image.width = 700;
  image.height = 500;

  const title = document.getElementById("detail-title");
  title.innerHTML = course.name;
  title.insertAdjacentElement("afterend", image);
  document.getElementById("detail-description").innerHTML = course.description;
};

getDetailInfo();
