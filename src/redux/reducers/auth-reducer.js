const SET_USERS = "ADD-SET_USERS";

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth:false
}

export const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USERS: {
			let stateCopy = {
				...state
			};
			stateCopy.id = action.id;
			stateCopy.email = action.email;
			stateCopy.login = action.login;
			stateCopy.isAuth = action.isAuth;
			return stateCopy;
		}
		default:
			return state;
	}
}
			
export let authAC = (id,email,login,isAuth) => {return {type:SET_USERS,id:id,email:email,login:login,isAuth:isAuth}};