import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const tableTitles = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const Table = () => {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          {data.length > 0 && tableTitles.map((title, index) => (
            <th key={ index }>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map(({ name, rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod, diameter, climate, gravity, terrain,
          surface_water: surfaceWater, population, films, created, edited, url,
        }, index) => (
          <tr key={ index }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
