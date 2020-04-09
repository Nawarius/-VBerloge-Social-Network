import React from 'react';
import MessagesElements from './css/Messages.module.css'
import UserList from './UserList.jsx'
import Dialogs from './Dialogs.jsx'
const Messages = (props) => {

	return(
			<div className = {MessagesElements.back}>
				<UserList state = {props.state}  />
				<Dialogs state = {props.state}  />
			</div>
		);
}

export default Messages