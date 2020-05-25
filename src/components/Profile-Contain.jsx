import React from 'react';
import {changeAreaAC,addPostAC, profileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator} from '../redux/reducers/posts-reducer.js'
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
		this.props.getStatusThunk(this.props.match.params.userId)
	}
	render(){
		return this.props.isFetching == true? <Profile {...this.props} />:<Preloader />
	}
}
let mapToState = (state) => {
	return {
		profilePage: state.profilePage,
		isFetching:state.profilePage.isFetching
	}
};
let mapToDispatch = (dispatch) => {
	return{
		addPost : () => {
			dispatch(addPostAC())
		},
		changeArea : (text) => {
			dispatch(changeAreaAC(text))
		},
		showUserThunk : (id) => {
			dispatch(profileThunkCreator(id))
		},
		getStatusThunk : (id) => {
			dispatch(getStatusThunkCreator(id))
		},
		updateStatusThunk : (status) => {
			dispatch(updateStatusThunkCreator(status))
		}
	}
};

export default compose(
	connect(mapToState,mapToDispatch),
	withRouter,
	withRedirect
)(ProfileClassComponent)