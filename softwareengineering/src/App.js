import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from './components/navBar';
import React from 'react';
import HomePage from './components/HomePage';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <React.Fragment>
      <NavBar />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
