import React from 'react';
import StoreContext from '../StoreContext.js';
import UserList from './UserList.jsx';
const UserListContain = () => {
	
	return (
		<StoreContext.Consumer>
			{   (store) => {
					let usersData = store.getState().dialogsPage.users;
					return <UserList usersData = {usersData}/> 
				}
			}
		</StoreContext.Consumer>
		)	
}

export default UserListContain