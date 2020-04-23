import React from 'react';
import {changeAreaActionCreator,addPostActionCreator} from '../redux/reducers/posts-reducer.js'
import Profile from './Profile.jsx';

const ProfileContain = (props) => {
	
	
	let changeFromStatesPosts = props.state.profilePage.newPost;
	
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	
	let changeArea = (text) => {
		props.dispatch(changeAreaActionCreator(text));
	}
	debugger;
	
	return ( <Profile changeFromStatesPosts = {changeFromStatesPosts} 
			addPost = {addPost} changeArea = {changeArea} posts = {props.state.profilePage.posts}/>
		)
			
}

export default ProfileContain