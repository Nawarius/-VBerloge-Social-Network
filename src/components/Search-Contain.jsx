import React from 'react';
import {followAC,unfollowAC} from '../redux/reducers/search-reducer.js'
import Search from './Search.jsx';
import {connect} from 'react-redux'

let mapToState = (state) => {
	return {
		searchPage: state.searchPage
	}
};
let mapToDispatch = (dispatch) => {
	return{
		follow : (userId) => {
			dispatch(followAC(userId));
		},
		unfollow : (userId) => {
			dispatch(unfollowAC(userId));
		}
	}
};
const SearchContain = connect(mapToState,mapToDispatch)(Search);


export default SearchContain