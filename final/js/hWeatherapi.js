
var temple = document.getElementById("hartford").textContent;
if (temple.includes("Hartford")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=4834272&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

const hweatherObject = new XMLHttpRequest();
hweatherObject.open ("GET",weatherapi, true );
hweatherObject.send();
hweatherObject.onload = function() {
  let weatherInfo = JSON.parse(hweatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('hcurrentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('hcurrentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('hhumidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('hwindSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('hcurrentTemp').textContent);
    var speed = parseFloat(document.getElementById('hwindSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('hwChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('hwChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

