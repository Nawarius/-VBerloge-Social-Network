import React from 'react';

const ADD_POST = "ADD-POST";
const CHANGE_AREA = "CHANGE-AREA";

export let store = {
	_state : {
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
	 profilePage : {
			 posts : [
					{post:"My first post from states",likes:10},
					{post:"Im Admin Bear!",likes:20}
				],
			 newPost : ""	
		},
	},
	
	changeAreaActionCreator: (text) => {return {type:CHANGE_AREA,change:text}},
	addPostActionCreator: ()=> {return {type:ADD_POST}},
	
	dispatch(action){
		if(action.type === ADD_POST){
				let newPost = {
					post: store._state.profilePage.newPost,
					likes: 0
				};
				this._state.profilePage.posts.unshift(newPost);
				store._state.profilePage.newPost = "";
				reRenderFromState(this);
		}
		else if (action.type === CHANGE_AREA){
				this._state.profilePage.newPost = action.change;
				reRenderFromState(this);				
		};
	}
};

function reRenderFromState (){
	console.log("Function are not RERENDER");
};

export let subscribe = function(observer){
	reRenderFromState = observer;
};





