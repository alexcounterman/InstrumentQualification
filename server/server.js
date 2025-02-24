const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'qualificationdb',
  password: 'dbpassword',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/instruments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM instruments');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/sign', async (req, res) => {
  const { documentId, password } = req.body;
  const userId = req.user?.id || 1; // Assume user is authenticated via middleware

  // Verify password (pseudo-code)
  const isValid = true; // Replace with real verification
  if (!isValid) {
    return res.status(401).send('Invalid credentials');
  }

  await pool.query(
    'INSERT INTO audit_trail (user_id, action, details) VALUES ($1, $2, $3)',
    [userId, 'SIGN', `Signed document ${documentId}`]
  );

  res.send('Document signed');
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('update', (data) => {
    socket.broadcast.emit('update', data);
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
