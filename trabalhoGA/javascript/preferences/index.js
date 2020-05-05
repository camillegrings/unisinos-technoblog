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

  initFontSize();
  initReadColor();

 });


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
  var $radios = $('input:radio[name=fontSizeRadio]');
  if($radios.is(':checked') === false) {
    $radios.filter('[value='+fontSize.toString()+']').prop('checked', true);
  }
}

function initReadColor(){
  var readColor = localStorage.getItem('readcolor');
  if(readColor === null) {
    readColor = DEFAULT_READ_COLOR;
  }
  $('.btn-color').removeClass('active');
  $('#'+readColor).addClass('active');
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