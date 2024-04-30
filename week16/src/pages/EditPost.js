// pages/EditPost.js
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          id,
          title,
          body,
          userId: 1, // Hardcoded user ID for demo purposes
        }
      );
      console.log("Post updated:", response.data);
      history.push("/pages/Posts");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="mt-3">Edit Post</h1>
        {post ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                rows="5"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </div>
  );
};

export default EditPost;
