import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from './components/navBar';
import React from 'react';
import RoutePatterns from './Routes.js'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <RoutePatterns />
    </React.Fragment>
  );
}

export default App;
