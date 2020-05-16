function addRemoveButton() {
  var myNodelist = $("li");
  var i;

  for (i = 0; i < myNodelist.length; i++) {
    var button = createCloseButton();
    myNodelist[i].append(button);
  }
}

function createCloseButton() {
  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);

  return button;
}

function newElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var inputValue = $("#add").val();
  var t = document.createTextNode(inputValue);

  li.append(div);
  div.append(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    var button = createCloseButton();
    li.append(button);
    $("#list").append(li);
  }

  $("#add").val("");
}

$(document).ready(function () {
  $("h1").text("Minha Lista de Tarefas!").css("color", "#0088ff");
  addRemoveButton();

  $("#addBtn").click(function () {
    newElement();
  });

  $("ul").on("click", "li div", function () {
    $(this).toggleClass("checked");
  });

  $("ul").on("click", "button.close", function () {
    $(this).parent().css("display", "none");
  });
});
