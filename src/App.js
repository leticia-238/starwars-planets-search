import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import TableFilters from './components/TableFilters';

function App() {
  return (
    <StarWarsProvider>
      <div>
        StarWars Search
        <TableFilters />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
