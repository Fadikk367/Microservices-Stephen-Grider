import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4002/posts');

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: '100%', marginBottom: '20px' }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <CommentList comments={post.comments}/>
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    )
  })


  return (
    <div className="d-flex flex-column flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  )
}

export default PostList;
