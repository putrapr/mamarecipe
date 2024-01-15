const initialState = {
  recipesUser: [],
  recipe: {},
  loading: false,
  error: false,
  errorMessage: ''
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'SUCCESS':
      return {
        ...state,
        loading: false
      }

    case 'ERROR':
    return {
      ...state,
      loading:false,
      error: true,
      errorMessage: action.payload
    }

    case 'RECIPES_USER':
      return {
        ...state,
        loading: false,
        recipesUser: action.payload
      }

    case 'SET_RECIPE':
      return {
        ...state,
        recipe: action.payload
      }
           
    default :
      return {
        ...state,
        loading:false
      }
  }
}

export default recipeReducer