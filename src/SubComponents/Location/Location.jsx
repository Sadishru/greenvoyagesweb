import React from 'react';
import './location.css';

const Location = ({img, text}) => {
  return (
    <div className='locationThread'>
        <img src={img} alt={text} />
        <p>{text}</p>
    </div>
  )
}

export default Location