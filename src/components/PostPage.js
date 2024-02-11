import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Assume getPostById is a function that fetches a single post by ID
import { getPostById } from '../api';

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostById(postId);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Additional post content */}
    </div>
  );
}

export default PostPage;
