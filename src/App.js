import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import './App.css';

function App() {
  return (
    <div className = "appWrapper">
      <Header />
	  <Navbar />
	  <Profile />
    </div>
  );
}

export default App;
