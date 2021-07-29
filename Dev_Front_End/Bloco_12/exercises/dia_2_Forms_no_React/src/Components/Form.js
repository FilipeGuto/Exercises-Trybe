import React from 'react';

class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residencia: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });

  }

  render() {
    const { name, email, cpf, address, city, state } = this.state;
    return (
      <form>
        <fieldset>
          <div>
            <label htmlFor="name">
              Name:
              <input value={name} onChange={this.handleChange} type="text" name="name" id="name" maxLength="40" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input value={email} onChange={this.handleChange} type="email" name="email" id="email" maxLength="50" />
            </label>
          </div>
          <div>
            <label htmlFor="cpf">
              CPF:
              <input value={cpf} onChange={this.handleChange} type="text" name="cpf" id="cpf" maxLength="11" />
            </label>
          </div>
          <div>
            <label htmlFor='adress'>
              Adress:
              <textarea value={address} onChange={this.handleChange}name='adress' id='adress' maxLength='200'>
              </textarea>
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input value={city} onChange={this.handleChange}type="text" name="city" id="city" maxLength="28" />
            </label>
          </div>
          <div>
            <label htmlFor='state'>Estado:
              <select value={state} onChange={this.handleChange}name='state' id='state'>
                <option></option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="AM">AM</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Residência:
              <label htmlFor="casa">
                <input value={'casa'} onChange={this.handleChange}type="radio" name="residencia" id="casa" />
                Casa
              </label>
              <label htmlFor="apartamento">
                <input onChange={this.handleChange} type="radio" name="residencia" id="apartamento" value='apartamento'/>
                Apartamento
              </label>
            </label>
          </div>
        </fieldset>
      </form>
    );
  }

}

export default Form;

