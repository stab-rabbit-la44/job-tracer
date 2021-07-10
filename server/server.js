const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on port${PORT}`);
});

app.use('/', (req, res) => {
  res.json('whats up from the server');
});
