import React from 'react';
import ProfileElements from './css/Profile.module.css'
import Posts from './Posts.jsx'
const Profile = (props) => {
	
	let newPost = React.createRef();
	let changeFromStates = props.store._state.profilePage.newPost;
	
	let addPost = () => {
		props.store.dispatch(props.store.addPostActionCreator());
	}
	
	
	let changeArea = (e) => {
		let change = newPost.current.value;
		props.store.dispatch(props.store.changeAreaActionCreator(change));
	}
	
	return(
			<div className = {ProfileElements.profileDiv}>
				<img className = {ProfileElements.avatar} src = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png"/>
				<div>Медведь Админ</div>
					<div className = {ProfileElements.newPost}>
						<div>
							<img className = {ProfileElements.postsAvatar} src = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png" /> 	
						</div>
						<div>
							<textarea placeholder = "Enter the post" value = {changeFromStates} onChange = {changeArea} className = {ProfileElements.textPost} ref = {newPost} >
							</textarea>
						</div>
						<div>
							<button onClick = {addPost}>Add</button>
						</div>
					</div>
				<div>
					<Posts posts = {props.store._state.profilePage.posts} />
				</div>
			</div>
			
		);
}

export default Profile