const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for specific origins (adjust as needed)
app.use(cors({
  origin: ['https://localhost:3000']
}));

// RESTful API: Roll a die
app.get('/api/roll', (req, res) => {
  const sides = parseInt(req.query.sides) || 6;
  const result = Math.floor(Math.random() * sides) + 1;
  res.json({ result });
});

// Wake-up endpoint
app.get('/api/wakeup', (req, res) => {
  res.send('Server is awake!');
});

// Basic index.html for testing
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Dice API running on port ${PORT}`);
});

