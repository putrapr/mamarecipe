const initialState = {
  recipes: [],
  recipesUser: [],
  recipe: {},
  newRecipe:{},
  popularRecipe: {},
  loading: false,
  error: false,
  errorMessage: ''
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'RECIPE_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'RECIPE_SUCCESS':
      return {
        ...state,
        loading: false
      }

    case 'RECIPE_ERROR':
    return {
      ...state,
      loading:false,
      error: true,
      errorMessage: action.payload
    }

    case 'RECIPES':
      return {
        ...state,
        loading: false,
        recipes: action.payload
      }    

    case 'RECIPES_USER':
      return {
        ...state,
        loading: false,
        recipesUser: action.payload
      }

    case 'RECIPE_NEW':
      return {
        ...state,
        newRecipe: action.payload
      }

    case 'RECIPE_POPULAR':
      return {
        ...state,
        popularRecipe: action.payload
      }

    case 'RECIPE_SET':
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