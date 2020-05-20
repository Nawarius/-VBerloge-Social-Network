import React from 'react';
import ProfileElements from './css/Profile.module.css'


class ProfileStatus extends React.Component {
	state = {
		editMode : false
	}
	activateEditMode(){
		this.setState({
			editMode : true
		})
	}
	deactivateEditMode(){
		debugger;
		this.setState({
			editMode:false
		})
	}
	render(){
		return <div>
				{!this.state.editMode ? 
					<span onClick = {this.activateEditMode.bind(this)}>Status</span>
							: 
					<input autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} type = "text" />}
			</div>
	}
}

export default ProfileStatus