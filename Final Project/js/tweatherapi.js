
var temple = document.getElementById("boston").textContent;
if (temple.includes("Boston")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4930282&&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

/*
var temple = document.getElementById("hartford").textContent;
if (temple.includes("Hartford")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4834272&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

else if (temple.includes("boston")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4930282&&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}
else if (temple.includes("manhattan")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4900961&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}
else {
  if  (temple.includes("palymra")) 
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?zip=4402381,us&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}
*/


var weatherObject = new XMLHttpRequest();
weatherObject.open ("GET",weatherapi, true );
weatherObject.send();
weatherObject.onload = function() {
  let weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('currentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('humidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('currentTemp').textContent);
    var speed = parseFloat(document.getElementById('windSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('wChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('wChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

