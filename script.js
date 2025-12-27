const correctPassword = "AFRODITE_HELPER";

const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

const wakeMessage = 'Type this message to wake her up: "hi there, afrodite"';

submitBtn.addEventListener('click', () => {
  if (input.value === correctPassword) {

    // Save access in localStorage
    localStorage.setItem('aiAccess', 'granted');

    // Open Instagram AI in a new tab (popup triggered by user click)
    window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show popup after user click (will not be blocked)
    alert(wakeMessage);

    // Clear any previous error message
    errorMsg.textContent = "";

  } else {
    errorMsg.textContent = "Incorrect password";
  }
});

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') submitBtn.click();
});

// Note: Do NOT auto-trigger popup on page load to prevent blocking
