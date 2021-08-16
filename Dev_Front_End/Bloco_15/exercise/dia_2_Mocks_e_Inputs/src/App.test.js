import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('renders App elements: input, button e header', async () => {
    const { getByText, getByRole } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();

    const searchInput = getByRole('textbox');
    expect(searchInput).toBeInTheDocument();

    const searchButton = getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  const digimonMock = [{
    name: "Agumon",
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
  }];

  it('funcionamento do fetch', async () => {
    const { getByRole, findByRole } = render(<App />);

    global.fetch = jest.fn(function() {
      return Promise.resolve({
        json: () => Promise.resolve(digimonMock),
      })
    });

    const searchInput = getByRole('textbox');
    userEvent.type(searchInput, 'agumon');

    const searchButton = getByRole('button');
    userEvent.click(searchButton);

    const agumonText = await findByRole('heading', {
      level: 2,
      name: 'Agumon',
    })

    expect(agumonText).toBeInTheDocument();

  })
});