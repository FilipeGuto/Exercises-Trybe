import React from 'react';
import './about.css';

const About = () => (
  <section>
    <h2> About Pokédex </h2>
    <section>
      <p> This application simulates a Pokédex, a digital encliclopedia containing all Pokémons </p>
      <p> One can filter Pokémons by type, and see more details for each one of them </p>
      <img
        className="pokedex-image"
        src="https://www.seekpng.com/ima/u2w7r5w7o0y3e6w7/"
        alt="Pokédex"
      />
    </section>
  </section>
);

export default About;
