import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const defaultColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const FilterList = () => {
  const { filterByNumericValues, setNumericFilter, columns,
    setColumnFilter } = useContext(StarWarsContext);
  return (
    <div>
      <ul>
        {filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <li>{`${column},${comparison},${value}`}</li>
            <button
              type="button"
              onClick={ () => {
                setNumericFilter(filterByNumericValues.filter((filter) => (
                  filter.column !== column)));
                setColumnFilter([column, ...columns]);
              } }
            >
              X
            </button>
          </div>
        ))}
      </ul>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setNumericFilter([]);
          setColumnFilter(defaultColumns);
        } }
      >
        Remover todas filtragens
      </button>
    </div>
  );
};

export default FilterList;
