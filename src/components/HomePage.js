// src/components/HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div>
      <header className="header-class" style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section className="main-section">
          <h2>About Me</h2>
          <p>This is a brief introduction about myself. Here, you can showcase your skills, experiences, and hobbies.</p>
        </section>
        <section className="main-section">
          <h2>Projects</h2>
          <p>Highlight some of your key projects here. You can describe what technologies you used, your role in the project, and the outcome.</p>
        </section>
        <section className="main-section">
          <h2>Contact</h2>
          <p>Let people know how they can reach you. You might include your email, LinkedIn profile, or other contact information here.</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
