const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
	users:[
		 {id:0,followed:true, firstName:"Медведь", lastName:"Приветливый",location:{country:'Russia', city:'Moscow'},
		  img:"https://avatarko.ru/img/kartinka/29/medved_28595.jpg"},
		 {id:1,followed:true, firstName:"Медведь", lastName:"Ученый",location:{country:'Russia', city:'Saint-Petersburg'},
		  img:"https://99px.ru/sstorage/1/2016/09/image_11509160032084971512.jpg"},
		 {id:2,followed:false, firstName:"Панда", lastName:"Малыш",location:{country:'China', city:'Fo-Hen'},
		 img:"https://avatarko.ru/img/kartinka/13/panda_nyasha_12855.jpg"}
	]
		
}

export const searchReducer = (state = initialState,action) => {
		
		switch (action.type){
			case FOLLOW:
				{		
					//alert(action.id);
					let stateCopy = {...state};
					stateCopy.users[action.id].followed = true;
					stateCopy.users = [...state.users];
					return stateCopy;
				}
			case UNFOLLOW:
				{
					//alert(action.id);
					let stateCopy = {...state};
					stateCopy.users[action.id].followed = false;
					stateCopy.users = [...state.users];
					return stateCopy;
				}
			default: 
					return state;
		}
}

export let followAC = (userId) => {return {type:FOLLOW,id:userId}};
export let unfollowAC = (userId)=> {return {type:UNFOLLOW,id:userId}};