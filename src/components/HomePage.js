import React from 'react';
// Import CSS files if not already done
import './styles/cipher-weekly.webflow.css';
import './styles/normalize.css';
import './styles/webflow.css';

function HomePage() {
  // Example of dynamically loading blog posts - replace with actual data fetching logic
  const blogPosts = [
    { title: 'Post 1', content: 'This is the first post.' },
    // Add more posts here
  ];

  return (
    <div className="page-container">
      <header className="header-class" style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <div className="content-container">
        <main>
          {blogPosts.map((post, index) => (
            <section key={index} className="main-section">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
