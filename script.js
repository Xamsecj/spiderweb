// Get the audio element
var audio = document.getElementById('background-audio');

// Function to play audio
function playAudio() {
    if (audio) {
        audio.play();
    }
}

// Function to pause audio
function pauseAudio() {
    if (audio) {
        audio.pause();
    }
}

// Set the date we're counting down to (example: 100 days from now)
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 100); // 100 days from now

// Update the countdown every 1 second
let countdownInterval = setInterval(function() {
    // Get the current date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);
