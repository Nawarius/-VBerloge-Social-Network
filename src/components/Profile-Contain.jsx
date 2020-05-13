import React from 'react';
import {changeAreaActionCreator,addPostActionCreator,setUserFromSearchAC} from '../redux/reducers/posts-reducer.js'
import Profile from './Profile.jsx';
import StoreContext from '../StoreContext.js';
import {connect} from 'react-redux'
import * as axios from 'axios';
import Preloader from './Preloader.jsx'
import {withRouter} from 'react-router-dom'
import defaultBear from '../pictures/defaultBear.jpg'

class ProfileClassComponent extends React.Component {
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) userId = 8040;
		axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/${userId}`).then(response=>{
			console.log(this.props);
			let fullName = response.data.fullName;
			let smallPhoto = response.data.photos.small == null?defaultBear:response.data.photos.small;
			let id = response.data.userId;
			this.props.setUserFromSearch(id,smallPhoto,fullName)
		})
	}
	render(){
		return <Profile {...this.props} />
	}
}
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
		},
		setUserFromSearch: (id,smallPhoto,fullName)=>{
			dispatch(setUserFromSearchAC(id,smallPhoto,fullName))
	}
	}
};

let RouterProfile = withRouter(ProfileClassComponent);

const ProfileContain = connect(mapToState,mapToDispatch)(RouterProfile);


export default ProfileContain