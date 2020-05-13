import React from 'react';
import HeaderClassComponent from './components/Header-Contain.jsx';
import Navbar from './components/Navbar.jsx';
import LoginContain from './components/Login-Contain.jsx';
import ProfileContain from './components/Profile-Contain.jsx';
import SearchContain from './components/Search-Contain.jsx';
import Rightbar from './components/Rightbar.jsx';
import Messages from './components/Messages.jsx';
import Search from './components/Search.jsx';
import {Route} from 'react-router-dom';
import './App.css';

function App(props) {

  return (
		<div className = "appWrapper">
		  <HeaderClassComponent />
		  <Navbar />
		  <div>
	  		<Route render = {()=> <LoginContain />} path = "/Login" />
			<Route render = {()=> <ProfileContain />} path = "/Profile/:userId?" />
			<Route render = {()=> <Messages />} path = "/Messages" />
			<Route render = {()=> <SearchContain />} path = "/Search" />
		  </div>
		  <Rightbar />
		</div>
  );
}

export default App;
