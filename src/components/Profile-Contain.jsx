import React from 'react';
import {changeAreaActionCreator,addPostActionCreator,setUserFromSearchAC, profileThunkCreator} from '../redux/reducers/posts-reducer.js'
import Profile from './Profile.jsx';
import StoreContext from '../StoreContext.js';
import {connect} from 'react-redux'
import * as axios from 'axios';
import Preloader from './Preloader.jsx'
import {withRouter} from 'react-router-dom'
import defaultBear from '../pictures/defaultBear.jpg'
import {profileAPI} from '../api/API.js'
import {compose} from 'redux'
import {withRedirect} from '../HOC/Redirect.jsx'

class ProfileClassComponent extends React.Component {
	componentDidMount(){
		this.props.showUserThunk(this.props.match.params.userId)
	}
	render(){
		return <Profile {...this.props} />
	}
}
let mapToState = (state) => {
	return {
		profilePage: state.profilePage
	}
};
let mapToDispatch = (dispatch) => {
	return{
		addPost : () => {
			dispatch(addPostActionCreator());
		},
		changeArea : (text) => {
			dispatch(changeAreaActionCreator(text));
		},
		showUserThunk : (id) => {
			dispatch(profileThunkCreator(id))
		}
	}
};

export default compose(
	connect(mapToState,mapToDispatch),
	withRouter,
	withRedirect
)(ProfileClassComponent)