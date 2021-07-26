import { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'

class Pokedex extends Component {
  render() {
    return (
      <div className='pokemons'>
        { pokemons.map(({ name, type, averageWeight, image, id }) => (
          <Pokemon key={ id }
            name={ name }
            type={ type }
            averageWeight={ averageWeight }
            image={ image }
          />
        ))}
      </div>
    )
  }
}

export default Pokedex;