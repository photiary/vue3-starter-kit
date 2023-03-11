import Axios from 'axios'
import authConstants from '@/plugins/api/authConstants'
import errorHandlers from '@/plugins/api/errorHandlers'

/**
 * 디폴트 Headers를 갖는 Axios instance를 생성한다.
 *
 * GET Accept: application/json
 *
 * POST Content-Type: application/json
 * @returns {AxiosInstance} Axios instance
 */
// 참조문서: https://axios-http.com/kr/docs/instance
function createSimpleInstance(url) {
  const axios = Axios.create({
    baseURL: url
  })
  axios.defaults.headers.get['Accept'] = 'application/json'
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  return axios
}

/**
 * Basic auth 헤더 추가와 공통 에러를 처리하나다.
 *
 * .env의 VITE_APP_URL_SERVICE를 이용한다.
 * @returns {AxiosInstance} Axios instance
 */
// 참조문서: https://axios-http.com/kr/docs/interceptors
function createBasicAuthInstance() {
  const axios = createSimpleInstance(import.meta.env.VITE_APP_URL_SERVICE)

  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axiosInstances.createBasicAuthInstance')
      config.auth = authConstants.BASIC_AUTH_CONFIG
      return config
    },
    function (error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )

  // 응답 인터셉터 추가하기
  axios.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      errorHandlers.basicAuthUnauthorizedErrorHandler(error)
      return Promise.reject(error)
    }
  )

  return axios
}

/**
 * Bearer token 헤더 추가와 공통 에러를 처리하나다.
 *
 * .env의 VITE_APP_URL_SERVICE를 이용한다.
 * @returns {AxiosInstance} Axios instance
 */
function createBearerTokenInstance() {
  const axios = createSimpleInstance(import.meta.env.VITE_APP_URL_SERVICE)
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axiosInstances.createBearerTokenInstance')
      const auth = JSON.parse(localStorage.getItem('auth') || '{}')
      config.headers.Authorization = `Bearer ${auth.accessToken}`
      return config
    },
    function (error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )

  // 응답 인터셉터 추가하기
  axios.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      errorHandlers.bearerTokenUnauthorizedErrorHandler(error)
      return Promise.reject(error)
    }
  )
  return axios
}

const basicAuthClient = createBasicAuthInstance()
const bearerTokenClient = createBearerTokenInstance()

export default {
  createSimpleInstance,
  basicAuthClient,
  bearerTokenClient
}
