const getDetailInfo = () => {
  const courses = JSON.parse(data);

  const course = courses.find((course) => course.id === 1);

  const image = document.createElement("img");
  image.src = course.image;
  image.width = 700;
  image.height = 500;
  const content = document.getElementById("detail-content");
  content.insertAdjacentElement("afterbegin", image);

  document.getElementById("detail-title").innerHTML = course.name;
  document.getElementById("detail-description").innerHTML = course.description;
};

getDetailInfo();
