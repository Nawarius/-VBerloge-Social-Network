import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ProfileContain from './components/Profile-Contain.jsx';
import Rightbar from './components/Rightbar.jsx';
import Messages from './components/Messages.jsx';
import Search from './components/Search.jsx';
import {Route} from 'react-router-dom';
import './App.css';

function App(props) {

  return (
		<div className = "appWrapper">
		  <Header />
		  <Navbar />
		  <div>
			<Route render = {()=> <ProfileContain />} path = "/Profile" />
			<Route render = {()=> <Messages />} path = "/Messages" />
			<Route render = {()=> <Search />} path = "/Search" />
		  </div>
		  <Rightbar />
		</div>
  );
}

export default App;
