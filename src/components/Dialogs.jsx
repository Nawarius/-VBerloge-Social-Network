import React from 'react';
import DialogsElements from './css/Dialogs.module.css'
import {changeAreaActionCreator,addMessageActionCreator} from '../redux/reducers/dialogs-reducer.js'

const Dialogs = (props) => {
	let messageData = props.state.dialogsPage.messages.map((el)=>{return <div>{el.message}</div>});
	
	
	let changeFromStates = props.state.dialogsPage.newMessage;
	
	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	
	let changeArea = (e) => {
		let change = e.target.value;
		props.dispatch(changeAreaActionCreator(change));
	}
	
	return(
			<div className = {DialogsElements.back}>
				<div>Диалоги</div>
				<div>{messageData}</div>
				<textarea value = {changeFromStates} onChange = {changeArea} placeholder = "Enter you message"></textarea>
				<div><button onClick = {addMessage} >Add</button></div>
			</div>
		);
}

export default Dialogs