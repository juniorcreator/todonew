import React from 'react';
import './Btn.css';
const Btn = props => {
  return (
    <button
      onClick={props.click}
      type={props.type}
      className={props.classes}>{props.label}</button>
  );
};

export default Btn;
