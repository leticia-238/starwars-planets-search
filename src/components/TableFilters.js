import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableFilters = () => {
  const { filterByName: { name }, setPlanetName, filterByNumericValues,
    setNumericFilter } = useContext(StarWarsContext);

  const [columns, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [column, setColumn] = useState(columns[0]);
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
          onChange={ ({ target }) => { setPlanetName(target.value); } }
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
          {
            columns.map((columnName, index) => (
              <option key={ index } value={ columnName }>{columnName}</option>
            ))
          }
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
        onClick={ () => {
          setNumericFilter([...filterByNumericValues, { column, comparison, value }]);
          setColumnFilter(columns.filter((columnName) => columnName !== column));
          setColumn(columns[1]);
        } }
      >
        Filter
      </button>
    </div>
  );
};

export default TableFilters;
