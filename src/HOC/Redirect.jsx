import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		isAuth:state.loginPage.isAuth
	}
}
export const withRedirect = (Component) => {
	class withRedirectClassComponent extends React.Component {
		render(){
			return this.props.isAuth? <Component {...this.props} /> : <Redirect to = "/Login" />
		}
	}
	const connectedClassComponent = connect(mapStateToProps)(withRedirectClassComponent)
	return connectedClassComponent
}