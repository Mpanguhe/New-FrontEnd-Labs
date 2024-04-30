import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
