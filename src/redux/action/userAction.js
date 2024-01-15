import api from '../../config/api'

export const register = (data) => async (mydispatch) => {
  try {
    mydispatch({type: 'REQUEST'})
    await api.post('/user', data)
    mydispatch({type: 'SUCCESS'})
    alert('Account Registered')
  } catch(err) {
    mydispatch({type: 'ERROR', payload: err.message})
    alert(err.message)
  }
}

export const login = (data) => async (dispatch) => {
  try {
    dispatch({type: 'REQUEST'})
    const response = await api.post('/user-login', data)
    dispatch({type: 'SUCCESS'})
    localStorage.setItem('token', response.data.token)
    alert('Login Success')
  } catch(err) {    
    dispatch({type: 'ERROR', payload: err.message})
    alert('wrong email / password')
    throw err.message
  }
}