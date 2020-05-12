const ADD_POST = "ADD-POST";
const CHANGE_AREA_POSTS = "CHANGE-AREA-POSTS";
const SET_USER_FROM_SEARCH = "SET_USER_FROM_SEARCH"
let initialState = {
	 
			 posts : [
					{post:"My first post from states",likes:10},
					{post:"Im Admin Bear!",likes:20}
				],
			 newPost : "",
			 fullName: '',
			 userId:'',
			 photos:{
				 small:'',
				 large:''
			 }
		
}

export const postsReducer = (state = initialState,action) => {
		
		switch (action.type){
			case ADD_POST:
				{			
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
					let stateCopy = {...state}
					stateCopy.newPost = action.change;
					return stateCopy;
				}
			case SET_USER_FROM_SEARCH:
				{
					let stateCopy = {...state};
					stateCopy.userId = action.id; stateCopy.photos.small = action.smallPhoto; stateCopy.fullName = action.fullName;
					return stateCopy;
			    }
			default: 
					return state;
		}
}

export let changeAreaActionCreator = (text) => {return {type:CHANGE_AREA_POSTS,change:text}};
export let addPostActionCreator = () => {return {type:ADD_POST}};
export let setUserFromSearchAC = (id,smallPhoto,fullName) => {return {type:SET_USER_FROM_SEARCH,id:id,smallPhoto:smallPhoto,fullName:fullName}}