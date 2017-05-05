export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const logInRequest = () => ({
  type: LOGIN_REQUEST,
  loading: true
})
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const logInSuccess = shelter => ({
  type: LOGIN_SUCCESS,
  loading: false,
  shelter
})
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const logInError = error => ({
  type: LOGIN_ERROR,
  error
})

export const FETCH_SHELTER_SUCCESS = 'FETCH_SHELTER_SUCCESS'
export const fetchShelterSuccess = shelter => ({
  type: FETCH_SHELTER_SUCCESS
})

export const FETCH_SHELTER_ERROR = 'FETCH_SHELTER_ERROR'
export const fetchShelterError = error => ({
  type: FETCH_SHELTER_ERROR,
  error
})


export const fetchLogInData = (email, password) => dispatch => {
  dispatch(logInRequest())
  fetch('http://localhost:8080/api/login', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic',
      'Credentials': 'same-origin',
      'Content-Type': 'application/json'
    }
  })
  .then(shelter => {
    console.log(shelter)
    console.log(JSON.parse(shelter));
      return shelter.json()
    })
    .then(shelterJson => {
      console.log('log in success')
      return dispatch(logInSuccess(shelterJson))
    })
  .catch(err => {
    console.log(err)
    dispatch(logInError(err))
  })
}