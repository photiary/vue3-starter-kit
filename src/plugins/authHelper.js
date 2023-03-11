export const isLogin = () => {
  return !!localStorage.getItem('auth')
}

export const setAuthLocalStorage = auth => {
  localStorage.setItem('auth', JSON.stringify(auth))
}

export const getAuthLocalStorage = () => {
  return JSON.parse(localStorage.getItem('auth'))
}

export const setUserDataLocalStorage = userData => {
  localStorage.setItem('userData', JSON.stringify(userData))
}

export const getUserDataLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userData'))
}
