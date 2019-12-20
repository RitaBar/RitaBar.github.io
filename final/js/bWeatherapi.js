
var temple = document.getElementById("boston").textContent;
if (temple.includes("Boston")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4930282&&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

const bweatherObject = new XMLHttpRequest();
bweatherObject.open ("GET",weatherapi, true );
bweatherObject.send();
bweatherObject.onload = function() {
  let weatherInfo = JSON.parse(bweatherObject.responseText);


  document.getElementById('bcurrentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('bcurrentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('bhumidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('bwindSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('bcurrentTemp').textContent);
    var speed = parseFloat(document.getElementById('bwindSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('bwChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('bwChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

