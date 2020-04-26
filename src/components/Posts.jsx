import React from 'react';
import PostsElements from './css/Posts.module.css'
let Posts = (props) => {
	let avaAdress = "https://i.pinimg.com/originals/06/81/63/06816339340605e8797bf5fdd38102d9.png";
	
	let oldPost = props.posts.map(function(el){
		return (
			<div>
				<div><img className = {PostsElements.postsAvatar} src = {avaAdress} /></div>
				<div>{el.post}</div>
				<div>likes {el.likes}</div>
			</div>
			);
		}
	);	
  return (
		<div>
			{oldPost}
		</div>	
  );
}

export default Posts;

