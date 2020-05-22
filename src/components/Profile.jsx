import React from 'react';
import ProfileElements from './css/Profile.module.css'
import Posts from './Posts.jsx'
import ProfileStatus from './ProfileStatus.jsx'


const Profile = (props) => {
	let changeFromStatesPosts = props.profilePage.newPost;
	let addPost = () => {
		props.addPost()
	}
	
	let changeArea = (e) => {
		props.changeArea(e.target.value);
	}
	
	return(
			<div className = {ProfileElements.profileDiv}>
				<img className = {ProfileElements.avatar} src = {props.profilePage.photos.small}/>
				<div>{props.profilePage.fullName}</div>
				<div><ProfileStatus status = {props.profilePage.status} updateStatus = {props.updateStatusThunk}/></div>
					<div className = {ProfileElements.newPost}>
						<div>
							<img className = {ProfileElements.postsAvatar} src = {props.profilePage.photos.small} /> 	
						</div>
						<div>
							<textarea placeholder = "Enter the post" value = {changeFromStatesPosts} onChange = {changeArea} className = {ProfileElements.textPost} >
							</textarea>
						</div>
						<div>
							<button onClick = {addPost}>Add</button>
						</div>
					</div>
				<div>
					<Posts posts = {props.profilePage.posts} />
				</div>
			</div>
			
		);
}

export default Profile