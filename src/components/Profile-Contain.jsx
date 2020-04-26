import React from 'react';
import {changeAreaActionCreator,addPostActionCreator} from '../redux/reducers/posts-reducer.js'
import Profile from './Profile.jsx';
import StoreContext from '../StoreContext.js';
import {connect} from 'react-redux'

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
		}
	}
};
const ProfileContain = connect(mapToState,mapToDispatch)(Profile);


export default ProfileContain