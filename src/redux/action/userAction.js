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
    const res = await api.post('/user-login', data)
    dispatch({type: 'USER_SUCCESS'})
    localStorage.setItem('token', res.data.token)
    alert('Login Success')
  } catch(err) {    
    dispatch({type: 'USER_ERROR', payload: err.message})
    alert('wrong email / password')
    throw err.message
  }
}

export const User = () => async (mydispatch) => {
  try {
    mydispatch({type: 'USER_REQUEST'})
    const res = await api.get('/user')
    mydispatch({type: 'USER', payload: res.data.data})
  } catch(err) {
    mydispatch({type: 'USER_ERROR', payload: err.message})
    alert(err.message)
  }
}