const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

app.get('/', (req, res) => {
  client.incr('visits');
  client.get('visits', (err, visits) => {
    res.send('Visits count: ' + visits);
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080...');
});