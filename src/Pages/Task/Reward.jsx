import React from 'react';
import PropTypes from 'prop-types';


const Reward = ({reward}) => {
const { description, image } = reward
   return (
    <div>
        <p>{description}</p>
        <img src={image}/>

    </div>
   )
  
}


export default Reward;
