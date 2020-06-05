$(function() {
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b75632060b26583c88abff31039d34e9&units=metric`,
    type: 'GET',
    dataType: 'JSON'
  })
  .done(({ main: { temp, temp_max, temp_min } }) => {
    $('#temp_atual').text(`${temp} °C`);
    $('#temp_max').text(`${temp_max} °C`);
    $('#temp_min').text(`${temp_min} °C`);
  })
  .fail(error => console.log);

});
