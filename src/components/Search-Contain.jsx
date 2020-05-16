import React from 'react';
import {followAC,unfollowAC,setUsersAC,setTotalAC,setCurrentPageAC,changeFetchingAC,searchThunkCreator,searchThunkFollowCreator,
	   searchThunkUnfollowCreator} from '../redux/reducers/search-reducer.js'
import SearchElements from './css/Search.module.css'
import Search from './Search.jsx';
import {connect} from 'react-redux'
import Preloader from './Preloader.jsx'

class SearchClassComponent extends React.Component {
	
  componentDidMount() {
	 this.props.setUsersThunk(this.props.pageListCount,this.props.currentPage)
  }
  render() {
	  let onPageChanged = (currentPage) => {
		this.props.setUsersThunk(this.props.pageListCount,currentPage)
	  }
	  return this.props.isFetching == true? <Search {...this.props} onPageChanged = {onPageChanged} />:<Preloader />
  }
}

let mapToState = (state) => {
	return {
		searchPage: state.searchPage,
		totalCount: state.searchPage.totalCount,
		pageListCount : 5,
		currentPage:state.searchPage.currentPage,
		isFetching:state.searchPage.isFetching
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
		setCurrentPage: (el,props) => {
			dispatch(setCurrentPageAC(el));
		},
		changeFetching: () =>{
			dispatch(changeFetchingAC())
		},
		setUsersThunk: (pageListCount,currentPage) =>{
			dispatch(searchThunkCreator(pageListCount,currentPage))
		},
		followThunk: (followButton,id) => {
			dispatch(searchThunkFollowCreator(followButton,id));
		},
		unfollowThunk:(followButton,id) => {
			dispatch(searchThunkUnfollowCreator(followButton,id));
		}
	}
};
const SearchContain = connect(mapToState,mapToDispatch)(SearchClassComponent);


export default SearchContain