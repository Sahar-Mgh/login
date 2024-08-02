import React from 'react';
import './TextArea.css';

const TextArea = ({ placeholder, rows }) => {
  return <textarea placeholder={placeholder} rows={rows} />;
};

export default TextArea;
