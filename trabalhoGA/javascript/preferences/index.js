var DEFAULT_FONT_SIZE = 14;
var DEFAULT_READ_COLOR = '17a2b8';

$(document).ready(function () {

  $('.fontSizeRadio').on('change', function() {
    var size = $('input[name=fontSizeRadio]:checked', '#preferences-form').val(); 
    saveFontSize(size);
  });

  $('.btn-color').on('click', function(val) {
    var color = this.id;
    saveReadColor(color);
    $('.btn-color').removeClass('active');
    $('#'+color).addClass('active');
  });

  $('#reset-to-defaults').on('click', function() {
    resetToDefaults();
  });

  initFontSize();
  initReadColor();

 });


function setFontSize(fontSize) {
  var $radios = $('input:radio[name=fontSizeRadio]');
  $radios.filter('[value='+fontSize.toString()+']').prop('checked', true);
}

function setReadColor(readColor) {
  $('.btn-color').removeClass('active');
  $('#'+readColor).addClass('active');
}

function saveReadColor(id){
  var color = DEFAULT_READ_COLOR;
  localStorage.setItem('readcolor', id);
}

function saveFontSize(size){
  localStorage.setItem('fontsize', size);
}

function initFontSize(){
  var fontSize = localStorage.getItem('fontsize');
  if(fontSize === null) {
    fontSize = DEFAULT_FONT_SIZE;
  }
  setFontSize(fontSize);
}

function initReadColor(){
  var readColor = localStorage.getItem('readcolor');
  if(readColor === null) {
    readColor = DEFAULT_READ_COLOR;
  }
  setReadColor(readColor);
}

function getReadColor() {
  var readColor = localStorage.getItem('readcolor');
  if(readColor === null) {
    readColor = DEFAULT_READ_COLOR;
  }
  return readColor;
}

function getFontSize() {
  var fontSize = localStorage.getItem('fontsize');
  if(fontSize === null) {
    fontSize = DEFAULT_FONT_SIZE;
  }
  return fontSize;
}

function resetToDefaults() {
  setFontSize(DEFAULT_FONT_SIZE);
  saveFontSize(DEFAULT_FONT_SIZE);
  setReadColor(DEFAULT_READ_COLOR);
  saveReadColor(DEFAULT_READ_COLOR);
}