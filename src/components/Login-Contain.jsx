import React from 'react';
import Login from './Login'
import {authAC} from '../redux/reducers/auth-reducer.js'
import {connect} from 'react-redux'
import * as axios from 'axios';

class LoginClassComponent extends React.Component {
	componentDidMount(){
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
			withCredentials:true
		}).then(response=>{
			this.props.authMe(response.data.data.id,response.data.data.email,response.data.data.login);
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
		login:state.auth.login
	}
}

let mapToDispatch = (dispatch) => {
	return{
		authMe : (id,email,login) => {
			dispatch(authAC(id,email,login))
		}
	}
}

const LoginContain = connect(mapToState, mapToDispatch)(LoginClassComponent)

export default LoginContain