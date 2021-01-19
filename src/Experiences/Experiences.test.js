import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Experiences } from './Experiences';
import { MemoryRouter } from 'react-router-dom';

describe('Experiences', () => {
  it('should render a favorite card', () => {
    const mockedFavorite = [{
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
      }];

    render(
      <MemoryRouter>
        <Experiences 
          experiencesLog={mockedFavorite}
        />
      </MemoryRouter>
    );

    const favoritedType = screen.queryByText('hybrid');
    const singleFavoritedPositiveEffect = screen.queryByText('Relaxed');
    const aMedicalEffect = screen.queryByText('Insomnia');

    expect(favoritedType).toBeInTheDocument();
    expect(singleFavoritedPositiveEffect).toBeInTheDocument();
    expect(aMedicalEffect).toBeInTheDocument();
  })
})
