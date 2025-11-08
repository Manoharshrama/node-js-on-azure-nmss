//const API_BASE = 'https://your-dice-api.azurewebsites.net'; // Replace with actual backend URL
const API_BASE = 'http://localhost:3000'; // Replace with actual backend URL

async function wakeUp() {
  await fetch(`${API_BASE}/api/wakeup`);
  document.getElementById('output').textContent = 'Server is awake!';
}

async function rollDice() {
  const res = await fetch(`${API_BASE}/api/roll?sides=6`);
  const data = await res.json();
  document.getElementById('output').textContent = `You rolled: ${data.result}`;
}

async function triggerCORS() {
  try {
    await fetch('https://google.com/api/roll');
  } catch (err) {
    document.getElementById('output').textContent = 'CORS error occurred!';
  }
}

