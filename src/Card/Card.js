import React from 'react';
import './Card.css';
import leaf from '../leaf.svg';
import medicalLeaf from '../medicalLeaf.svg';
export const Card = (props) => {
  // const [favoritedStrain, setFavorite] = useState(false);
  // const [experiencesLog, setExperiences] = useState([]);

  // const addFavorite = (event) => {
  //   console.log(event.target.id);
  //   console.log(props.strain.id);
  //   if (props.strain.id) {
  //     console.log('yay!');
  //     setFavorite(!favoritedStrain);
  //     setExperiences([...experiencesLog, props.strain]);
  //   } 
  // }

  return (
    <section 
    className='card'
    >
      <div className='strain-container'>
        <h3 className='selected-strain'>Strain: { props.strainName }</h3>
        <h3 className='selected-type'>{props.strain.race}</h3>
        <div className='strain-flavors'>
          <h3>Flavors:</h3>
          {props.strain.flavors.map(flavor => (<p>{flavor}</p>) )}
        </div>
        <h3 className='header-effects'>Effects:</h3>
        <div className='container-effects'>
          <div className='positive-effects'>
            <h3>Positive:</h3>
            {props.strain.effects.positive.map(flavor => (<p>{flavor}</p>)) }    
          </div>
          <div className='negative-effects'>
            <h3>Negative:</h3>
            {props.strain.effects.negative.map(flavor => (<p>{flavor}</p>)) }
          </div>
          <div>
            <h3 className='medical-effects'>Medical:</h3>
            {props.strain.effects.medical.map(flavor => (<ul>{flavor}</ul>) )}
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