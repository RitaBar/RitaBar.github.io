var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

document.getElementById('currentDate').textContent =  month + "." + day + "." + year;

