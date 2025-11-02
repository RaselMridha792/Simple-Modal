// Select the counter display
const counterDisplay = document.getElementById("counter");

// Set the initial time in seconds (e.g., 29 minutes and 47 seconds)
let timeInSeconds = 29 * 60 + 59; // 29 minutes and 47 seconds

// Function to update the counter display in minutes and seconds format
function updateCounter() {
  const minutes = Math.floor(timeInSeconds / 60); // Calculate minutes
  const seconds = timeInSeconds % 60; // Calculate remaining seconds

  // Format the minutes and seconds to always display two digits (e.g., "29:47")
  counterDisplay.textContent = `Tempo restante ${minutes} Minuti - ${seconds < 10 ? '0' : ''}${seconds} Secondi`;
}

// Function to handle the countdown
function startCountdown() {
  const interval = setInterval(function() {
    timeInSeconds--; // Decrement the time by 1 second

    // Update the counter display
    updateCounter();

    // Stop the countdown when the time reaches 0
    if (timeInSeconds <= 0) {
      clearInterval(interval); // Stop the interval
      alert("Tempo scaduto!"); // Optionally show an alert when the countdown is finished
    }
  }, 1000); // 1000 milliseconds = 1 second
}




// Start the countdown automatically when the page loads
startCountdown();


// Get modal elements
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.style.display = "flex";
});

// Close the modal when the "Cancel" button is clicked
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Optional: Add additional logic to handle the "Confirm" button if necessary
