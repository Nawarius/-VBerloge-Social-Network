import React from 'react';
import SearchElements from './css/Search.module.css'
import * as axios from 'axios';

class SearchClassComponent extends React.Component {
	
  constructor(props){
	  super(props)
  }
  componentDidMount() {
  	axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageListCount}&page=${this.props.currentPage}`).then(responce => {
  		this.props.setUsers(responce.data.items);
		//this.props.setTotalCount(responce.data.totalCount);
  	})
  }
//  componentDidUpdate(){
//	  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageListCount}&page=${this.props.currentPage}`).then(responce => {
//  		this.props.setUsers(responce.data.items);
//		//this.props.setTotalCount(responce.data.totalCount);
//  	})
//  }
  onPageChanged(el){
	  this.props.setCurrentPage(el);
	  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageListCount}&page=${el}`).then(responce => {
  		this.props.setUsers(responce.data.items);
		//this.props.setTotalCount(responce.data.totalCount);
		//alert(this.props.currentPage)
  	})
  }

  render() {
	  //alert(this.props.currentPage)
	  let pages = [];
	  let pagesCount = Math.ceil(this.props.totalCount/this.props.pageListCount);
		  
	  for(let i = 0;i!=pagesCount;i++){
		  pages[i] = i;
	  }
	  let pagesFilter = pages.map((el,index)=>{
		  if (index==0) return ''
		  else return <span onClick = {() => {this.onPageChanged(el)}}>{el}</span>
	  })
	  
	  let users = this.props.searchPage.users.map((u) => {
		
				let followVariable = u.followed == true? "unfollow":"follow";
			
				let followFunc = () =>{
					u.followed == true? this.props.unfollow(u.id): this.props.follow(u.id);
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
    return <div>{pagesFilter}{users}</div>;
  }
}
		

export default SearchClassComponent

