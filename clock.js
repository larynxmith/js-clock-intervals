//Element Variables
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");

//Calculation Variables
var secondsDeg= 360/60;
var minutesDeg= 360/60;
var hoursDeg= 360/12;

var seconds = 0;
var minutes = 0;
var hours = 0;



function runClock() {
setInterval(function() {
    //Grab current date and set the time every second
    var currentDate = new Date;

    seconds = currentDate.getSeconds();
    minutes = currentDate.getMinutes();
    hours = currentDate.getHours();

    //Calculate the proper positions at the respective time, including incremental movement
    //between hours and minutes units
    var secondsPosition = (seconds * secondsDeg);
    var minutesPosition = ((minutes * minutesDeg) + (secondsPosition / 60));
    var hoursPosition = ((hours * hoursDeg) + (minutesPosition / 12));

    //Rotate the Hands images to the calcualted positions
    secondHand.style.transform = "rotate(" + secondsPosition + "deg)";
    minuteHand.style.transform = "rotate(" + minutesPosition + "deg)";
    hourHand.style.transform = "rotate(" + hoursPosition + "deg)";
    console.log("TICK!");
 }, 1000);
}
runClock();