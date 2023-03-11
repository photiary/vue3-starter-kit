import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import '@/assets/main.css'
import '@/mock/index'
import '@/plugins/validation/rules'

// 운영환경에서 console.log 표시되지 않도록 한다.
if (import.meta.env.PROD) {
  console.log = function () {}
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
