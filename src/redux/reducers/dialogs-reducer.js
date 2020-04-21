const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_AREA = "CHANGE-AREA";

export const dialogsReducer = (store,action) => {
		
		switch (action.type){
			case ADD_MESSAGE: 
					//alert("ADD POST");
					let newMessage = {message: store._state.dialogsPage.newMessage};
					store._state.dialogsPage.messages.push(newMessage);
					store._state.dialogsPage.newMessage = "";
					return store;
			
			case CHANGE_AREA:
					//alert("CHANGE AREA");
					debugger;
					store._state.dialogsPage.newMessage = action.change;
					return store;
			default: 
					return store;
		}
}

export let changeAreaActionCreator = (text) => {return {type:CHANGE_AREA,change:text}};
export let addMessageActionCreator = ()=> {return {type:ADD_MESSAGE}};