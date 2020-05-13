import React from 'react';
import HeaderElements from './css/Header.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../pictures/AngleBear.jpg'
const Header = () => {
	return(
	<div className = {HeaderElements.logoDiv}>
		<img className = {HeaderElements.logo} src = {logo} />
		<header><NavLink to = "/Profile"><img className = {HeaderElements.mainLogo} src = "https://i.ibb.co/cQWk6QR/logo.jpg" /></NavLink></header>
		<img className = {HeaderElements.logo2} src = {logo} />
	</div>
		);
}

export default Header;