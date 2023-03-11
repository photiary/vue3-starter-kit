/**
 * Axios에서 사용하는 기본 인증정보
 */
const BASIC_AUTH_CONFIG = Object.freeze({
  username: import.meta.env.VITE_APP_OAUTH_CLIENT_ID,
  password: import.meta.env.VITE_APP_OAUTH_CLIENT_SECRET
})

export default { BASIC_AUTH_CONFIG }
