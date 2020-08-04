const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});



app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if(type === 'POST_CREATED') {
    const { id, title, content } = data;
    posts[id] = { id, title, content, comments: [] }
  }

  if (type === 'COMMENT_CREATED') {
    const { id, content, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, content});
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on port 4002');
});