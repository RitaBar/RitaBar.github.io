var lastupd = new Date(document.lastModified); 
numMonth = lastupd.getMonth() + 1;
numDate = lastupd.getDate();
numYear = lastupd.getFullYear();
numHour = lastupd.getHours();
numMin = lastupd.getMinutes();
numSec = lastupd.getSeconds();
document.getElementById('lastUpdate').textContent = (numMonth + "/" + numDate + "/" + numYear + "  " + numHour + ":" + numMin + ":" + numSec);