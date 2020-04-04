import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import Rightbar from './components/Rightbar.jsx';
import Messages from './components/Messages.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
	<BrowserRouter>
		<div className = "appWrapper">
		  <Header />
		  <Navbar />
		  <div>
			<Route component = {Profile} path = "/Profile" />
			<Route component = {Messages} path = "/Messages" />
		  </div>
		  <Rightbar />
		</div>
	</BrowserRouter>	
  );
}

export default App;
