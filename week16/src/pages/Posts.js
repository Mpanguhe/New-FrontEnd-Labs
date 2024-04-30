// pages/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [propToPass, setPropToPass] = useState('');

  const handleClick = (id) => {
    console.log(id);
    const propValue = 'valueToPass';
    setPropToPass(propValue);
  };
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Sort the posts array by title in alphabetical order
        const sortedPosts = response.data.sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortedPosts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="mt-3">Posts Page</h1>
      <Button variant="dark">
        <Link to="/pages/CreatePost">Create Post</Link>
      </Button>
      {posts.map(post => (
        <Alert key={post.id} variant="primary">
        <div>ID: {post.id}</div>
        <div>
          <Link to={`/posts/postDetails/${post.id}`}>{post.title}</Link>
          <Link to={`/posts/edit/${post.id}`}>
            <Button variant="info" size="sm" className="ml-2" onClick={() => handleClick(post.id)}>Edit</Button>
          </Link>
        </div>
      </Alert>
      ))}
    </div>
  );
}

export default Posts;
