// Correct password
const correctPassword = "AFRODITE_HELPER";

// DOM elements
const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

// Wake-up message to show in alert
const wakeMessage = 'Type this message to wake her up: "hi there, afrodite"';

// Function to handle password submission
function handlePassword() {
  if (input.value === correctPassword) {

    // Save access in localStorage
    localStorage.setItem('aiAccess', 'granted');

    // Open Instagram AI in a new tab (user click triggered)
    window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show alert popup
    alert(wakeMessage);

    // Clear previous error
    errorMsg.textContent = "";

  } else {
    // Show error if password incorrect
    errorMsg.textContent = "Incorrect password";
  }
}

// Click event for Enter button
submitBtn.addEventListener('click', handlePassword);

// Enter key press triggers Enter button
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') handlePassword();
});

// Optional: You can still show a persistent instruction box in HTML under the password box
// so users know what to type first, even for new users.
