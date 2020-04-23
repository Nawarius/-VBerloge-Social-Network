import React from 'react';
import {changeAreaActionCreator,addPostActionCreator} from '../redux/reducers/posts-reducer.js'
import Profile from './Profile.jsx';
import StoreContext from '../StoreContext.js';

const ProfileContain = (props) => {
	
		return( 
				<StoreContext.Consumer> 
				{ (store) => {
					let changeFromStatesPosts = store.getState().profilePage.newPost;
		
					let addPost = () => {
						store.dispatch(addPostActionCreator());
					}
					
					let changeArea = (text) => {
						store.dispatch(changeAreaActionCreator(text));
					}
					
					return <Profile changeFromStatesPosts = {changeFromStatesPosts} 
					addPost = {addPost} changeArea = {changeArea} posts = {store.getState().profilePage.posts}/>
				}
				}
				</StoreContext.Consumer>
				)
	
			
}

export default ProfileContain