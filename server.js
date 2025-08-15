const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Root folder से static files serve करो
app.use(express.static("index.html"));

// Root URL पर index.html भेजो
app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
