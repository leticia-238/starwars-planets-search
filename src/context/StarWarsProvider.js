import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchStarWarsPlanets from '../services/starWarsApi';

const StarWarsProvider = ({ children }) => {
  const [data, setPlanetsData] = useState([]);
  const contextValue = { data, setPlanetsData };

  const fetchData = async () => {
    const planetsData = await fetchStarWarsPlanets();
    setPlanetsData(planetsData);
  };

  useEffect(() => { fetchData(); }, []);

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
