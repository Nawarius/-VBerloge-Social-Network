import React from 'react';
import NavbarElements from './css/Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	return(
	<div className = {NavbarElements.back} >
		<div><NavLink to = "/News" className = {NavbarElements.item}>News</NavLink></div>
		<div><NavLink to = "/Messages" className = {NavbarElements.item}>Messages</NavLink></div>
		<div><NavLink to = "/Friends" className = {NavbarElements.item}>Friends</NavLink></div>
		<div><NavLink to = "/Groups" className = {NavbarElements.item}>Groups</NavLink></div>
		<div><NavLink to = "/Photo" className = {NavbarElements.item}>Photo</NavLink></div>
		<div><NavLink to = "/Music" className = {NavbarElements.item}>Music</NavLink></div>
		<div><NavLink to = "/Video" className = {NavbarElements.item}>Video</NavLink></div>
		<div><NavLink to = "/Games" className = {NavbarElements.item}>Games</NavLink></div>
	</div>
		);
}

export default Navbar;