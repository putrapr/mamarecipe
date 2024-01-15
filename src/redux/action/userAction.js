import api from '../../config/api'

export const register = (data) => async (mydispatch) => {
  try {
    mydispatch({type: 'USER_REQUEST'})
    await api.post('/user', data)
    mydispatch({type: 'USER_SUCCESS'})
    alert('Account Registered')
  } catch(err) {
    mydispatch({type: 'USER_ERROR', payload: err.message})
    alert(err.message)
  }
}

export const login = (data) => async (dispatch) => {
  try {
    dispatch({type: 'USER_REQUEST'})
    const response = await api.post('/user-login', data)
    dispatch({type: 'USER_SUCCESS'})
    localStorage.setItem('token', response.data.token)
    alert('Login Success')
  } catch(err) {    
    dispatch({type: 'USER_ERROR', payload: err.message})
    alert('wrong email / password')
    throw err.message
  }
}