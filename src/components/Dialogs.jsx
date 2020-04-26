import React from 'react';
import DialogsElements from './css/Dialogs.module.css'

const Dialogs = (props) => {
	let messageData = props.dialogsPage.messages.map((el)=>{return <div>{el.message}</div>});
	
	let changeFromStatesDialogs = props.dialogsPage.newMessage;
	
	let addMessage = () => {
		props.addMessage();
	}
	
	let changeArea = (e) => {
		props.changeArea(e.target.value);
	}
	
	return(
			<div className = {DialogsElements.back}>
				<div>Диалоги</div>
				<div>{messageData}</div>
				<textarea  value = {changeFromStatesDialogs} onChange = {changeArea} placeholder = "Enter you message"></textarea>
				<div><button onClick = {addMessage} >Add</button></div>
			</div>
		);
}

export default Dialogs