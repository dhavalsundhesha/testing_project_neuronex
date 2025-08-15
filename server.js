const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
 console.log("error");
// Root folder से सभी static files serve करो
app.use(express.static(__dirname));
 console.log("error");

// Root URL पर index.html भेजो
app.get('/', (req, res) => {
  console.log("error");
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Optional: किसी भी unknown route पर redirect करो /
app.get('*', (req, res) => {
  console.log("error2")
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
