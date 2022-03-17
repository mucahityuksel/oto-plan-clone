import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import Pages from './Pages';


import RouteComponent from './route';


const App: React.FC = () => {

  return (

    <div className="App">
      <RouteComponent />

    </div>

  );
}

export default App;
