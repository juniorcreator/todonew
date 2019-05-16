import React from 'react';
import './Newsnav.css';
import {NavLink} from "react-router-dom";

const Newsnav = props => {
  return (
    <div className='Newsnav'>
      <ul>
        {props.nav.map((nav) => {
          return(<li key={nav.id}><NavLink exact={nav.exact} key={nav.id} to={nav.to}>{nav.label}</NavLink></li>)
        })}
      </ul>
    </div>
  );
};

Newsnav .propTypes = {
  
};

export default Newsnav ;
