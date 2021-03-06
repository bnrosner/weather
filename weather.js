$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Temperature outside is " + data.currently.apparentTemperature + ", tomorrow's high is " + data.daily.data[0].apparentTemperatureMax + ", the following day's high is " + data.daily.data[1].apparentTemperatureMax;
    // End of your code
    var markup2 = data.currently.summary;


    $('.weather-report').html(markup);
    $('.weather-report2').html(markup2);
  }


  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});