import React from 'react';
import { Input, LabelFilter } from './Filter.slyled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterInput }) => {
  return (
    <div>
      <LabelFilter htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onFilterInput(target.value)}
        />
      </LabelFilter>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterInput: PropTypes.func.isRequired,
};
