import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Website!</h1>
      <p style={styles.paragraph}>
        We are delighted to have you here. Explore our website to learn more about us.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2em',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#666',
  },
};

export default Home;
