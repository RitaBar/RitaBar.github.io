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

const weatherObject = new XMLHttpRequest();
weatherObject.open ("GET","//api.openweathermap.org/data/2.5/weather?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1", true );
weatherObject.send();
weatherObject.onload = function() {
  let weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('currentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('humidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

} // end of onload