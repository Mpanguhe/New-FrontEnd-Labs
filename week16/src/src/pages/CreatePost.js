// pages/CreatePost.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1 // Hardcoded user ID for demo purposes
      });
      console.log('New post created:', response.data);
      history.push('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <div className="container">
      <h1 className="mt-3">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea className="form-control" rows="5" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
