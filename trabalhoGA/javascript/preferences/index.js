var DEFAULT_FONT_SIZE = 14;
var DEFAULT_READ_COLOR = "000000";
var DEFAULT_DISPLAY_COURSES = "list";

$(document).ready(function () {
  $(".fontSizeRadio").on("change", function () {
    var size = $(
      "input[name=fontSizeRadio]:checked",
      "#preferences-form"
    ).val();
    saveFontSize(size);
  });

  $(".btn-color").on("click", function () {
    var color = this.id;
    saveReadColor(color);
    $(".btn-color").removeClass("active");
    $("#" + color).addClass("active");
  });

  $(".btn-display-courses").on("click", function () {
    var displayCourses = this.id;
    saveDisplayCourses(displayCourses);
    $(".btn-display-courses").removeClass("active");
    $("#" + displayCourses).addClass("active");
  });

  $("#reset-to-defaults").on("click", function () {
    resetToDefaults();
  });

  initFontSize();
  initReadColor();
  initDisplayCourses();
});

function setFontSize(fontSize) {
  var $radios = $("input:radio[name=fontSizeRadio]");
  $radios.filter("[value=" + fontSize.toString() + "]").prop("checked", true);
}

function setReadColor(readColor) {
  $(".btn-color").removeClass("active");
  $("#" + readColor).addClass("active");
  $("#" + readColor).focus();
}

function setDisplayCourses(displayCourse) {
  $(".btn-display-courses").removeClass("active");
  $("#" + displayCourse).addClass("active");
  $("#" + displayCourse).focus();
}

function saveReadColor(color) {
  localStorage.setItem("readcolor", color);
}

function saveFontSize(size) {
  localStorage.setItem("fontsize", size);
}

function saveDisplayCourses(display) {
  localStorage.setItem("displayCourses", display);
}


function initFontSize() {
  var fontSize = localStorage.getItem("fontsize");
  if (fontSize === null) {
    fontSize = DEFAULT_FONT_SIZE;
  }
  setFontSize(fontSize);
}

function initReadColor() {
  var readColor = localStorage.getItem("readcolor");
  if (readColor === null) {
    readColor = DEFAULT_READ_COLOR;
  }
  setReadColor(readColor);
}

function initDisplayCourses() {
  var displayCourses = localStorage.getItem("displayCourses");
  if (displayCourses === null) {
    displayCourses = DEFAULT_DISPLAY_COURSES;
  }
  setDisplayCourses(displayCourses);
}

function getReadColor() {
  var readColor = localStorage.getItem("readcolor");
  if (readColor === null) {
    readColor = DEFAULT_READ_COLOR;
  }
  return readColor;
}

function getFontSize() {
  var fontSize = localStorage.getItem("fontsize");
  if (fontSize === null) {
    fontSize = DEFAULT_FONT_SIZE;
  }
  return fontSize;
}

function getDisplayCourses() {
  var displayCourses = localStorage.getItem("displayCourses");
  if (displayCourses === null) {
    displayCourses = DEFAULT_DISPLAY_COURSES;
  }
  return displayCourses;
}

function resetToDefaults() {
  setFontSize(DEFAULT_FONT_SIZE);
  saveFontSize(DEFAULT_FONT_SIZE);
  setReadColor(DEFAULT_READ_COLOR);
  saveReadColor(DEFAULT_READ_COLOR);
  setDisplayCourses(DEFAULT_DISPLAY_COURSES);
  saveDisplayCourses(DEFAULT_DISPLAY_COURSES);
}
