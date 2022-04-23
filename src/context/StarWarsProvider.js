import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/starWarsApi';

const StarWarsProvider = ({ children }) => {
  //= =================================================//
  const [data, setPlanetsData] = useState([]);

  const fetchData = async () => {
    const planetsData = await fetchStarWarsPlanets();
    setPlanetsData(planetsData);
  };

  useEffect(() => { fetchData(); }, []);
  //= =================================================//

  const [name, setPlanetName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    if (name.trim().length > 0) {
      setFilteredPlanets(data.filter((planet) => (planet.name.includes(name))));
    } else {
      setFilteredPlanets(data);
    }
  }, [data, name]);
  //= =================================================//

  const [filterByNumericValues, setNumericFilter] = useState([]);

  useEffect(() => {
    let filterResult = data;
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;

      filterResult = filterResult.filter((planet) => {
        const num = parseFloat(planet[column]);
        const numValue = parseFloat(value);
        switch (comparison) {
        case 'maior que':
          return num > numValue;
        case 'menor que':
          return num < numValue;
        case 'igual a':
          return num === numValue;
        default:
          return true;
        }
      });
      setFilteredPlanets(filterResult);
    });
  }, [data, filterByNumericValues]);

  //= =================================================//

  const contextValue = {
    data,
    setPlanetsData,
    filterByName: { name },
    setPlanetName,
    filteredPlanets,
    setFilteredPlanets,
    filterByNumericValues,
    setNumericFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StarWarsProvider;
