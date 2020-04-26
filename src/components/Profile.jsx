import React from 'react';
import ProfileElements from './css/Profile.module.css'
import Posts from './Posts.jsx'


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
				<img className = {ProfileElements.avatar} src = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png"/>
				<div>Медведь Админ</div>
					<div className = {ProfileElements.newPost}>
						<div>
							<img className = {ProfileElements.postsAvatar} src = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png" /> 	
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