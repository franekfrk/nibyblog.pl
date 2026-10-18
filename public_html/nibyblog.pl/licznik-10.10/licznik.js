var d = new Date();
dom = d.getDate();
month = d.getMonth();
year = d.getYear();

if(year < 2000) year -= 100;
else year -= 2000;

full = (year*10000)+(month*100)+dom;

if(full < 100800){
	days = '00';
}else if(full > 101009){
	days = '0';
}else{
	if(year == 10 && month == 8) days = 40 - dom;
	else if(year == 10 && month == 9) days = 10 - dom;
	else days = 0;

	if(days < 0) days = 0;
	else if(days < 10 && days != 0) days = '0' + days.toString();
}

var base = 'http://www.nibyblog.pl/licznik-10.10/';

//document.write('<a href="http://www.debian.org/"><img id="countdownimage" src="'+base+days+'.png" width="180" height="150" border="0" alt="Ubuntu umiera!" style="padding-top:2px;background-color:#fff"></a>');
//
document.write('<a href="http://www.debian.org/distrib/"><img id="ubuntucountdownimage" src="'+base+'here.png" width="180" height="150" border="0" alt="Ubuntu już nie ma"></a>');

