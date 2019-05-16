import React from 'react';
import './Input.css';
const Input = props => {
  return (
   <div className='Input'>
     <input
       type={props.type}
       className={props.className}
       placeholder={props.placeholder}
       value={props.value}
       onChange={props.change}
       onFocus={props.focus}
       aria-label={props.ariaLabel}
       id={props.id}
       aria-describedby="basic-addon1" />
   </div>

  );
};

Input.propTypes = {

};

export default Input;
