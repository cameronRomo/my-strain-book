import React, { useState } from 'react';
import './Card.css';
import leaf from '../leaf.svg';
import medicalLeaf from '../medicalLeaf.svg';

export const Card = (props) => {
  const [favoritedStrain, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(!favoritedStrain);
  }

  return (
    <section 
    className='card'
    >
      <h3>Strain: { props.strainName }</h3>
      <div className='strain-info-container'>
        <div className='strain-type'>
          <h5>Type:</h5>
          <p>{ props.strain.race }</p>
        </div>
        <div className='strain-flavors'>
          <h5>Flavors:</h5>
          {props.strain.flavors.map(flavor => (<ul>{flavor}</ul>) )}
        </div>
        <h5>Effects:</h5>
          <div className='strain-effects-positive-negative'>
            <h6>Positve:</h6>
            {props.strain.effects.positive.map(flavor => (<ul>{flavor}</ul>) )}    
            <h6>Negative:</h6>
            {props.strain.effects.negative.map(flavor => (<ul>{flavor}</ul>) )}
          </div>
        <div className='strain-effects-medical'>
          <h6>Medical:</h6>
          {props.strain.effects.medical.map(flavor => (<ul>{flavor}</ul>) )}
        </div>
        {favoritedStrain === false && <img aria-label='Favorite Strain' src={leaf} onClick={addFavorite}/>}
        {favoritedStrain === true && <img aria-label='Strain was added to favorites' src={medicalLeaf}/>}
      </div>
    </section>
  )
}