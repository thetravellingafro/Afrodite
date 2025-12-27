const correctPassword = "AFRODITE_HELPER";

const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

const wakeMessage = 'Type this message to wake her up: "hi there, afrodite"';

submitBtn.addEventListener('click', () => {
  if (input.value === correctPassword) {

    // Save access in localStorage
    localStorage.setItem('aiAccess', 'granted');

    // Open Instagram AI in a new tab
    window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show popup only once per session
    if (!sessionStorage.getItem('popupShown')) {
      alert(wakeMessage);
      sessionStorage.setItem('popupShown', 'true');
    }

    // Clear error message if previously incorrect
    errorMsg.textContent = "";

  } else {
    errorMsg.textContent = "Incorrect password";
  }
});

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') submitBtn.click();
});

// Automatically open AI and show popup if already logged in
if (localStorage.getItem('aiAccess') === 'granted') {
  window.open(
    "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
    "_blank"
  );

  if (!sessionStorage.getItem('popupShown')) {
    alert(wakeMessage);
    sessionStorage.setItem('popupShown', 'true');
  }
}
