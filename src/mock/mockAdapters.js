import AxiosMockAdapter from 'axios-mock-adapter'

import axiosInstances from '@/plugins/api/axiosInstances'

function createSimpleMock(axios) {
  return new AxiosMockAdapter(axios, { delayResponse: 0 })
}

let basicAuthClient = null
let bearerTokenClient = null
if (JSON.parse(import.meta.env.VITE_APP_USE_MOCK)) {
  basicAuthClient = createSimpleMock(axiosInstances.basicAuthClient)
  bearerTokenClient = createSimpleMock(axiosInstances.bearerTokenClient)
}

export default { basicAuthClient, bearerTokenClient }
