// Simple timer that counts down to zero

var secondsRemaining;
var intervalHandle;


function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}


function tick() {

    // grab the time h1 display
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    
    // add leading zero to seconds if less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    
    // concatenate time
    var message = min.toString() + ":" + sec;
    
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop when reaches zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    
    //subtract from seconds remaining
    secondsRemaining--;
}



function startCountdown() {
    
    // get contents of the minutes text box
    var minutes = document.getElementById("minutes").value;
    
    // check if it's not a number
    if (isNaN(minutes)) {
        alert("Please enter a number in whole minutes");
        return;  // end function until next call
        }
    
    // calculate number of seconds
    secondsRemaining = minutes * 60;
    
    // call the tick function every 1 second
    intervalHandle = setInterval(tick, 1000);
    
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}



// as soon as the page is loaded...
window.onload = function () {
    
    // create textbox and give it an id of minutes
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function() {
        startCountdown();
    };
    // add to the DOM, to the div called inputArea
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);

};