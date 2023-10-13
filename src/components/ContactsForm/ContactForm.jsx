import React from 'react';
import { Button, Form, Input } from './ContactForm.styled'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends React.Component {
  state = { name: '', number: '' };

  // вводимо в інпут
  handleAddInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //додаємо до списку
  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState({ name: '', number: '' });
    this.props.newContact(newContact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">
          Name
          <Input
            value={name}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleAddInput}
            placeholder="Name Surname"
          />
        </label>
        <label htmlFor="name">
          Number
          <Input
            value={number}
            id="name"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleAddInput}
            placeholder="Phone Number"
          />
        </label>
        <Button>Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  newContact: PropTypes.func.isRequired,
};