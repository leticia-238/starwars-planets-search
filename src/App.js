import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <div>
        StarWars Search
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
