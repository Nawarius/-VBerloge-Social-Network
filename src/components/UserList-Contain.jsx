import React from 'react';
import StoreContext from '../StoreContext.js';
import UserList from './UserList.jsx';
import {connect} from 'react-redux'

let mapToState = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};

const UserListContain = connect(mapToState)(UserList);

export default UserListContain