  var now  = new Date();        // current date/time
    var hrs  = now.getHours();    // 0 to 23
    var mins = now.getMinutes();
    var secs = now.getSeconds();
	
	
	var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[now.getDay()];


    document.writeln("<p>It is " + now + "</p>");
    document.writeln("<p>Hour is " + hrs + "</p>");
    document.writeln("<p>Minute is " + mins + "</p>");
    document.writeln("<p>Second is " + secs + "</p>");
	document.writeln("<p>Today is " + day + "</p>");
    if (hrs < 12) {
      document.writeln("<h2>Good Morning!</h2>");
    } else {
      document.writeln("<h2>Good Afternoon!</h2>");
    }
	if (day = "Sunday") {
      document.writeln("<h2>Sunday</h2>");
    } 
	else if (day = "Monday"){
      document.writeln("<h2>Monday</h2>");
    }
	 else {
      document.writeln("<h2>n</h2>");
    }
