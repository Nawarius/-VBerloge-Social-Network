const SET_USERS = "ADD-SET_USERS";

let initialState = {
	id: null,
	email: null,
	login: null
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
			return stateCopy;
		}
		default:
			return state;
	}
}
			
export let authAC = (id,email,login) => {return {type:SET_USERS,id:id,email:email,login:login}};