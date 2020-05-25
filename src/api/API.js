import React from 'react'
import * as axios from 'axios'
import defaultBear from '../pictures/defaultBear.jpg'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "cee7fc84-58af-4506-9d89-136cc0031f74"
	}
})

export const searchAPI = {
	setUsers(pageListCount, currentPage) {
		return instance.get(`users?count=${pageListCount}&page=${currentPage}`)
	},
	followUsers(id) {
		return instance.post(`follow/` + id)
	},
	unfollowUsers(id) {
		return instance.delete('follow/' + id)
	}
}

export const profileAPI = {
	showUser(id) {
		let userId = id;
		if(!userId) userId = 8040;
		return instance.get(`profile/${userId}`)
	},
	getStatus(id) {
		let userId = id;
		if(!userId) userId = 8040;
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status){
		return instance.put(`profile/status`,{
			status:status
		})
	}
}

export const authAPI = {
	authUser(email,password) {
		return instance.post('auth/login',{
			email:email,
			password:password
		})
	}
}


