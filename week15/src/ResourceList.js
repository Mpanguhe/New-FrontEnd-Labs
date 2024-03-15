import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    // GET request
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    // POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(data => {
      setPosts(prevPosts => [...prevPosts, data]);
      setNewPost({ title: '', body: '' });
    })
    .catch(error => console.error('Error creating post:', error));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {/* display posts in a table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
              <button onClick={() => handleDelete(post.id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Create New Post</h2>
      <form onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
          placeholder="Body"
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default ResourceList;
