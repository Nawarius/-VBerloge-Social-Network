import React from 'react';
import preloader from '../pictures/preloader.gif'
import PreloaderElements from "./css/Preloader.module.css"

const Preloader = () => {
	return <img src = {preloader} className = {PreloaderElements.preloader} />
}

export default Preloader