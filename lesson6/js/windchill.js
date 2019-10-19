var temp = parseFloat(document.getElementById('highTemp').innerHTML);
var speed = parseFloat(document.getElementById('windSpeed').innerHTML);

var windchill = calculateWindChill(temp, speed);

if (windchill <= 50 && speed > 3) {
    document.getElementById('wChill').textContent = windchill.toFixed(0) + "\xB0F";
} else {
    document.getElementById('wChill').textContent = "NA";
}

function calculateWindChill(temp, speed) {
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
    return windchill;
}
