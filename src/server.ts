import express from 'express';

const app = express();

app.get('/healthcheck', (request, response) => {
  return response.status(200).json({
    uptime: process.uptime(),
  });
});

app.listen(3333, () => {
  console.log('API running at port 3333...');
});
