// Correct password
const correctPassword = "AFRODITE_HELPER";

// DOM elements
const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');
const aiPromptBox = document.getElementById('ai-prompt-box'); // Add this div in HTML under password container

// Wake-up message
const wakeMessage = 'Type this message to wake her up: "hi there, afrodite"';

// Function to handle password submission
function handlePassword() {
  if (input.value === correctPassword) {

    // Save access in localStorage
    localStorage.setItem('aiAccess', 'granted');

    // Show instructions in-page instead of alert
    aiPromptBox.textContent = wakeMessage;

    // Provide a clickable link for the AI Studio (user must be logged in)
    aiPromptBox.innerHTML += `<br><a href="https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare" target="_blank" class="ig-login-btn">Open AI Studio</a>`;

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
