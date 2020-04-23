import React from 'react';
import DialogsElements from './css/Dialogs.module.css'

const Dialogs = (props) => {
	
	let addMessage = () => {
		props.addMessage();
	}
	
	let changeArea = (e) => {
		props.changeArea(e.target.value);
	}
	
	return(
			<div className = {DialogsElements.back}>
				<div>Диалоги</div>
				<div>{props.messageData}</div>
				<textarea  value = {props.changeFromStatesDialogs} onChange = {changeArea} placeholder = "Enter you message"></textarea>
				<div><button onClick = {addMessage} >Add</button></div>
			</div>
		);
}

export default Dialogs