import React from 'react';
import SearchElements from './css/Search.module.css'

const Search = (props) => {
	  //debugger;
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
			
				let followFunc = () =>{
					u.followed == true? props.unfollow(u.id): props.follow(u.id);
				}
			    return(
					<div className = {SearchElements.back}>
						<div>
							<div><img className = {SearchElements.item} src = {u.photos.small==null?`https://png.pngtree.com/png-clipart/20190920/original/pngtree-cartoon-brown-bear-avatar-free-illustration-png-image_4617465.jpg`:u.photos.small}  /></div>
							<div className = {SearchElements.name}>{u.name}</div>
							<button onClick = {followFunc}>{followVariable}</button>
						</div>
					<div><textarea className = {SearchElements.text}></textarea></div>
					</div>
					)    					
				}
			)
    return <div> {pagesFilter} {users}</div>
  }
		

export default Search

