import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchedStrainsData } from '../apiCalls';
import { Card } from '../Card/Card';
import './Strains.css'
const myKey = process.env.REACT_APP_API_KEY;

export const Strains = (props) => {
  const [strain, setStrain] = useState('');
  const [strainName, setStrainName] = useState('');
  const [allStrains, setAllStrains] = useState({});
  const [favoritedStrain, setFavorite] = useState(false);

  useEffect(() => {
    getAllStrains()
  }, [])

  const getAllStrains = async () => {
    await fetchedStrainsData(myKey)
    .then(data => setAllStrains(data))
    .catch(err => console.log(err))
  };

  const selectedStrain = (event) => {
    const selectedStrain = event.target.value;
    const matchedStrain = allStrains[selectedStrain]
    setStrain(matchedStrain);
    setStrainName(selectedStrain);
    setFavorite(false);
  };

  const addFavorite = (event) => {
    if (Number(strain.id) === Number(event.target.id)) {
      console.log('yay!');
      strain.name = strainName
      // experiencesLog.map(experience => experience.name = strainName)  
      setFavorite(true);
      props.setExperiences([...props.experiencesLog, strain]);
      // setExperiencedStrain(strainName)
    } 
  }
  
  const strainsArray = Object.keys(allStrains);

  const strainsInput = () => {
    if (!Object.keys(allStrains).length) {
      return (
        <h2>Loading Strains...</h2>
      )
    } else {
      return (
        <div className='dropdown-container'>
          <h1 className='welcome-message'>Begin by choosing a strain</h1>
          <div className='select'>
            <select 
              className='dropdown-menu'
              onChange={ selectedStrain }>
                <option value=''>Strains</option>
                {strainsArray.map(strain => {
                  return <option key={allStrains[strain].id} value={ strain }>{ strain }</option>})
                }
            </select>
            <span className="focus"></span>
          </div>
        </div>
      )
    }
  }

  return (
    <section>
      {strainsInput()}
      {strain && <Card id={strain.id} strainName={strainName} strain={strain} favoritedStrain={favoritedStrain} addFavorite={addFavorite}/>}
    </section>
  )
}

Strains.propTypes = {
  setExperiences: PropTypes.func,
  experiencesLog: PropTypes.array,
}