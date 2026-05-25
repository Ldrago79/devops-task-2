const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from DevOps Task 2! The CI/CD pipeline is working perfectly.');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});