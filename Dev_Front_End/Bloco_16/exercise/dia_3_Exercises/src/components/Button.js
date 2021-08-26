import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onCLick } = this.props;
    return (
      <button type="button" onClick={ onCLick }>
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onCLick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
