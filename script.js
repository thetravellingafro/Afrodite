// Correct password
const correctPassword = "AFRODITEHELP";

// DOM elements
const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

// Wake-up message
const wakeMessage = 'Type this message to wake her up: "hi there, afrodite"';

// Handle password submission
function handlePassword() {
  if (input.value === correctPassword) {

    // Save access
    localStorage.setItem('aiAccess', 'granted');

    // Open Instagram AI in new tab
    window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show popup alert
    alert(wakeMessage);

    // Clear any previous error
    errorMsg.textContent = "";

  } else {
    errorMsg.textContent = "Incorrect password";
  }
}

// Click event
submitBtn.addEventListener('click', handlePassword);

// Enter key triggers submit
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') handlePassword();
});
