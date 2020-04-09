import React from 'react';
import ProfileElements from './css/Profile.module.css'
const Profile = () => {
	return(
			<div className = {ProfileElements.profileDiv}>
				<img className = {ProfileElements.avatar} src = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png"/>
				<div>Медведь Админ</div>
				
			</div>
			
		);
}

export default Profile