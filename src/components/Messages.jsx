import React from 'react';
import MessagesElements from './css/Messages.module.css'
import UserList from './UserList.jsx'
import DialogsContain from './Dialogs-Contain.jsx'
const Messages = (props) => {

	return(
			<div className = {MessagesElements.back}>
				<UserList state = {props.state} />
				<DialogsContain state = {props.state} dispatch = {props.dispatch} />
			</div>
		);
}

export default Messages