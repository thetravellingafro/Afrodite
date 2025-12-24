const correctPassword = "AFRODITE_HELPER"; // updated password
const passwordScreen = document.getElementById('password-screen');
const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

// If already logged in, skip password
if(localStorage.getItem('aiAccess') === 'granted'){
  window.open("https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare", "_blank");
}

// Check password on submit
submitBtn.addEventListener('click', () => {
  if(input.value === correctPassword){
    localStorage.setItem('aiAccess', 'granted'); // persist access
    window.open("https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare", "_blank");
  } else {
    errorMsg.textContent = "Incorrect password, try again.";
  }
});

// Enter key press
input.addEventListener('keypress', e => {
  if(e.key === 'Enter') submitBtn.click();
});
