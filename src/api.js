// src/api.js

// Example function to fetch blog posts
export const getPosts = async () => {
    // Replace this with actual API call logic
    return [
      { id: 1, title: 'Blog Post 1', content: 'Content for blog post 1' },
      { id: 2, title: 'Blog Post 2', content: 'Content for blog post 2' },
      // Add more posts as needed
    ];
  };
  
  // Example function to fetch a single post by ID
  export const getPostById = async (postId) => {
    // Replace this with actual API call logic
    const posts = await getPosts();
    return posts.find(post => post.id.toString() === postId);
  };
  