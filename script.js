const correctPassword = "AFRODITE_HELPER";

const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

submitBtn.addEventListener('click', () => {
  if (input.value === correctPassword) {

    // Save access in localStorage
    localStorage.setItem('aiAccess','granted');

    // Open Instagram AI in a new tab
    window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show popup with AI prompt
    alert('Type this message to wake her up: "hi there, afrodite"');

  } else {
    errorMsg.textContent = "Incorrect password";
  }
});

input.addEventListener('keypress', e => {
  if(e.key === 'Enter') submitBtn.click();
});

// If already logged in, automatically open AI and show popup
if(localStorage.getItem('aiAccess') === 'granted'){
  window.open(
    "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
    "_blank"
  );
  alert('Type this message to wake her up: "hi there, afrodite"');
}
