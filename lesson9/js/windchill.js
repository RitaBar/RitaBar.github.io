var temp = parseFloat(document.getElementById('highTemp').textContent);
var speed = parseFloat(document.getElementById('windSpeed').textContent);

windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));

if (windchill <= 50 && speed > 3) {
    document.getElementById('wChill').textContent = windchill.toFixed(0) + "\xB0F";
} else {
    document.getElementById('wChill').textContent = "NA";
}
