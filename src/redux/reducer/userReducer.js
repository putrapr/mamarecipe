const initialState = {  
  loading: false,
  error: false,
  errorMessage: ''
}

const userReducer = (state = initialState, action)=> {
  switch(action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'SUCCESS':
      return {
        ...state,
        loading:false,
      }    

    case 'ERROR':
      return {
        ...state,
        loading:false,
        error: true,
        errorMessage: action.payload
      }

    default :
      return {
        ...state,
        loading:false
      }
  }
}

export default userReducer
