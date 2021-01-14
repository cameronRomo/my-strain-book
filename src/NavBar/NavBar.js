import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav
      value={value}
      onChange={handleChange}
    >
      <button label="strains" component={Link} to="/strains">All Strains</button>
      <button label="My Experiences" component={Link} to="/experiences">My Experiences</button>
    </nav>
  );
}

// export default NavBar;