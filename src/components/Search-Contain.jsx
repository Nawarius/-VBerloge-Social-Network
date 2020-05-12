import React from 'react';
import {followAC,unfollowAC,setUsersAC,setTotalAC,setCurrentPageAC,changeFetchingAC} from '../redux/reducers/search-reducer.js'
import SearchElements from './css/Search.module.css'
import Search from './Search.jsx';
import {connect} from 'react-redux'
import * as axios from 'axios';
import Preloader from './Preloader.jsx'

class SearchClassComponent extends React.Component {
	
  componentDidMount() {
  	  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageListCount}&page=${this.props.currentPage}`)
		.then(responce => {
		 // debugger;
		  	this.props.changeFetching();
  			this.props.setUsers(responce.data.items);
  	})
  }
  componentWillUnmount(){
	  this.props.changeFetching()
  }

  render() {
	  let onPageChanged = (el) => {
		this.props.changeFetching();
	  	this.props.setCurrentPage(el);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageListCount}&page=${el}`)
				.then(responce => {
					this.props.changeFetching();
					this.props.setUsers(responce.data.items);
	  		})
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
		}
	}
};
const SearchContain = connect(mapToState,mapToDispatch)(SearchClassComponent);


export default SearchContain