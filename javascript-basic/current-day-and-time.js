// Write a JavaScript program to display the current day and time
// in the following format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

function dayOfWeek() {
    var d 		= new Date();
    var hours   = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var ampm 	= hours >= 12 ? 'PM' : 'AM';
	var hours 	= hours % 12;
    var weekday = new Array(7);
    weekday[0]  = "Sunday";
    weekday[1]  = "Monday";
    weekday[2]  = "Tuesday";
    weekday[3]  = "Wednesday";
    weekday[4]  = "Thursday";
    weekday[5]  = "Friday";
    weekday[6]  = "Saturday";
    var n 		= weekday[d.getDay()];
    var day = "Today is : " + n + ".";
	var time = "Current time is : " + hours + " " + ampm + " : " + minutes + " : " + seconds;

    document.getElementById("day").innerHTML = day;
    document.getElementById("time").innerHTML = time;
}