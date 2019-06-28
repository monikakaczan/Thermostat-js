$(document).ready(function() {
  $('#current-location').change(function(){
    let city = this.value;
    displayWeather(city);
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=01a160eece022f1c9b006996134abcbe';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-weather').text(data.main.temp)
    });
  };

  var thermostat= new Thermostat();

  updateTemp();

$('#temperature-up').click(function() {
  thermostat.up();
   updateTemp()
});

$('#temperature-down').click(function() {
  thermostat.down();
   updateTemp();
});

$('#temperature-reset').click(function(){
  thermostat.reset();
   updateTemp();
});

$('#powersaving-on').click(function() {
  thermostat.powerSavingOn();
  $('#power-saving-status').text('ON')
  updateTemp();

});

$('#powersaving-off').click(function() {
  thermostat.powerSavingOff();
  $('#power-saving-status').text('OFF')
  updateTemp();
});


function updateTemp() {
  $("#temperature").text(thermostat.temp);
}

function updateTemp(){
  $('#temperature').text(thermostat.temp);
  $('#temperature').attr('class', thermostat.energyUsage());
}

});
