import axios from 'axios'
import {
  FETCH_USERS_FAILURE, 
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS,
  POST_USERS_FAILURE, 
  POST_USERS_REQUEST, 
  POST_USERS_SUCCESS,
} from './userTypes'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const postUsersRequest = () => {
  return {
    type: POST_USERS_REQUEST
  }
}

export const postUserSuccess = resp => {
  return {
    type: POST_USERS_SUCCESS,
    payload: resp
  }
}

export const postUserFailure = error => {
  return {
    type: POST_USERS_FAILURE,
    payload: error
  }
}


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data
      dispatch(fetchUserSuccess(users))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchUserFailure(errorMsg))
    })
  }
}


export const postUsers = (uTitle, uBody, uId) => {
  return (dispatch) => {
    dispatch(postUsersRequest)
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title: uTitle,
      body: uBody,
      userId: uId
    })
    .then(response => {
      dispatch(postUserSuccess(JSON.stringify(response)))
      console.log(response)
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(postUserFailure(errorMsg))
    })
  }
}