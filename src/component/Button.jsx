import React from 'react'
import './stylesComponent.css'



import PropTypes from 'prop-types';

export default function Button({ className, text }) {
  return (
    <div>
      <button className={`btn ${className}`}>
        {text} &gt;
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: 'ibm-plex-mono-bold',
  text: "Click me",
};

