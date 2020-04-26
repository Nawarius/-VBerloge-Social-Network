import React from 'react';
import Dialogs from './Dialogs.jsx'
import {changeAreaActionCreator,addMessageActionCreator} from '../redux/reducers/dialogs-reducer.js'
import StoreContext from '../StoreContext.js';
import {connect} from 'react-redux'

let mapToState = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};
let mapToDispatch = (dispatch) => {
	return{
		addMessage : () => {
			dispatch(addMessageActionCreator());
		},
					
		changeArea : (text) => {
			dispatch(changeAreaActionCreator(text));
		}
	}
};

const DialogsContain = connect(mapToState,mapToDispatch)(Dialogs);

export default DialogsContain