const ADD_POST = "ADD-POST";
const CHANGE_AREA_POSTS = "CHANGE-AREA-POSTS";

let initialState = {
	 
			 posts : [
					{post:"My first post from states",likes:10},
					{post:"Im Admin Bear!",likes:20}
				],
			 newPost : ""	
		
	}

export const postsReducer = (state = initialState,action) => {
		
		switch (action.type){
			case ADD_POST:
				{				//alert("ADD POST");
					let newPost = {
					post: state.newPost,
					likes: 0
					};
					let stateCopy = {...state};
					stateCopy.posts = [...state.posts];
					stateCopy.posts.unshift(newPost);
					stateCopy.newPost = "";
					return stateCopy;
				}
			case CHANGE_AREA_POSTS:
				{
					//alert("CHANGE AREA POSTS" + " " + "state.newPost = " + state.newPost);
					let stateCopy = {...state}
					stateCopy.newPost = action.change;
					return stateCopy;
				}
			default: 
					return state;
		}
}

export let changeAreaActionCreator = (text) => {return {type:CHANGE_AREA_POSTS,change:text}};
export let addPostActionCreator = ()=> {return {type:ADD_POST}};