import React from 'react';
import './Button.css';

const Buttons = ({ onClick, children }) => (
  <div className="search-button">
    <button onClick={onClick}>{children}</button>
  </div>
);

export default Buttons;
