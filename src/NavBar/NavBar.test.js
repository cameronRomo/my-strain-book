import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavBar } from './NavBar';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

describe('NavBar', () => {  
  it('should route to strains page', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <NavBar />
      </Router>
    );
    const strainTab = screen.getByRole('link', { name: /Strains/i });
    
    fireEvent.click(strainTab);

    await waitFor(() => expect(history.location.pathname).toBe('/strains'));
  })

  it('should route to experiences page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <NavBar />
      </Router>
    );
    const experiencesTab = screen.getByRole('link', { name: /Experiences/i });
    
    fireEvent.click(experiencesTab);

    expect(history.location.pathname).toBe('/experiences');
  })
})