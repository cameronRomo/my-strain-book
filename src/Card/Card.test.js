import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';
import { MemoryRouter } from 'react-router-dom';

describe('Card', () => {
  it('should render a card', () => {
    const mockedStrain = {
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
      };

    const mockAddFavorite = jest.fn();

    render(
      <MemoryRouter>
        <Card 
          id={1}
          strainName={'Afpack'}
          strain={mockedStrain}
          favoritedStrain={false}
          addFavorite={mockAddFavorite}
        />
      </MemoryRouter>
    );
    const selectedStrainName = screen.getByText('Strain: Afpack');
    const selectedType = screen.queryByText('hybrid');
    const selectedPositiveEffects = screen.queryByText('Positive:');
    const favoriteButton = screen.getByRole('img', { name: /Favorite Strain/i });

    expect(selectedStrainName).toBeInTheDocument();
    expect(selectedType).toBeInTheDocument();
    expect(selectedPositiveEffects).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  })

  it('should be able to add to favorites', () => {
    const mockedStrain = {
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
      }

    const mockAddFavorite = jest.fn();

    render(
      <MemoryRouter>
        <Card 
          id={1}
          strainName={'Afpack'}
          strain={mockedStrain}
          favoritedStrain={false}
          addFavorite={mockAddFavorite}
        />
      </MemoryRouter>
    )

    const favoriteButton = screen.getByRole('img', { name: /Favorite Strain/i });

    fireEvent.click(favoriteButton);

    expect(mockAddFavorite).toHaveBeenCalled();
  })
})