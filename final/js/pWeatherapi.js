
var temple = document.getElementById("palmyra").textContent;
if (temple.includes("Palmyra")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4402381&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

const pweatherObject = new XMLHttpRequest();
pweatherObject.open ("GET",weatherapi, true );
pweatherObject.send();
pweatherObject.onload = function() {
  let weatherInfo = JSON.parse(pweatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('pcurrentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('pcurrentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('phumidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('pwindSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('pcurrentTemp').textContent);
    var speed = parseFloat(document.getElementById('pwindSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('pwChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('pwChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

