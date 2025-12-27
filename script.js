const correctPassword = "AFRODITE_HELPER";

const input = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-password');
const errorMsg = document.getElementById('error-msg');

submitBtn.addEventListener('click', () => {
  if (input.value === correctPassword) {

    localStorage.setItem('aiAccess','granted');

    // Open Instagram AI in a new tab
    const chatWindow = window.open(
      "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
      "_blank"
    );

    // Show instruction to type message
    setTimeout(() => {
      alert('Type this message to wake her up: "hi there, afrodite"');
    }, 1000);

  } else {
    errorMsg.textContent = "Incorrect password";
  }
});

input.addEventListener('keypress', e => {
  if(e.key === 'Enter') submitBtn.click();
});

// If already logged in, skip password
if(localStorage.getItem('aiAccess') === 'granted'){
  const chatWindow = window.open(
    "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
    "_blank"
  );
  setTimeout(() => {
    alert('Type this message to wake her up: "hi there, afrodite"');
  }, 1000);
}
