const initialState = {
  user: {},
  loading: false,
  error: false,
  errorMessage: ''
}

const userReducer = (state = initialState, action)=> {
  switch(action.type) {
    case 'USER_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'USER_SUCCESS':
      return {
        ...state,
        loading:false,
      }    

    case 'USER_ERROR':
      return {
        ...state,
        loading:false,
        error: true,
        errorMessage: action.payload
      }

    case 'USER':
      return {
        ...state,
        loading: false,
        user: action.payload
      }
      
    default :
      return {
        ...state,
        loading:false
      }
  }
}

export default userReducer
