import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    )
  })

  it('should render strains tab', () => {
    const strainsTab = screen.getByRole('link', { name: /strains/i });
    expect(strainsTab).toBeInTheDocument();
  })

  it('should render experiences tab', () => {
    const experiencesTab = screen.getByRole('link', { name: /experiences/i });
    expect(experiencesTab).toBeInTheDocument();
  })

  it('should render loading message', () => {
    const loadingBar = screen.getByRole('heading', { name: /loading strains\.\.\./i })
    expect(loadingBar).toBeInTheDocument();
  })
})