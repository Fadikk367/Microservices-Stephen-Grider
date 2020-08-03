import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return;

    console.log({ title, content});

    await axios.post('http://localhost:4000/posts', {
      title,
      content
    });

    setTitle('');
    setContent('');
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
          <label>Content:</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate;