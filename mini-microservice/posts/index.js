const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title, content } = req.body;
  console.log({ title, content });

  posts[id] = {
    id, 
    title,
    content
  };

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'POST_CREATED',
    data: {
      id, 
      title,
      content
    }
  })

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received an EVENT: ', req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('v55');
  console.log('Listening on port 4000');
});