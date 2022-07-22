var today = new Date().getDay();

if ((today = 0)) {
  document.getElementById("today").innerHTML = "sunday";
} else if ((today = 1)) {
  document.getElementById("today").innerHTML = "monday";
} else if ((today = 2)) {
  document.getElementById("today").innerHTML = "tusday";
} else if ((today = 3)) {
  document.getElementById("today").innerHTML = "thersday";
} else if ((today = 4)) {
  document.getElementById("today").innerHTML = "wensday";
} else if ((today = 5)) {
  document.getElementById("today").innerHTML = "friday";
} else {
  document.getElementById("today").innerHTML = "saterday";
}
