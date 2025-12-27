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

    // Show pre-filled instruction in a new element below the container
    let promptMsg = document.createElement('p');
    promptMsg.id = 'ai-prompt';
    promptMsg.textContent = 'Type this message to wake her up: "hi there, afrodite"';
    promptMsg.style.color = '#000'; // black font
    promptMsg.style.fontSize = '16px';
    promptMsg.style.marginTop = '20px';
    promptMsg.style.fontWeight = 'bold';
    promptMsg.style.textAlign = 'center';
    document.body.appendChild(promptMsg);

  } else {
    errorMsg.textContent = "Incorrect password";
  }
});

input.addEventListener('keypress', e => {
  if(e.key === 'Enter') submitBtn.click();
});

// If already logged in, show prompt immediately
if(localStorage.getItem('aiAccess') === 'granted'){
  const chatWindow = window.open(
    "https://aistudio.instagram.com/ai/3952982205025189/?utm_source=mshare",
    "_blank"
  );

  let promptMsg = document.createElement('p');
  promptMsg.id = 'ai-prompt';
  promptMsg.textContent = 'Type this message to wake her up: "hi there, afrodite"';
  promptMsg.style.color = '#000'; // black font
  promptMsg.style.fontSize = '16px';
  promptMsg.style.marginTop = '20px';
  promptMsg.style.fontWeight = 'bold';
  promptMsg.style.textAlign = 'center';
  document.body.appendChild(promptMsg);
}
