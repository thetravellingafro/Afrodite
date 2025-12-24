const correctPassword = "AFRODITE_HELPER"; // change this

const pwScreen = document.getElementById('password-screen');
const chatContainer = document.getElementById('chat-container');
const submitBtn = document.getElementById('submit-password');
const input = document.getElementById('password-input');
const errorMsg = document.getElementById('error-msg');

submitBtn.addEventListener('click', () => {
  if (input.value === correctPassword) {
    pwScreen.style.display = 'none';
    chatContainer.style.display = 'flex';
  } else {
    errorMsg.textContent = "Incorrect password, try again.";
  }
});

input.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitBtn.click(); });
