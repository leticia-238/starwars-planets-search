import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableFilters = () => {
  const { filterByName: { name }, onChangeName } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ ({ target: { value } }) => { onChangeName(value); } }
    />
  );
};

export default TableFilters;
