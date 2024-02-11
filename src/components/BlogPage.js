import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Assume getPosts is a function that fetches blog posts
import { getPosts } from '../api';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div className="main-section">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
