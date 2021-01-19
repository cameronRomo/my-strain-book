import React from 'react';
import './Experiences.css';
import PropTypes from 'prop-types';

export const Experiences = (props) => {
  if (props.experiencesLog.length >= 1) {
    return (
      <section className='experiences'>
        {props.experiencesLog.map(experience => {
          return (
            <div className='experience-container' key={experience.id}>
              <h3 className='strain'>{experience.name}</h3>
              <h3 className='type'>{experience.race}</h3>
              <div className='strain-palate'>
                <h3>Flavors:</h3>
                {experience.flavors.map(flavor => (<p key={flavor}>{flavor}</p>) )}
              </div>
              <h3 className='effects-header'>Effects:</h3>
              <div className='effects-container'>
                <div className='effects-positive'>
                  <h3>Positive:</h3>
                  {experience.effects.positive.map(effect => (<p key={effect}>{effect}</p>) )}
                </div>
                <div className='effects-negative'>
                  <h3>Negative:</h3>
                  {experience.effects.negative.map(effect => (<p key={effect}>{effect}</p>) )}
                </div>
                <div className='effects-medical'>
                  <h3>Medical:</h3>
                  {experience.effects.medical.map(effect => (<p key={effect}>{effect}</p>) )}
                </div>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}

Experiences.propTypes = {
  experiencesLog: PropTypes.array,  
}