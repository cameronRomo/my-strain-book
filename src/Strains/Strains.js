import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'; // will need in future 
import { fetchedStrainsData } from '../apiCalls';
import { strainsData } from '../strain-data';
import { Card } from '../Card/Card';
const myKey = process.env.REACT_APP_API_KEY;

export const Strains = () => {
  const [strain, setStrain] = useState('');
  const [strainName, setStrainName] = useState('');
  const [allStrains, setAllStrains] = useState({});
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
  };
  
  const strainsArray = Object.keys(allStrains);

  const strainsInput = () => {
    if (!Object.keys(allStrains).length) {
      return (
        <h2>Loading Strains...</h2>
      )
    } else {
      return (
      <select 
        onChange={ selectedStrain }>
          <option value=''>Choose a Medicine</option>
          {strainsArray.map(strain => {
            return <option value={ strain }>{ strain }</option>})
          }
      </select>
      )
    }
  }

  return (
    <section>
      {strainsInput()}
      {strain && <Card strainName={strainName} strain={strain}/>}
    </section>
  )
}