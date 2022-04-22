import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/starWarsApi';

const StarWarsProvider = ({ children }) => {
  const [data, setPlanetsData] = useState([]);
  const [name, onChangeName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const contextValue = {
    data,
    setPlanetsData,
    filterByName: { name },
    onChangeName,
    filteredPlanets,
    setFilteredPlanets,
  };

  const fetchData = async () => {
    const planetsData = await fetchStarWarsPlanets();
    setPlanetsData(planetsData);
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => {
    if (name.trim().length > 0) {
      setFilteredPlanets(data.filter((planet) => (planet.name.includes(name))));
    } else {
      setFilteredPlanets(data);
    }
  }, [data, name]);

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
