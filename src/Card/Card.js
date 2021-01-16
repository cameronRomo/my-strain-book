import React from 'react';
import './Card.css';
import leaf from '../leaf.svg'

export const Card = (props) => {
  // const positiveEffects = Object.keys(props.strain.effects)

  return (
    <section className='card'>
      <h3>Strain: { props.strainName }</h3>
      <div>
        <h5>Type:</h5>
        <p>{ props.strain.race }</p>
        <h5>Flavors:</h5>
        {props.strain.flavors.map(flavor => (<ul>{flavor}</ul>) )}
        <h5>Effects:</h5>
        <h6>Positve:</h6>
        {props.strain.effects.positive.map(flavor => (<ul>{flavor}</ul>) )}
        <h6>Negative:</h6>
        {props.strain.effects.negative.map(flavor => (<ul>{flavor}</ul>) )}
        <h6>Medical:</h6>
        {props.strain.effects.medical.map(flavor => (<ul>{flavor}</ul>) )}
        <img src={leaf}/>
      </div>
    </section>
  )
}