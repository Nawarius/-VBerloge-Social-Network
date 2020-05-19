import React from 'react'
import Dialogs from './Dialogs.jsx'
import {changeAreaActionCreator,addMessageActionCreator} from '../redux/reducers/dialogs-reducer.js'
import StoreContext from '../StoreContext.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import {withRedirect} from '../HOC/Redirect.jsx'

class DialogsClassComponent extends React.Component {
	render(){
		return <Dialogs {...this.props} />
	}
}

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
const withRedirectDialog = withRedirect(DialogsClassComponent);
export default connect(mapToState,mapToDispatch)(withRedirectDialog);

