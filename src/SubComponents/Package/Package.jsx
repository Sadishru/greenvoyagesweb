import React from 'react';
import './package.css';

const Package = ({image, duration,name,hook}) => {
  return (
    <div className='package__container'>
        <div className='package__container-img'>
            <img src={image} alt='tour package' />
        </div>
        <div className='package__container-duration'>
            <h3>{duration}</h3>
        </div>
        <div className='package__container-body'>
            <h2>{name}</h2>
            <p>{hook}</p>
            <button>Inquiry</button>
        </div>
    </div>
  )
}

export default Package