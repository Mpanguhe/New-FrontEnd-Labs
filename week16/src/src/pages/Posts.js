// pages/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-3">Posts Page</h1>
      <Link to="/posts/create" className="btn btn-primary mb-3">Create Post</Link>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/posts/${post.id}/edit`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
