import { Component } from 'react';
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    const { name, type, image, averageWeight } = this.props
    return (
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p> { averageWeight.value } { averageWeight.measurementUnit}</p>
        <img src={ image } alt={ name }/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
};


export default Pokemon;