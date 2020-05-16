import React from 'react';
import SearchElements from './css/Search.module.css'
import {NavLink} from 'react-router-dom'
import defaultBear from '../pictures/defaultBear.jpg'
import * as axios from 'axios'
import searchAPI from '../api/searchAPI.js'

const Search = (props) => {
	  let pages = [];
	  let pagesCount = Math.ceil(props.totalCount/props.pageListCount);
		  
	  for(let i = 0;i!=pagesCount;i++){
		  pages[i] = i;
	  }
	  let pagesFilter = pages.map((el,index)=>{
		  if (index==0) return ''
		  else return <span className = {props.currentPage == index?SearchElements.currentPage:SearchElements.notCurrentPage} onClick = {() => {props.onPageChanged(el,props)}}>{el + " "}</span>
	  })
	  
	  let users = props.searchPage.users.map((u) => {
		
				let followVariable = u.followed == true? "unfollow":"follow";
			
				let followFunc = () => !u.followed?props.followThunk('followButton',u.id):props.unfollowThunk('followButton',u.id);
				
			    return(
					<div className = {SearchElements.back}>
						<div>
							<NavLink to = {'/profile/'+u.id}><div><img className = {SearchElements.item} 
									src = {u.photos.small==null?defaultBear:u.photos.small}  /></div></NavLink>
							<div className = {SearchElements.name}>{u.name}</div>
							<button id = {"followButton" + u.id} onClick = {followFunc}>{followVariable}</button>
						</div>
					<div><textarea className = {SearchElements.text}></textarea></div>
					</div>
					)    					
				}
			)
    return <div> {pagesFilter} {users}</div>
  }
		

export default Search

