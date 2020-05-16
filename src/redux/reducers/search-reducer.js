import searchAPI from '../../api/searchAPI.js'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL = "SET_TOTAL"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const CHANGE_FETCHING = "CHANGE_FETCHING"

let initialState = {users:[],totalCount:50,currentPage:1,isFetching:false}

export const searchReducer = (state = initialState,action) => {
		
		switch (action.type){
			case FOLLOW:
				{		
					let stateCopy = {
						...state,
						users: state.users.map(el=>{
							if (el.id === action.id){
								return {...el, followed:true}
							} 
							return el;
						})
					}
					return stateCopy;
				}
			case UNFOLLOW:
				{
					let stateCopy = {
						...state,
						users: state.users.map(el=>{
							if (el.id === action.id){
								return {...el,followed:false}
							} 
							return el;
						})
					}
					return stateCopy;
				}
			case SET_USERS:{
					let stateCopy = {...state};
					stateCopy.users = [...action.users];
					return stateCopy;
				}
			case SET_TOTAL:{
					let stateCopy = {...state};
					stateCopy.totalCount = action.num;
					return stateCopy;
			}
			case SET_CURRENT_PAGE:{
					let stateCopy = {...state};
					stateCopy.currentPage = action.el;
					return stateCopy;
			}
			case CHANGE_FETCHING:{
					let stateCopy = {...state};
					stateCopy.isFetching = action.change;
					return stateCopy;
			}
			default: 
					return state;
		}
}

export let followAC = (userId) => {return {type:FOLLOW,id:userId}};
export let unfollowAC = (userId)=> {return {type:UNFOLLOW,id:userId}};
export let setUsersAC = (users)=> {return {type:SET_USERS,users:users}};
export let setTotalAC = (num)=> {return {type:SET_TOTAL,num:num}};
export let setCurrentPageAC = (el)=>{return {type:SET_CURRENT_PAGE,el:el}};
export let changeFetchingAC = (change) => {return {type:CHANGE_FETCHING,change:change}};


export const searchThunkCreator = (pageListCount,currentPage) => {
return (dispatch) => {
	  dispatch(changeFetchingAC(false));
	  searchAPI.setUsers(pageListCount,currentPage)
		.then(responce => {
		  	dispatch(changeFetchingAC(true));
		  	dispatch(setCurrentPageAC(currentPage))
  			dispatch(setUsersAC(responce.data.items));
  		})
	}	
}
export const searchThunkFollowCreator = (followButton, id) => {
	return (dispatch) => {
		document.getElementById(followButton+id).setAttribute('disabled', 'true');
		searchAPI.followUsers(id).then(response => {
			document.getElementById(followButton+''+id).removeAttribute('disabled');
			dispatch(followAC(id));
		})
	}
}
export const searchThunkUnfollowCreator = (followButton, id) => {
	return (dispatch) => {
		document.getElementById(followButton+id).setAttribute('disabled', 'true');
		searchAPI.followUsers(id).then(response => {
			document.getElementById(followButton+''+id).removeAttribute('disabled');
			dispatch(unfollowAC(id));
		})
	}
}
	







