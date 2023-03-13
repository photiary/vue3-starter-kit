import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/plugins/i18n'

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
app.use(i18n)

app.mount('#app')
