import api from '../../config/api'

export const addRecipe = (data) => async (mydispatch) => {
  try {
    mydispatch({type: 'REQUEST'})
    await api.post('/recipe', data)
    mydispatch({type: 'SUCCESS'})
    alert("Recipe Added")
  } catch(err) {
    mydispatch({type: 'ERROR', payload: err.message})
    alert(err.message)
  }
}

export const RecipesByUser = () => async (mydispatch) => {
  try {
    const res = await api.get('/recipe-user')
    mydispatch({type: 'RECIPES_USER', payload: res.data.data})

  } catch(err) {
    mydispatch({type: 'ERROR', payload: err.message})
    alert(err.message)
  }
}

export const deleteRecipe = (id) => async (mydispatch) => {
  try {
    mydispatch({type: 'REQUEST'})
    await api.delete(`/recipe/${id}`)
    mydispatch({type: 'SUCCESS'})
    alert("Recipe Deleted")
  } catch(err) {
    mydispatch({type: 'ERROR', payload: err.message})
    alert(err.message)
  }
}

export const setRecipe = (recipe) => (mydispatch) => {
  mydispatch({type: 'SET_RECIPE', payload: recipe  })
}

export const updateRecipe = (id, recipe) => async (mydispatch) => {
  try {
    mydispatch({type: 'REQUEST'})
    await api.put(`/recipe/${id}`, recipe)
    mydispatch({type: 'SUCCESS'})
    
  } catch(err) {
    mydispatch({type: 'ERROR', payload: err.message})
    
  }
}