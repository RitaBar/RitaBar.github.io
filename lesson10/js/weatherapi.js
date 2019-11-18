const weatherObject = new XMLHttpRequest();
weatherObject.open ("GET","//api.openweathermap.org/data/2.5/weather?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1", true );
weatherObject.send();
weatherObject.onload = function() {
  let weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('currentCondition').innerHTML = weatherObject.weather[0].main;
  document.getElementById('currentTemp').innerHTML = weatherObject.main.temp;
  document.getElementById('humidity').innerHTML= weatherObject.main.humidity;
  document.getElementById('windSpeed').innerHTML = weatherObject.wind.speed;

} // end of onload