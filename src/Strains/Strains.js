import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { strainsData } from '../strain-data';
import { Card } from '../Card/Card';

export const Strains = () => {
  const [strain, setStrain] = useState('');
  const [strainName, setStrainName] = useState('');

  const selectedStrain = (event) => {
    const selectedStrain = event.target.value;
    const matchedStrain = strainsData[selectedStrain]
    setStrain(matchedStrain);
    setStrainName(selectedStrain);
  };
  
  const strainsArray = Object.keys(strainsData);

  return (
    <section>
      <label>Choose a Strain</label>
      <select onChange={ selectedStrain }>
        <option value=''>Choose a Medicine</option>
        {strainsArray.map(strain => {
          return <option value={ strain }>{ strain }</option>})
        }
      </select>
      {strain && <Card strainName={strainName} strain={strain}/>}
    </section>
  )
}