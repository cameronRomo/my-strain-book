import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Strains = () => {
  const [strain, setStrain] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const selectedStrain = event.target.value;
    // selectStrain(selectedStrain);
    setStrain(selectedStrain);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <section>
      <label>Choose a Strain
        <select>

        </select>
      </label>
    </section>
  )
}