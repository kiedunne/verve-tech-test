import React from 'react';
import PropTypes from 'prop-types';
import './Reward.scss'

const Reward = ({reward}) => {
const { description, image } = reward
   return (
    <div className="Reward">
        <p>{description}</p>
        <img src={image}/>

    </div>
   )
  
}


export default Reward;
