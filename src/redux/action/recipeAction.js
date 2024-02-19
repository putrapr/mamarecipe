import api from '../../config/api'

export const addRecipe = (data) => async (mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    await api.post('/recipe', data)
    mydispatch({type: 'RECIPE_SUCCESS'})
    alert("Recipe Added")
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const Recipes = (sortBy, currentPage, limit=6) => async(mydispatch) => {
  try {
    // mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get('/recipes-pagination', {
      params:{
        sortBy,
        page: currentPage,
        limit
      }
    })
    mydispatch({type: 'RECIPES', payload: res.data})
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const RecipeSearch = (keyword) => async(mydispatch) => {
  try {
    // mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get('/recipe-search', {
      params:{
        keyword
      }
    })
    mydispatch({type: 'RECIPE_SEARCH', payload: res.data.data})
    mydispatch({type: 'RECIPE_SETKEYWORD', payload: keyword})
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const RecipesByUser = () => async (mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get('/recipe-user')
    mydispatch({type: 'RECIPES_USER', payload: res.data.data})
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const NewRecipe = () => async (mydispatch) => {
  try {
    // mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get('/recipe-one')    
    mydispatch({type: 'RECIPE_NEW', payload: res.data.data[0]})
    const res2 = await api.get('/recipe-one', { params: {sortBy: 'ASC'}})    
    mydispatch({type: 'RECIPE_POPULAR', payload: res2.data.data[0]})
    mydispatch({type: 'RECIPE_SUCCESS'})
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const deleteRecipe = (id) => async (mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    await api.delete(`/recipe/${id}`)
    mydispatch({type: 'RECIPE_SUCCESS'})
    alert("Recipe Deleted")
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const setRecipe = (recipe) => (mydispatch) => {
  mydispatch({type: 'RECIPE_SET', payload: recipe  })
}

export const updateRecipe = (id, recipe) => async (mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    await api.put(`/recipe/${id}`, recipe)
    mydispatch({type: 'RECIPE_SUCCESS'})    
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
  }
}

export const SingleRecipe = (id) => async (mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get(`/recipe/${id}`)
    mydispatch({type: 'RECIPE_SET', payload: res.data.data})  
  } catch(err) {
    mydispatch({type: 'RECIPE_ERROR', payload: err.message})
  }
}