const ADD_POST = "ADD-POST";
const CHANGE_AREA = "CHANGE-AREA";

export const postsReducer = (store,action) => {
		
		switch (action.type){
			case ADD_POST: 
					//alert("ADD POST");
					let newPost = {
					post: store._state.profilePage.newPost,
					likes: 0
					};
					store._state.profilePage.posts.unshift(newPost);
					store._state.profilePage.newPost = "";
					return store;
			
			case CHANGE_AREA:
					//alert("CHANGE AREA");
					debugger;
					store._state.profilePage.newPost = action.change;
					return store;
			default: 
					return store;
		}
}

export let changeAreaActionCreator = (text) => {return {type:CHANGE_AREA,change:text}};
export let addPostActionCreator = ()=> {return {type:ADD_POST}};