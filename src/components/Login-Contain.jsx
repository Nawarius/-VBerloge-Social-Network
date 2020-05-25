import React from 'react';
import LoginForm from './LoginForm'
import {authAC} from '../redux/reducers/auth-reducer.js'
import {connect} from 'react-redux'
import * as axios from 'axios';
import {reduxForm} from 'redux-form'
import {authThunkCreator} from '../redux/reducers/login-reducer.js'


class LoginClassComponent extends React.Component {
	whenSubmit = (data) => {
		this.props.authProcess(data.email, data.password)
	}
	render(){
		return <LoginReduxForm {...this.props} onSubmit = {this.whenSubmit} />
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
		},
		authProcess : (email,password) => {
			dispatch(authThunkCreator(email,password))
		}
	}
}

const LoginReduxForm = reduxForm({
	form:"LoginForm"
})(LoginForm)

const LoginContain = connect(mapToState, mapToDispatch)(LoginClassComponent)

export default LoginContain

//let isAuth;
//		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
//			withCredentials:true
//		}).then(response=>{
//			response.data.resultCode == 0? isAuth = true: isAuth = false;
//			this.props.authMe(response.data.data.id,response.data.data.email,response.data.data.login, isAuth);
//		})