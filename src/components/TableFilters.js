import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableFilters = () => {
  const { filterByName: { name }, onChangeName,
    setNumericFilter } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  return (
    <div>
      Planet Name
      <label htmlFor="name-filter">
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target }) => { onChangeName(target.value); } }
        />
      </label>
      <label htmlFor="column-filter">
        Column
        <select
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => { setColumn(target.value); } }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison Filter
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => { setComparison(target.value); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Value Filter
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => { setValue(target.value); } }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setNumericFilter({ column, comparison, value }) }
      >
        Filter
      </button>
    </div>
  );
};

export default TableFilters;
