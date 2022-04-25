import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableFilters = () => {
  const { filterByName: { name }, setPlanetName, filterByNumericValues,
    setNumericFilter, defaultColumns, columns,
    setColumnFilter, setOrder } = useContext(StarWarsContext);

  const [column, setColumn] = useState(columns[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [orderColumn, setOrderColumn] = useState('population');
  const [orderSort, setOrderSort] = useState('ASC');

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
      <label htmlFor="column-sort">
        Column Sort
        <select
          id="column-sort"
          data-testid="column-sort"
          value={ orderColumn }
          onChange={ ({ target }) => setOrderColumn(target.value) }
        >
          {defaultColumns.map((columnName, index) => (
            <option key={ index } value={ columnName }>{columnName}</option>
          ))}
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        <input
          type="radio"
          name="sort"
          id="column-sort-input-asc"
          data-testid="column-sort-input-asc"
          value="ASC"
          checked={ orderSort === 'ASC' }
          onChange={ ({ target }) => { setOrderSort(target.value); } }
        />
        ASC
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          type="radio"
          name="sort"
          id="column-sort-input-desc"
          data-testid="column-sort-input-desc"
          value="DESC"
          checked={ orderSort === 'DESC' }
          onChange={ ({ target }) => { setOrderSort(target.value); } }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => { setOrder({ orderColumn, orderSort }); } }
      >
        Sort Column
      </button>
    </div>
  );
};

export default TableFilters;
