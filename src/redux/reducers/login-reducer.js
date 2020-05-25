import {authAPI} from '../../api/API.js'

const GET_USER = "GET_USER";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth:false,
	password:null
}

export const loginReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_USER: {
			let stateCopy = {...state}
			stateCopy.email = action.email; stateCopy.password = action.password;stateCopy.isAuth = true;
			return stateCopy
		}
		default:
			return state;
	}
}
			
export let authAC = (email,password) => {return {type:GET_USER,email:email,password:password}};

export const authThunkCreator = (email,password) => {
return (dispatch) => {
		authAPI.authUser(email,password).then(response=>{
			response.data.resultCode == 0? dispatch(authAC(email,password)) : alert(response.data.messages[0]);
			
  		})
	}	
}