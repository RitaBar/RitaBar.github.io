const currentWeatherApiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
const forecastApiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

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

fetch(currentWeatherApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currentCondition').textContent = jsObject.weather[0].main;
    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

    calcWindChill();
  });

  
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    var forecastItems = jsObject.list;
    var fiveDayItems = forecastItems.filter(function (item) {
      return item.dt_txt.includes("18:00:00");
    });

    for (let i = 0; i < (fiveDayItems.length); ++i) {
      var day = "day" + (i+1);
      var icon = "icon" + (i+1);
      var temp = "temp" + (i+1);

      var d = new Date(fiveDayItems[i].dt_txt);
      var dayName = days[d.getDay()];

      var imagesrc = 'https://openweathermap.org/img/w/' + fiveDayItems[i].weather[0].icon + '.png';

      document.getElementById(day).textContent = dayName;
      document.getElementById(icon).setAttribute('src', imagesrc);
      document.getElementById(temp).textContent = fiveDayItems[i].main.temp;

    }
  });