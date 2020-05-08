import React from 'react';
import {followAC,unfollowAC,setUsersAC,setTotalAC,setCurrentPageAC} from '../redux/reducers/search-reducer.js'
import SearchClassComponent from './SearchClassComponent.jsx';
import {connect} from 'react-redux'

let mapToState = (state) => {
	return {
		searchPage: state.searchPage,
		totalCount: state.searchPage.totalCount,
		pageListCount : 5,
		currentPage:state.searchPage.currentPage
	}
};
let mapToDispatch = (dispatch) => {
	return{
		follow : (userId) => {
			dispatch(followAC(userId));
		},
		unfollow : (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalCount: (num) => {
			dispatch(setTotalAC(num));
		},
		setCurrentPage: (el) => {
			dispatch(setCurrentPageAC(el));
		}
	}
};
const SearchContain = connect(mapToState,mapToDispatch)(SearchClassComponent);


export default SearchContain