import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/starWarsApi';

const defaultColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const StarWarsProvider = ({ children }) => {
  //= =================================================//
  const [data, setPlanetsData] = useState([]);

  const fetchData = async () => {
    const planetsData = await fetchStarWarsPlanets();
    planetsData.sort((previousPlanet, nextPlanet) => (
      previousPlanet.name.localeCompare(nextPlanet.name)
    ));
    setPlanetsData(planetsData);
  };

  useEffect(() => { fetchData(); }, []);
  //= =================================================//
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setPlanetName] = useState('');

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
    if (filterByNumericValues.length > 0) {
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
      });
      setFilteredPlanets(filterResult);
    } else {
      setFilteredPlanets(data);
    }
  }, [data, filterByNumericValues]);

  //= =================================================//
  const [columns, setColumnFilter] = useState(defaultColumns);

  //= =================================================//
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (Object.keys(order).length > 0) {
      const { orderColumn, orderSort } = order;
      const sortResult = [...data].sort((previousPlanet, nextPlanet) => {
        const previousValue = parseFloat(previousPlanet[orderColumn]);
        const nextValue = parseFloat(nextPlanet[orderColumn]);
        if (nextPlanet[orderColumn] === 'unknown') {
          const returnValue = -1;
          return returnValue;
        }
        return orderSort === 'ASC'
          ? previousValue - nextValue
          : nextValue - previousValue;
      });
      setFilteredPlanets(sortResult);
    }
  }, [data, order]);

  const contextValue = {
    data,
    filterByName: { name },
    setPlanetName,
    filteredPlanets,
    setFilteredPlanets,
    filterByNumericValues,
    setNumericFilter,
    defaultColumns,
    columns,
    setColumnFilter,
    order,
    setOrder,
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
