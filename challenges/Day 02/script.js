// Function to format time (add leading zero if needed)
function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }
  
  // Function to update the clock and date
  function updateClock() {
    const now = new Date();
  
    // Get hours, minutes, and seconds
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
  
    // Get date
    const date = now.toDateString();
  
    // Update the clock and date on the page
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").textContent = date;
  }
  
  // Run updateClock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock immediately when the page loads
  updateClock();
  