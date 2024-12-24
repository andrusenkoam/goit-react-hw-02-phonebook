import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { BiSolidBookAdd } from 'react-icons/bi';
import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleImputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
      <Form action="submit" onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          value={name}
          required
          onChange={this.handleImputChange}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          id={this.numberInputId}
          type="tel"
          name="number"
          value={number}
          required
          onChange={this.handleImputChange}
        />
        <button>
          <BiSolidBookAdd size={20} />
        </button>
      </Form>
    );
  }
}
