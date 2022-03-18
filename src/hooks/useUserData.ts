// import users from '../api/users'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUser = (userId: any) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

export const useUserData = (userId: any) => {
  return useQuery(['user', userId], () => fetchUser(userId))
}
