import React from 'react';
import MessagesElements from './css/Messages.module.css'
import UserListContain from './UserList-Contain.jsx'
import DialogsContain from './Dialogs-Contain.jsx'
const Messages = (props) => {

	return(
			<div className = {MessagesElements.back}>
				<UserListContain />
				<DialogsContain />
			</div>
		);
}

export default Messages