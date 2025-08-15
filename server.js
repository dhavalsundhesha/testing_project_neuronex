const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// public folder से सभी static files serve करो
app.use(express.static(path.join(__dirname, 'public')));

// Root पर index.html serve करो
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// किसी भी unknown route पर भी index.html serve करो (SPA style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
