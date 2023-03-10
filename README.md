# vue3-starter-kit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# ๐ฅ ๋ชฉ์ฐจ
- [ํ๋ก์ ํธ ๊ฐ๋ฐ ํ๊ฒฝ](#-ํ๋ก์ ํธ-๊ฐ๋ฐ-ํ๊ฒฝ)
- [ํ๋ก์ ํธ ์์ฑ](#-ํ๋ก์ ํธ-์์ฑ)

# ๐ ํ๋ก์ ํธ ๊ฐ๋ฐ ํ๊ฒฝ

- Node.js v18.14.0
- Vue3

# ๐ ํ๋ก์ ํธ ์์ฑ
- Vue3 ํ๋ก์ ํธ ์์ฑ ์ฐธ์กฐ๋ฌธ์: https://vuejs.org/guide/quick-start.html
- Vite ์ฐธ์กฐ๋ฌธ์: https://vitejs.dev/guide/
- Vite Browser Compatibility ์ฐธ์กฐ๋ฌธ์: https://vitejs.dev/guide/build.html

```shell
npm init vue@latest
```

- โ Project name: ... vue3-starter-kit
- โ Add TypeScript? ... No
- โ Add JSX Support? ... No
- โ Add Vue Router for Single Page Application development? ... Yes
- โ Add Pinia for state management? ... Yes
- โ Add Vitest for Unit Testing? ... Yes
- โ Add an End-to-End Testing Solution? ยป No
- โ Add ESLint for code quality? ... Yes
- โ Add Prettier for code formatting? ... Yes

```shell
# yarn install
npm install --global yarn
yarn --version

cd vue3-starter-kit

yarn install
npm run dev

# IDE์ Unresolved variable or type module ๊ฒฝ๊ณ ๊ฐ ํ์๋  ๊ฒฝ์ฐ ์ค์น
yarn add -D @types/node
```

# ๐ฅก ์ฒดํฌ ๋ฆฌ์คํธ
- [X] ์ฌ์ฉ ์๋ฒ, ๋ผ์ด๋ธ๋ฌ๋ฆฌ, ํด์์ด์ธํธ ๋ธ๋ผ์ฐ์  ๋ฒ์ ๋ฑ ํ๋ก์ ํธ ์ค๊ณ์ ๋ง๋ ๋ฒ์  ๊ตฌ์ฑ
- [ ] CI/CD ํ๊ฒฝ ๊ตฌ์ฑ ์ ํ
  - [X] Git
  - [X] Jenkins
  - [ ] Docker
- [ ] ๊ฐ๋ฐ(๋ก์ปฌ, ์๋ฒ), ์ด์ ํ๊ฒฝ ๋ถ๋ฆฌ
  - [X] ํ๊ฒฝ๋ณ์
  - [ ] Mock ํ์คํธ ํ๊ฒฝ
  - [ ] CORS (Cross-Origin Resource Sharing) ๊ต์ฐจ ์ถ์ฒ ๋ฆฌ์์ค ๊ณต์ 
  - [ ] ์ด์์์์ `console.log` ๋ฏธ์ถ๋ ฅ
  - [ ] Vue devtools ๋ฏธํ์
- [X] ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
- [X] ์ฝ๋ฉ ์ปจ๋ฒค์
- [ ] ๊ณตํต ์ฒ๋ฆฌ
  - [X] HTTP Headers
  - [ ] API ํธ์ถ
    - [ ] ๋ฉํฐ ์๋ฒ ์ ์
    - [X] ์๋ฌ ์ฝ๋ Enum ๊ด๋ฆฌ
  - [ ] API ์๋ฌ ํธ๋ค๋ฌ
  - [X] ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
  - [ ] ๋ ์ง ์ฒ๋ฆฌ
  - [ ] ์ด๊ธฐ ์ํ, ์์ฒญ ์ค, ์๋ฃ, ์คํจ
  - [ ] ํ๋ฉด Layout
  - [ ] Dialog(๋ํ์์) modal
  - [X] ๋ฐ์ดํฐ ํ์ ์์
  - [ ] ๊ถํ ๊ด๋ฆฌ(๋ฉ๋ด, ์ปจํ์ธ , ๋ฒํผ, ๋ผ์ฐํธ ๋ฑ)
  - [ ] ๋ค๊ตญ์ด (i18n)
  - [ ] ๋ก์ผ์ผ
  - [ ] ๋ฌ๋ ฅ
- [ ] ์ ์ญ ๋ฉ์์ง Enum ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์ ์ญ ์ฝ๋ Enum ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์น ์คํ ๋ฆฌ์ง(`sessionStorage` ๋๋ `localStorage`)
  - [X] ์ ์ ํ ํฐ ์ ์ฅ
  - [ ] ๊ฐ์ธ ์ ๋ณด ์ ์ฅ
- [ ] ๋จ์ด์ง

# ๐ ์ฝ๋ฉ ์ปจ๋ฒค์ ๋๊ตฌ
- ์ฐธ์กฐ๋ฌธ์: https://eslint.vuejs.org/user-guide/
- ์ฐธ์กฐ๋ฌธ์: https://prettier.io/docs/en/index.html

`.eslintrc.cjs` ํ์ผ์ `rules` ์ถ๊ฐ

```javascript
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        bracketSameLine: true,
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
```

# ๐ญ ์ถ๊ฐ ํจํค์ง
๊ฐ๋ฐ์ ํธ์๋ฅผ ๋๋ js ํจํค์ง๋ค์ ์ถ๊ฐํ๋ค

```shell
# ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
yarn add vee-validate
yarn add @vee-validate/rules
yarn add @vee-validate/i18n

yarn add axios
yarn add axios-mock-adapter

# URL querystring ํ์ฅ ํจํค์ง 
yarn add qs
# ๋ ์ง ํจํค์ง
yarn add dayjs
# ๊ถํ ๊ด๋ฆฌ
yarn add @casl/ability
yarn add @casl/vue
# ๋ค๊ตญ์ด
yarn add vue-i18n@9
yarn add -D @intlify/vite-plugin-vue-i18n

yarn add lodash
```

# ๐ฟ ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ

## ์ฃผ์ ๋๋ ํ ๋ฆฌ

```
+-- api (Server API ํธ์ถ)
+-- components (๊ณตํต Vue ์ปดํฌ๋ํธ)
+-- mock (ํ์คํธ API) 
|   +-- data (ํ์คํธ ๋ฐ์ดํฐ)
+-- router (Vue-router)
|   +-- routes
+-- store (Pinia)
+-- plugins
|   +-- api (Axios)
|   +-- i18n (๋ค๊ตญ์ด)
|   +-- validations (์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ)
|   +-- formatters.js (๋ฐ์ดํฐ ํ์ ์์)
+-- views (ํ๋ฉด Vue ์ปดํฌ๋ํธ)

```

## ๋ถํ์ ๋ฆฌ์์ค

ํ๋ก์ ํธ ์์ฑ์ ๋ํดํธ ๋ฆฌ์์ค๋ ์ฐธ๊ณ ์ฉ์ผ๋ก ๊ฐ๋ฐ ์์์ ์ ๊ฑฐ ๋๋ ์์ ํด์ ์ฌ์ฉํ๋ค.

```
+-- components
|   +-- __tests__
|   +-- icons
|   +-- HelloWorld.vue
|   +-- TheWelcome.vue
|   +-- WelcomeItem.vue
+-- stores
|   +-- counter.js
+-- views
|   +-- AboutView.vue
|   +-- GuidelineView.vue
|   +-- HomeView.vue
```

# ๐ Docker & Jenkins

# ๐ฅฉ ๊ฐ๋ฐ ๊ฐ์ด๋ ๋ผ์ธ

## ๐ธ Axios API ํธ์ถ

## ๐ธ Mock ํ์คํธ ๋ฐ์ดํฐ
- ~Data.js์์ ์ฌ์ฉํ๋ Mock adapter๋ ~Api.js ์์ ์ฌ์ฉํ๋ ๊ฐ์ Axios instance๋ฅผ ์ฌ์ฉํ๋ค.

```javascript
import mockAdapters from '@/mock/mockAdapters'

// ํ์คํธ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ๋ค.
const data = {
  info: {
    name: '๋๋ฏธ'
  }
}

// ํ์คํธ ์๋ํฌ์ธํธ๋ฅผ ์ถ๊ฐํ๋ค.
function init() {
  // axiosInstance๋ฅผ basicAuthClient๋ก ์ฌ์ฉํ  ๊ฒฝ์ฐ
  mockAdapters.basicAuthClient.onGet('/dummy').reply(() => [200, data.info])
  // axiosInstance๋ฅผ bearerTokenClient๋ก ์ฌ์ฉํ  ๊ฒฝ์ฐ
  mockAdapters.bearerTokenClient.onGet('/info').reply(() => [200, data.info])
}

export default { init }
```

## ๐ธ Vue-router
- ์ฐธ์กฐ๋ฌธ์: https://router.vuejs.org/

## ๐ธ Pinia Store ๊ด๋ฆฌ
- ์ฐธ์กฐ๋ฌธ์: https://pinia.vuejs.org/

## ๐ธ Vee-validate ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
- ์ฐธ์กฐ๋ฌธ์: https://vee-validate.logaretm.com/v4/
- IME(ํ๊ธ ํค๋ณด๋)์ `v-model`๊ณผ์ ๊ด๊ณ๋ก ์ํฉ์ ๋ง๊ฒ `input` ์ด๋ฒคํธ ์ฌ์ฉ (์ฐธ์กฐ๋ฌธ์: https://vuejs.org/guide/essentials/forms.html#text)

Vue์์ ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
- `useForm()`์ ์คํํด์ผ `useIsFieldDirty`, `useIsFieldValid`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
- `useIsDisabledByField`๋ฅผ ์ด์ฉํ์ฌ ๋ฒํผ์ ๋นํ์ฑํ  ์ ์๋ค.

```vue
<script setup>
import { useForm, useField } from 'vee-validate'
useForm()
const { value: email, errorMessage: emailError } = useField('email', 'required|email')
</script>
<template>
  <label for="email">์ด๋ฉ์ผ:</label>
  <input
    type="text"
    id="email"
    :value="email"
    @input="event => (email = event.target.value)" />
  <span>{{ emailError }}</span>
</template>
```

์ฌ์ฉ์ ์ง์  ๊ฒ์ฆ ์ถ๊ฐ

- `validators.js`์์ ๊ฒ์ฆ ์ฒ๋ฆฌ๋ฅผ ์ถ๊ฐ
- `rules.js`์์ ์ถ๊ฐํ ๊ฒ์ฆ๊ณผ ๋ค๊ตญ์ด ๋ฉ์์ง๋ฅผ Vee-validate์ ์ ์ฉ

```javascript
defineRule('password', value => {
  if (!value || !value.length) {
    return true
  }
  return validators.validatePassword(value)
})

const koDefineRuleMessages = {
  password:
    '... ํ๊ธ ๊ฒ์ฆ ๋ฉ์์ง ...',
}
const koNames = {
  names: {
    password: '๋น๋ฐ๋ฒํธ',
  }
}
```

## ๐ธ ๋ฐ์ดํฐ ํ์ ์์
- `formatters.js` ๋ฅผ `import`ํ์ฌ ์ฌ์ฉ
- ์ฌ์์ ๋ง๊ฒ ํจ์๋ฅผ ์ถ๊ฐ

```vue
<script setup>
import { formatSimpleDate } from '@/plugins/formatters'
</script>

<template>
  <p>๋ ์ง: {{ formatSimpleDate(new Date()) }}</p>
</template>
```

## ๐ธ @casl/ability ๊ถํ ๊ด๋ฆฌ

## ๐ธ ์ ์ญ Enum ์ ์ธ
- ์ ์ญ ์์ ์ ์ธ์ ๊ฐ ๋ชจ๋๊ณผ ๊ฐ์ ๋๋ ํ ๋ฆฌ์ ํ์ผ์ ์์ฑํ๋ค.
- named export๋ฅผ ์ด์ฉํ์ฌ ๋ด๋ณด๋ด๊ธฐ๋ฅผ ํ๋ค.

```javascript
export const API_ERROR = Object.freeze({
  UNAUTHORIZED: '0001' // ์ธ์ฆ์ ์คํจํ์ต๋๋ค.
})
```

## ๐ธ ์ด๊ธฐ์ํ, ์์ฒญ์ค, ์๋ฃ, ์คํจ

### ์ด๊ธฐ์ํ

### ์์ฒญ์ค

### ์๋ฃ

### ์คํจ
- API๋ฅผ ํธ์ถํ๊ณ  ์๋ต ๋ฐ์ ์๋ฌ์ฝ๋๋ฅผ ์ด์ฉํ์ฌ ์ฌ์์ ๋ง๊ฒ ์ฒ๋ฆฌ๋ฅผ ํ๋ค.
๋ฉ์์ง๋ฅผ ํ์ํ  ๊ฒฝ์ฐ๋ ์๋ฌ์ฝ๋๋ฅผ ์ฌ์ฉํ๋ ์๋ฒ์์ ์๋ต ๋ฐ์ ๋ฉ์์ง๋ ์ฌ์ฉํ์ง ์๋๋ค. 

## ๐ธ Web storage ์ฌ์ฉ

## ๐ธ ๋ค๊ตญ์ด
- ์ฐธ์กฐ๋ฌธ์: https://vue-i18n.intlify.dev/guide/
- `ko.json`, `en.json`์ ๋ผ๋ฒจ, ๋ฒํผ, ๋ฉ์์ง๋ฅผ ์ถ๊ฐ

- ๊ฐ๋ฐ์ ๋๊ตฌ ์ฝ์์ ๋ค์๊ณผ ๊ฐ์ ๋ฉ์์ง๋ฅผ ํด๊ฒฐํ๊ธฐ์ํด `@intlify/vite-plugin-vue-i18n`๋ฅผ ์ค์นํ๊ณ 
`vite.config.js`์ `plugins`์ ์ถ๊ฐํ๋ค.
  > vue-i18n.esm-bundler.js:39 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
```javascript
import { resolve, dirname } from 'node:path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

plugins: [
  vue(),
  vueI18n({
    include: resolve(
      dirname(fileURLToPath(import.meta.url)),
      './src/plugins/i18n/locales/*.json'
    )
  })
]
```
