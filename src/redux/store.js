import React from 'react';
import {postsReducer} from './reducers/posts-reducer.js'
import {dialogsReducer} from './reducers/dialogs-reducer.js'

export let store = {
	_state : {
		dialogsPage:{
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
				 newMessage : ""
		},
	 profilePage : {
			 posts : [
					{post:"My first post from states",likes:10},
					{post:"Im Admin Bear!",likes:20}
				],
			 newPost : ""	
		},
	},
	
	getState : function(){return this._state},
	
	dispatch(action){
		this._state = postsReducer(this._state,action);
		this._state = dialogsReducer(this._state,action);
		reRenderFromState(this);
	}
};

function reRenderFromState (){
	console.log("Function are not RERENDER");
};

export let subscribe = function(observer){
	reRenderFromState = observer;
};





