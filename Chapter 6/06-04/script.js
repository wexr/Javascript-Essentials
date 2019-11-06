const HOURHAND = document.querySelector("#hour"); //id from DOM
const MINUTEHAND = document.querySelector("#minute"); //id from DOM
const SECONDHAND = document.querySelector("#second"); //id from DOM

function runTheClock(){ // main function
    var date = new Date(); // new instance of Date
    console.log(date);

    let hour = date.getHours(); //binding getHours method to let hour
    let min = date.getMinutes(); //binding getMinutes method to let min
    let sec = date.getSeconds(); //binding getSeconds method to let sec
    console.log("Hour: " + hour + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hour*360/12) + (min*(360/60)/12); //setting time according to degrees accounting for minutes as well.
    let minPosition = (min*360/60) + (sec*(360/60)/60); //setting time according to degrees accounting for seconds as well.
    let secPosition = sec*360/60; //setting time according to degrees.


    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; // changing the id selector with new position
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"; // changing the id selector with new position
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; // changing the id selector with new position
}

var interval = setInterval(runTheClock, 1000);
