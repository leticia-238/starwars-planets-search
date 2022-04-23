import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterList = () => {
  const { filterByNumericValues } = useContext(StarWarsContext);
  return (
    <ul>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <li key={ index }>{`${column},${comparison},${value}`}</li>
      ))}
    </ul>
  );
};

export default FilterList;
