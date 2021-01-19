import React from 'react';
import './Card.css';
import leaf from '../leaf.svg';
import medicalLeaf from '../medicalLeaf.svg';
import PropTypes from 'prop-types';

export const Card = (props) => {
  return (
    <section 
      className='card'
    >
      <div className='strain-container'>
        <h3 className='selected-strain'>Strain: { props.strainName }</h3>
        <h3 className='selected-type'>{props.strain.race}</h3>
        <div className='strain-flavors'>
          <h3>Flavors:</h3>
          {props.strain.flavors.map(flavor => (<p key={flavor}>{flavor}</p>) )}
        </div>
        <h3 className='header-effects'>Effects:</h3>
        <div className='container-effects'>
          <div className='positive-effects'>
            <h3>Positive:</h3>
            {props.strain.effects.positive.map(experience => (<p key={experience}>{experience}</p>)) }    
          </div>
          <div className='negative-effects'>
            <h3>Negative:</h3>
            {props.strain.effects.negative.map(experience => (<p key={experience}>{experience}</p>)) }
          </div>
          <div>
            <h3 className='medical-effects'>Medical:</h3>
            {props.strain.effects.medical.map(experience => (<ul key={experience}>{experience}</ul>) )}
          </div>
        </div>
        {!props.favoritedStrain && 
        <img 
          className='leaf'
          id={props.id}
          aria-label='Favorite Strain' 
          src={leaf} onClick={(event) => props.addFavorite(event)}/>}
        {props.favoritedStrain && 
        <img 
          className='favorite-leaf'
          aria-label='Strain was added to favorites' 
          src={medicalLeaf}/>}
      </div>
    </section>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  strainName: PropTypes.string,
  strain: PropTypes.object,
  favoritedStrain: PropTypes.bool,
  addFavorite: PropTypes.func
}