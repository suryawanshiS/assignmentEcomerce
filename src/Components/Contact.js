import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.paragraph}>
        If you have any questions, feel free to reach out to us at contact@example.com.
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

export default Contact;
