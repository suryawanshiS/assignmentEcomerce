// src/Components/ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggle;
