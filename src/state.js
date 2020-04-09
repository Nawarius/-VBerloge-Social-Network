import React from 'react';
export let state = {
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
		]
};
/*export let stateFunc = {
		messageData : function (arg) {let messageArray = []; messageArray.map((el)=>{return <div>{el.message}</div>})},
		usersData : function (arg) {let usersArray = []; usersArray.map((el)=>{return <div>{el.name}</div>})}
};*/