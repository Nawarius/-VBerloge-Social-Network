const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_AREA_DIALOGS = "CHANGE-AREA-DIALOGS";

let initialState = {
			
				 messages : [
						{message:"Hey, buddy"},
						{message:"Hi,darling!"},
						{message:"Daddy, your dog eats three"},
						{message:"God bless you"},
						{message:"Do you wanna play a game?"}
					],
				 users : [
						{name : "John", age : 25},
						{name : "Samanta", age : 30},
						{name : "Peter", age : 16},
						{name : "Jesus", age : 33},
						{name : "GrandMa", age : 99}
					],
				 newMessage : ""
		
}

export const dialogsReducer = (state = initialState,action) => {
		
		switch (action.type){
			case ADD_MESSAGE: 
			{
					//alert("ADD POST");
					let newMessage = {message: state.newMessage};
					let stateCopy = {...state};
					stateCopy.messages = [...state.messages];
					stateCopy.messages.push(newMessage);
					stateCopy.newMessage = "";					
					return stateCopy;
			}
			case CHANGE_AREA_DIALOGS:
			{
					//alert("CHANGE AREA DIALOGS");
					let stateCopy = {...state};
					stateCopy.newMessage = action.change;
					return stateCopy;
			}
			default: 
					return state;
		}
}

export let changeAreaActionCreator = (text) => {return {type:CHANGE_AREA_DIALOGS,change:text}};
export let addMessageActionCreator = ()=> {return {type:ADD_MESSAGE}};