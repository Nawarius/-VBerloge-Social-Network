import React from 'react';
import Dialogs from './Dialogs.jsx'
import {changeAreaActionCreator,addMessageActionCreator} from '../redux/reducers/dialogs-reducer.js'
import StoreContext from '../StoreContext.js';

const DialogsContain = (props) => {
	return ( 
		<StoreContext.Consumer>
		{ (store) => {
			let messageData = store.getState().dialogsPage.messages.map((el)=>{return <div>{el.message}</div>});
	
			let changeFromStatesDialogs = store.getState().dialogsPage.newMessage;
			
			let addMessage = () => {
				store.dispatch(addMessageActionCreator());
			}
			
			let changeArea = (text) => {
				store.dispatch(changeAreaActionCreator(text));
			}
			
			
			return (<Dialogs addMessage = {addMessage} changeArea = {changeArea} changeFromStatesDialogs = {changeFromStatesDialogs}
					messageData = {messageData} />
					)
			}
		}
		</StoreContext.Consumer>
	)
}

export default DialogsContain