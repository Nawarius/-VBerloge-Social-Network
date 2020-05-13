import React from 'react';
import RightbarElements from './css/Rightbar.module.css'
import {NavLink} from 'react-router-dom'

const Rightbar = () => {
	return(
		<div className = {RightbarElements.back}>
			<div>
				<div><NavLink to = "/Search" className = {RightbarElements.item}>Search</NavLink></div>
				<div><NavLink to = "/Login" className = {RightbarElements.item}>Login</NavLink></div>

			</div>

		</div>
	);
}

export default Rightbar
