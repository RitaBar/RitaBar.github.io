
var temple = document.getElementById("manhattan").textContent;
if (temple.includes("Manhattan")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4900961&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

const mweatherObject = new XMLHttpRequest();
mweatherObject.open ("GET",weatherapi, true );
mweatherObject.send();
mweatherObject.onload = function() {
  let weatherInfo = JSON.parse(mweatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('mcurrentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('mcurrentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('mhumidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('mwindSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('mcurrentTemp').textContent);
    var speed = parseFloat(document.getElementById('mwindSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('mwChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('mwChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

