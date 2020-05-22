import defaultBear from '../../pictures/defaultBear.jpg'
import {profileAPI} from '../../api/API.js'

const UPDATE_STATUS = "UPDATE_STATUS"
const GET_STATUS = "GET_STATUS"
const ADD_POST = "ADD-POST"
const CHANGE_AREA_POSTS = "CHANGE-AREA-POSTS"
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
			 },
			status:""
		
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
			case GET_STATUS:{
					let stateCopy = {...state};
					stateCopy.status = action.status;
					return stateCopy;
				}
			case UPDATE_STATUS:{
					let stateCopy = {...state};
					stateCopy.status = action.status;
					return stateCopy;
				}
			default: 
					return state;
		}
}

export let changeAreaAC = (text) => {return {type:CHANGE_AREA_POSTS,change:text}};
export let addPostAC = () => {return {type:ADD_POST}};
export let setUserFromSearchAC = (id,smallPhoto,fullName) => {return {type:SET_USER_FROM_SEARCH,id:id,smallPhoto:smallPhoto,fullName:fullName}}
export let getStatusAC = (status) => {return {type:GET_STATUS, status:status}};
export let updateStatusAC = (status) => {return {type:UPDATE_STATUS, status:status}};


export const profileThunkCreator = (id) => {
return (dispatch) => {
		profileAPI.showUser(id).then(response=>{
			let fullName = response.data.fullName;
			let smallPhoto = response.data.photos.small == null?defaultBear:response.data.photos.small;
			let id = response.data.userId;
			dispatch(setUserFromSearchAC(id,smallPhoto,fullName))
  		})
	}	
}

export const getStatusThunkCreator = (id) => {
return (dispatch) => {
		profileAPI.getStatus(id).then(response=>{
			let text = response.data?response.data:"===="
			dispatch(getStatusAC(text))
  		})
	}	
}
export const updateStatusThunkCreator = (status) => {
return (dispatch) => {
		profileAPI.updateStatus(status).then(response=>{
			dispatch(getStatusAC(status))
  		})
	}	
}

















