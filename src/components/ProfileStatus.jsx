import React from 'react';
import ProfileElements from './css/Profile.module.css'


class ProfileStatus extends React.Component {
	state = {
		editMode : false,
		status: this.props.status
	}
	activateEditMode(){
		this.setState({
			editMode : true
		})
	}
	deactivateEditMode(){
		this.setState({
			editMode : false
		})
	}
	changeStatus(e){
		this.setState({
			status:e.currentTarget.value
		})
		this.props.updateStatus(e.currentTarget.value)
	}
	
	render(){
		return <div>
				{!this.state.editMode ? 
					<span onClick = {this.activateEditMode.bind(this)}>{this.props.status}</span>
							: 
					<input onChange = {this.changeStatus.bind(this)} value = {this.state.status?this.state.status:this.props.status} autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} type = "text" />}
			</div>
	}
}

export default ProfileStatus