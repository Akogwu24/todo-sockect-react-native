const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend working' });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
