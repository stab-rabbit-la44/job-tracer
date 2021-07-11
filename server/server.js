const express = require('express');

const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

/**
 * handle parsing request body
 */

app.use(express.json());

/**
 * define route handlers
 */

app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  // eslint-disable-next-line quotes
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * Global Error Handler
 */

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port${PORT}`);
});
