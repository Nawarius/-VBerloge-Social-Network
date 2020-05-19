import React from 'react';
import Login from './Login'
import {authAC} from '../redux/reducers/auth-reducer.js'
import {connect} from 'react-redux'
import * as axios from 'axios';

class LoginClassComponent extends React.Component {
	componentDidMount(){
		let isAuth;
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
			withCredentials:true
		}).then(response=>{
			response.data.resultCode == 0? isAuth = true: isAuth = false;
			this.props.authMe(response.data.data.id,response.data.data.email,response.data.data.login, isAuth);
		})
	}
	render(){
		return <Login {...this.props} />
	}
}

let mapToState = (state) => {
	return{
		id:state.auth.id,
		email:state.auth.email,
		login:state.auth.login,
		isAuth:state.auth.isAuth
	}
}

let mapToDispatch = (dispatch) => {
	return{
		authMe : (id,email,login,isAuth) => {
			dispatch(authAC(id,email,login,isAuth))
		}
	}
}

const LoginContain = connect(mapToState, mapToDispatch)(LoginClassComponent)

export default LoginContain