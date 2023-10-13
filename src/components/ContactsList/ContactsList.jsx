import React from 'react';
import PropTypes from 'prop-types';
import { Button, Contact, List } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <Contact key={contact.id}>
            <p>{contact.name} : </p>
            <p> {contact.number}</p>
            <Button
              onClick={() => {
                onDelete(contact.id, contact.name);
              }}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
