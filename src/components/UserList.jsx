import React from 'react';
import UserListElements from './css/Dialogs.module.css'
const UserList = (props) => {
	let usersData = props.dialogsPage.users.map((el)=>{return <div>{el.name}</div>});
	return(
			<div className = {UserListElements.back}>
				<div>Имена</div>
				<div>{usersData}</div>
			</div>
		);
}

export default UserList