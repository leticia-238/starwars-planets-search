import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import TableFilters from './components/TableFilters';
import FilterList from './components/FilterList';

function App() {
  return (
    <StarWarsProvider>
      <div>
        StarWars Search
        <TableFilters />
        <FilterList />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
