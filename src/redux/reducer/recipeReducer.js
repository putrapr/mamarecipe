const initialState = {
  recipes: [],
  currentPage: 1,
  totalPage: 1,
  keyword: '',
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

    case 'RECIPES': {
      const res = action.payload
      return {
        ...state,
        loading: false,
        currentPage: res.currentPage,
        totalPage:res.totalPage,
        recipes: res.data,
      }
    }

    case 'RECIPE_EDITPAGE': {
      return {
        ...state,
        currentPage: action.payload
      }
    }

    case 'RECIPE_SEARCH': {
      return {
        ...state,
        loading:false,
        recipes: action.payload
      }
    }

    case 'RECIPE_SETKEYWORD': {
      return {
        ...state,
        keyword: action.payload
      }
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
        loading: false,
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