const sendBleepBtn = document.getElementById('send-bleep-btn');
const acknowledgeBtn = document.getElementById('acknowledge-btn');
const bleepMessage = document.getElementById('bleep-message');
const timerDisplay = document.getElementById('timer');
const bleepSound = document.getElementById('bleep-sound');

let timer;
let seconds = 0;

sendBleepBtn.addEventListener('click', () => {
  bleepMessage.textContent = "🚨 New Bleep: Patient in Ward 3 needs review!";
  acknowledgeBtn.disabled = false;
  bleepSound.play();
  startTimer();
});

acknowledgeBtn.addEventListener('click', () => {
  clearInterval(timer);
  bleepMessage.textContent = "✅ Bleep acknowledged.";
  acknowledgeBtn.disabled = true;
  timerDisplay.textContent = `Response time: ${seconds} seconds`;
});

function startTimer() {
  seconds = 0;
  timerDisplay.textContent = "Timer started...";
  timer = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `Time since bleep: ${seconds} seconds`;
  }, 1000);
}
