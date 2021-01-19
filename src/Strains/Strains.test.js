import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Strains } from './Strains';
import { MemoryRouter } from 'react-router-dom';
import { fetchedStrainsData } from '../apiCalls';
jest.mock('../apiCalls');

describe('Strains', () => {
  beforeEach(() => {
    fetchedStrainsData.mockResolvedValue(
      {
        "Afpak": {
          "id": 1,
          "race": "hybrid",
          "flavors": [
            "Earthy",
            "Chemical",
            "Pine"
          ],
          "effects": {
            "positive": [
              "Relaxed",
              "Hungry",
              "Happy",
              "Sleepy"
            ],
            "negative": [
              "Dizzy"
            ],
            "medical": [
              "Depression",
              "Insomnia",
              "Pain",
              "Stress",
              "Lack Of Appetite"
            ]
          }
        },
        "African": {
          "id": 2,
          "race": "sativa",
          "flavors": [
            "Spicy/Herbal",
            "Pungent",
            "Earthy"
          ],
          "effects": {
            "positive": [
              "Euphoric",
              "Happy",
              "Creative",
              "Energetic",
              "Talkative"
            ],
            "negative": [
              "Dry Mouth"
            ],
            "medical": [
              "Depression",
              "Pain",
              "Stress",
              "Lack Of Appetite",
              "Nausea",
              "Headache"
            ]
          }
        }
      })
    render(
      <MemoryRouter>
        <Strains/>
      </MemoryRouter>
    )
  })

  it('should render a welcome message', async () => {
    await waitFor(() => expect(screen.getByText('Begin by choosing a strain')).toBeInTheDocument());
  });
  
  it('should render a dropdown bar', async () => {
    await waitFor(() => expect(screen.getByRole('combobox')).toBeInTheDocument());
  });

  it('should open dropdown on click', async () => {
    const dropDown = await waitFor(() => screen.getByRole('combobox'));
    
    fireEvent.change(dropDown, {target: {value: "Afpak"}});

    expect(dropDown.value).toBe("Afpak");
  })
})