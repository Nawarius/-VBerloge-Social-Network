import React from 'react';
import SearchElements from './css/Search.module.css'
const Search = (props) => {
	
		debugger;
		let users = props.searchPage.users.map((u) => {
		
				let followVariable = u.followed == true? "unfollow":"follow";
				let followFunc = () =>{
					u.followed == true? props.unfollow(u.id): props.follow(u.id);
				}
			    return(
					<div className = {SearchElements.back}>
						<div>
							<div><img className = {SearchElements.item} src = {u.img}  /></div>
							<div className = {SearchElements.name}>{u.firstName} {u.lastName}</div>
							<button onClick = {followFunc}>{followVariable}</button>
						</div>
					<div><textarea className = {SearchElements.text}></textarea></div>
					</div>
                )    					
		}
	)
	
	return(
		<div>
			{users}
		</div>
	);
}

export default Search

