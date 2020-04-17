import React from 'react';
let store = {
	state = {
	 messages : [
			{message:"Hey, buddy"},
			{message:"Hi,darling!"},
			{message:"Daddy, your dog eats three"},
			{message:"God bless you"},
			{message:"Do you wanna play a game?"}
		],
	 users : [
			{name : "John", age : 25},
			{name : "Samanta", age : 30},
			{name : "Peter", age : 16},
			{name : "Jesus", age : 33},
			{name : "GrandMa", age : 99}
		],
	 reRenderFromState : function (render){
		 this.reRenderFromState = render;
	 },
	 profilePosts : {
			posts : [
				{post:"My first post from states",likes:10},
				{post:"Im Admin Bear!",likes:20}
			],
			addPost : function (newPost){
				this.posts.unshift(newPost);
				state.reRenderFromState(state);
			},
			changeArea : function(change){
				let text = change;
				state.reRenderFromState(state);
				return text;
			}
		}
	}
}

export default store




