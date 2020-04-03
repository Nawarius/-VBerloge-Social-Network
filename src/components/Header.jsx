import React from 'react';
import HeaderElements from './css/Header.module.css'
const Header = () => {
	return(
	<div className = {HeaderElements.logoDiv}>
		<img className = {HeaderElements.logo} src = "https://cs7.pikabu.ru/post_img/2018/04/17/10/1523983395118274146.jpg" />
		<header></header>
		<img className = {HeaderElements.logo2} src = "https://cs7.pikabu.ru/post_img/2018/04/17/10/1523983395118274146.jpg" />
	</div>
		);
}

export default Header;