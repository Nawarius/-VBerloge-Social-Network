import React from 'react';
import SearchElements from './css/Search.module.css'
const Search = () => {
	return(
		<div className = {SearchElements.back}>
                <div>
                    <img className = {SearchElements.item} src = "https://avatarko.ru/img/kartinka/29/medved_28595.jpg"  />
                    <div className = {SearchElements.name}>Приветливый Медведь</div>
                </div>
                <div><textarea className = {SearchElements.text}></textarea></div>
            
                <div>
                    <img className = {SearchElements.item} src = "https://99px.ru/sstorage/1/2016/09/image_11509160032084971512.jpg" />
                    <div className = {SearchElements.name}>Ученый Медведь</div>
                </div>
                <div><textarea className = {SearchElements.text}></textarea></div>
            
                <div>
                     <img className = {SearchElements.item} src = "https://avatarko.ru/img/kartinka/13/panda_nyasha_12855.jpg" />
                    <div className = {SearchElements.name}>Малыш Панда</div>
                </div>
                <div><textarea className = {SearchElements.text}></textarea></div>
            
                

		</div>
	);
}

export default Search

//<div><textarea className = {SearchElements.text}  ></textarea></div>
//                <img className = {SearchElements.item} src = "https://99px.ru/sstorage/1/2016/09/image_11509160032084971512.jpg" />
//                <div><textarea className = {SearchElements.text}></textarea></div>
//                <img className = {SearchElements.item} src = "https://avatarko.ru/img/kartinka/13/panda_nyasha_12855.jpg" />
//                <div><textarea className = {SearchElements.text}></textarea></div>