import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        We are a company dedicated to providing the best services to our customers.
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

export default About;
