import React from 'react';
import './Resume.css';

const Certificate = (props) => {
  return (
    <div className='certificate'>
      <div className='thumb'>
        <img src={props.data.image} alt={props.data.title} />
        <p>{props.data.platform}</p>
      </div>
      <div className='title__more'>
        <p>
          <b>{props.data.title}</b>
        </p>
        <p>
          <a href={props.data.link}>View More</a>
        </p>
      </div>
    </div>
  );
};

export default Certificate;
