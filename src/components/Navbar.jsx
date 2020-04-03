import React from 'react';
import NavbarElements from './css/Navbar.module.css'


const Navbar = () => {
	return(
	<div>
		<div className = {NavbarElements.item}>News</div>
		<div className = {NavbarElements.item}>Messages</div>
		<div className = {NavbarElements.item}>Friends</div>
		<div className = {NavbarElements.item}>Groups</div>
		<div className = {NavbarElements.item}>Photo</div>
		<div className = {NavbarElements.item}>Music</div>
		<div className = {NavbarElements.item}>Video</div>
		<div className = {NavbarElements.item}>Games</div>
	</div>
		);
}

export default Navbar;