import React from 'react'
import * as axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "cee7fc84-58af-4506-9d89-136cc0031f74"
	}
})

const searchAPI = {
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




export default searchAPI