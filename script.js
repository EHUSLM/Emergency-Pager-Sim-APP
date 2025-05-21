const sendBleepBtn = document.getElementById('send-bleep-btn');
const acknowledgeBtn = document.getElementById('acknowledge-btn');
const bleepMessage = document.getElementById('bleep-message');
const timerDisplay = document.getElementById('timer');
const bleepSound = document.getElementById('bleep-sound');

let timer;
let seconds = 0;

const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

const users = {
  admin: { username: 'admin', password: 'admin123', role: 'admin' },
  student: { username: 'student', password: 'student1', role: 'student' }
};

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = Object.values(users).find(u => u.username === username && u.password === password);
    if (user) {
      if (user.role === 'admin') {
        window.location.href = 'admin.html';
      } else if (user.role === 'student') {
        window.location.href = 'student.html';
      }
    } else {
      loginError.textContent = 'Invalid username or password.';
    }
  });
}

if (sendBleepBtn) {
  sendBleepBtn.addEventListener('click', () => {
    bleepMessage.textContent = "🚨 New Bleep: Patient in Ward 3 needs review!";
    acknowledgeBtn.disabled = false;
    bleepSound.play();
    startTimer();
  });
}

if (acknowledgeBtn) {
  acknowledgeBtn.addEventListener('click', () => {
    clearInterval(timer);
    bleepMessage.textContent = "✅ Bleep acknowledged.";
    acknowledgeBtn.disabled = true;
    timerDisplay.textContent = `Response time: ${seconds} seconds`;
  });
}

function startTimer() {
  seconds = 0;
  timerDisplay.textContent = "Timer started...";
  timer = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `Time since bleep: ${seconds} seconds`;
  }, 1000);
}
