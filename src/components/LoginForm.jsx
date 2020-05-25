import React from 'react';
import {Field} from 'redux-form'
import LoginElements from './css/Login.module.css'

const LoginForm = (props)=>{
	return <div>
		<form className = {LoginElements.form} onSubmit = {props.handleSubmit}>
			<Field placeholder = "Email" name = "email" component = "input" />
			<Field placeholder = "Password" name = "password" component = "input" />
			<div><Field component = "input" name = "remember" type = "checkbox" checked /> Remember me</div>
			<button>Submit</button>
		</form>
	</div>
}

export default LoginForm