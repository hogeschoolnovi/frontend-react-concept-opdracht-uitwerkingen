import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="loader">
      <span className="outer-wrapper">
        <span className="circle outer-circle"></span>
      </span>
      <span className="inner-wrapper">
        <span className="circle inner-circle"></span>
      </span>
    </div>
  );
}

export default Loader;