var lastupd = new Date(document.lastModified);
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
numMonth = lastupd.getMonth();
numDate = lastupd.getDate();
numYear = lastupd.getFullYear();
numDay = lastupd.getDay();
document.getElementById('lastUpdate').textContent = (day[lastupd.getDay()] + ", " + numDate + " " + month[lastupd.getMonth()] + " " + numYear);