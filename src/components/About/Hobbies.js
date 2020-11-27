import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';

const Hobbies = (props) => {
  return (
    <div className='hobbies'>
      <div className='hobbies__top'>
        <FontAwesomeIcon icon={props.icon} size='2x' color='#33272a' />
        <h3>{props.title}</h3>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default Hobbies;
