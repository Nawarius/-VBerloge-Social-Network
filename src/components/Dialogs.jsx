import React from 'react';
import DialogsElements from './css/Dialogs.module.css'
const Dialogs = (props) => {
	let messageData = props.state.messages.map((el)=>{return <div>{el.message}</div>});
	return(
			<div className = {DialogsElements.back}>
				<div>Диалоги</div>
				<div>{messageData}</div>
			</div>
		);
}

export default Dialogs