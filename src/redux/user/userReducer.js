import {
  FETCH_USERS_FAILURE, 
  FETCH_USERS_REQUEST, 
  FETCH_USERS_SUCCESS,
  POST_USERS_FAILURE, 
  POST_USERS_REQUEST, 
  POST_USERS_SUCCESS
} from './userTypes'


const initialState = {
  loading: false,
  users: [],
  error: '',
  resp: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ... state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    
      case POST_USERS_REQUEST:
        return {
          ... state,
          loading: true
        }
  
      case POST_USERS_SUCCESS:
        return {
          ... state,
          loading: false,
          resp: action.payload
        }
  
      case POST_USERS_FAILURE:
        return {
          ... state,
          loading: false,
          error: action.payload
        }
    
      default: return state
  }

  
}

export default userReducer
