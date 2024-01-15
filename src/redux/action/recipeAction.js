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

export const Recipes = () => async(mydispatch) => {
  try {
    mydispatch({type: 'RECIPE_REQUEST'})
    const res = await api.get('/recipes')
    mydispatch({type: 'RECIPES', payload: res.data.data})
    // console.log(res.data.data)
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