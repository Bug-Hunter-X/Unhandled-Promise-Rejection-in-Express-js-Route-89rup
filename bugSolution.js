const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      // Proper error handling using next(error)
      next(error);
    });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}