//import React from 'react';
//import SearchElements from './css/Search.module.css'
//import * as axios from 'axios';
//const Search = (props) => {
//	if (props.searchPage.users.length == 0){
//		let promise = axios.get(`https://social-network.samuraijs.com/api/1.0/users`);
//		promise.then(responce=>{
//			props.setUsers(responce.data.items);
//		})
//																			
//	}
//		
//		let users = props.searchPage.users.map((u) => {
//		
//				let followVariable = u.followed == true? "unfollow":"follow";
//			
//				let followFunc = () =>{
//					u.followed == true? props.unfollow(u.id): props.follow(u.id);
//				}
//			    return(
//					<div className = {SearchElements.back}>
//						<div>
//							<div><img className = {SearchElements.item} src = {u.photos.small==null?`https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-brown-bear-avatar-free-illustration-png-image_4617465.jpg`:u.photos.small}  /></div>
//							<div className = {SearchElements.name}>{u.name}</div>
//							<button onClick = {followFunc}>{followVariable}</button>
//						</div>
//					<div><textarea className = {SearchElements.text}></textarea></div>
//					</div>
//                )    					
//		}
//	)
//	
//	return(
//		<div>
//			{users}
//		</div>
//	);
//}
//
//export default Search

