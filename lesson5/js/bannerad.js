var today = new Date();
var day = today.getDay();
var numFriday = 5;

if (day === numFriday) {
    var ad = "Saturday = Preston Pancakes in the Park! <br> 9:00 a.m. Saturday at the city park pavilion."
    document.getElementById('banner').innerHTML = ad;
}


