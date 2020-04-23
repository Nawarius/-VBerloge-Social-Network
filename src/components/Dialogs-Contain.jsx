import React from 'react';
import Dialogs from './Dialogs.jsx'
import {changeAreaActionCreator,addMessageActionCreator} from '../redux/reducers/dialogs-reducer.js'

const DialogsContain = (props) => {
	let messageData = props.state.dialogsPage.messages.map((el)=>{return <div>{el.message}</div>});
	
	let changeFromStatesDialogs = props.state.dialogsPage.newMessage;
	
	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	
	let changeArea = (text) => {
		props.dispatch(changeAreaActionCreator(text));
	}
	
	return ( <Dialogs addMessage = {addMessage} changeArea = {changeArea} changeFromStatesDialogs = {changeFromStatesDialogs}
			messageData = {messageData} />
	)
}

export default DialogsContain