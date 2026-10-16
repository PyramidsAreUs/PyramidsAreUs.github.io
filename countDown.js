const targetDate = new Date("2027-6-18T12:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the results to the HTML elements         .padStart(2, '0')
    document.getElementById("days").innerText = String(days);
    document.getElementById("hours").innerText = String(hours);
    document.getElementById("minutes").innerText = String(minutes);
    document.getElementById("seconds").innerText = String(seconds);

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown-timer").innerHTML = "<h2>Something is coming...</h2>";
    }
}, 1000);
