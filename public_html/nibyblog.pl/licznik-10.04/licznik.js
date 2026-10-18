
    var d = new Date();
    dom = d.getDate();
    month = d.getMonth();
    year = d.getYear();
    if (year < 2000) year = year - 100;
    else year = year - 2000;

    if (year == 9 && month == 2) 
        days = 54 - dom;
    else if (year == 9 && month == 3)
        days = 23 - dom;
    else 
        days = 0;
    if (days < 0) days = 0;
    if (days < 10) days = '0' + days.toString();


var base = 'http://www.nibyblog.pl/licznik-10.04/';

document.write('<a href="http://www.ubuntu.com/"><img id="countdownimage" src="'+base+days+'.png" width="180" 
height="150" border="0" alt="Ubuntu 10.04 - Już wkrótce" style="padding-top:2px;background-color:#fff"></a>');
//
// document.write('<a href="http://www.ubuntu.com/getubuntu"><img id="ubuntucountdownimage" src="'+base+'here.png" 
width="180" height="150" border="0" alt="Ubuntu 9.04 is here"></a>');
