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

# 🥃 목차
- [프로젝트 개발 환경](#-프로젝트-개발-환경)
- [프로젝트 생성](#-프로젝트-생성)

# 🍕 프로젝트 개발 환경

- Node.js v18.14.0
- Vue3

# 🍔 프로젝트 생성
- Vue3 프로젝트 생성 참조문서: https://vuejs.org/guide/quick-start.html
- Vite 참조문서: https://vitejs.dev/guide/
- Vite Browser Compatibility 참조문서: https://vitejs.dev/guide/build.html

```shell
npm init vue@latest
```

- √ Project name: ... vue3-starter-kit
- √ Add TypeScript? ... No
- √ Add JSX Support? ... No
- √ Add Vue Router for Single Page Application development? ... Yes
- √ Add Pinia for state management? ... Yes
- √ Add Vitest for Unit Testing? ... Yes
- √ Add an End-to-End Testing Solution? » No
- √ Add ESLint for code quality? ... Yes
- √ Add Prettier for code formatting? ... Yes

```shell
# yarn install
npm install --global yarn
yarn --version

cd vue3-starter-kit

yarn install
npm run dev

# IDE에 Unresolved variable or type module 경고가 표시될 경우 설치
yarn add -D @types/node
```

# 🥡 체크 리스트
- [X] 사용 서버, 라이브러리, 클아이언트 브라우저 버전등 프로젝트 설계에 맞는 버전 구성
- [ ] CI/CD 환경 구성 선택
  - [X] Git
  - [X] Jenkins
  - [ ] Docker
- [ ] 개발(로컬, 서버), 운영 환경 분리
  - [X] 환경변수
  - [ ] Mock 테스트 환경
  - [ ] CORS (Cross-Origin Resource Sharing) 교차 출처 리소스 공유
  - [ ] 운영에서의 `console.log` 미출력
  - [ ] Vue devtools 미표시
- [X] 디렉토리 구조
- [X] 코딩 컨벤션
- [ ] 공통 처리
  - [X] HTTP Headers
  - [ ] API 호출
    - [ ] 멀티 서버 접속
    - [X] 에러 코드 Enum 관리
  - [ ] API 에러 핸들러
  - [X] 입력 데이터 검증
  - [ ] 날짜 처리
  - [ ] 초기 상태, 요청 중, 완료, 실패
  - [ ] 화면 Layout
  - [ ] Dialog(대화상자) modal
  - [X] 데이터 표시 서식
  - [ ] 권한 관리(메뉴, 컨텐츠, 버튼, 라우트 등)
  - [ ] 다국어 (i18n)
  - [ ] 로케일
  - [ ] 달력
- [ ] 전역 메시지 Enum 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 전역 코드 Enum 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 웹 스토리지(`sessionStorage` 또는 `localStorage`)
  - [X] 접속 토큰 저장
  - [ ] 개인 정보 저장
- [ ] 단어집

# 🍟 코딩 컨벤션 도구
- 참조문서: https://eslint.vuejs.org/user-guide/
- 참조문서: https://prettier.io/docs/en/index.html

`.eslintrc.cjs` 파일에 `rules` 추가

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

# 🌭 추가 패키지
개발에 편의를 돕는 js 패키지들을 추가한다

```shell
# 입력 데이터 검증
yarn add vee-validate
yarn add @vee-validate/rules
yarn add @vee-validate/i18n

yarn add axios
yarn add axios-mock-adapter

# URL querystring 확장 패키지 
yarn add qs
# 날짜 패키지
yarn add dayjs
# 권한 관리
yarn add @casl/ability
yarn add @casl/vue
# 다국어
yarn add vue-i18n@9
yarn add -D @intlify/vite-plugin-vue-i18n

yarn add lodash
```

# 🍿 디렉토리 구조

## 주요 디렉토리

```
+-- api (Server API 호출)
+-- components (공통 Vue 컴포넌트)
+-- mock (테스트 API) 
|   +-- data (테스트 데이터)
+-- router (Vue-router)
|   +-- routes
+-- store (Pinia)
+-- plugins
|   +-- api (Axios)
|   +-- i18n (다국어)
|   +-- validations (입력 데이터 검증)
|   +-- formatters.js (데이터 표시 서식)
+-- views (화면 Vue 컴포넌트)

```

## 불필요 리소스

프로젝트 생성시 디폴트 리소스는 참고용으로 개발 시작시 제거 또는 수정해서 사용한다.

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

# 🍗 Docker & Jenkins

# 🥩 개발 가이드 라인

## 🔸 Axios API 호출

## 🔸 Mock 테스트 데이터
- ~Data.js에서 사용하는 Mock adapter는 ~Api.js 에서 사용하는 같은 Axios instance를 사용한다.

```javascript
import mockAdapters from '@/mock/mockAdapters'

// 테스트 데이터를 추가한다.
const data = {
  info: {
    name: '더미'
  }
}

// 테스트 엔드포인트를 추가한다.
function init() {
  // axiosInstance를 basicAuthClient로 사용할 경우
  mockAdapters.basicAuthClient.onGet('/dummy').reply(() => [200, data.info])
  // axiosInstance를 bearerTokenClient로 사용할 경우
  mockAdapters.bearerTokenClient.onGet('/info').reply(() => [200, data.info])
}

export default { init }
```

## 🔸 Vue-router
- 참조문서: https://router.vuejs.org/

## 🔸 Pinia Store 관리
- 참조문서: https://pinia.vuejs.org/

## 🔸 Vee-validate 입력 데이터 검증
- 참조문서: https://vee-validate.logaretm.com/v4/
- IME(한글 키보드)와 `v-model`과의 관계로 상황에 맞게 `input` 이벤트 사용 (참조문서: https://vuejs.org/guide/essentials/forms.html#text)

Vue에서 입력 데이터 검증
- `useForm()`을 실행해야 `useIsFieldDirty`, `useIsFieldValid`를 사용할 수 있다.
- `useIsDisabledByField`를 이용하여 버튼을 비활성할 수 있다.

```vue
<script setup>
import { useForm, useField } from 'vee-validate'
useForm()
const { value: email, errorMessage: emailError } = useField('email', 'required|email')
</script>
<template>
  <label for="email">이메일:</label>
  <input
    type="text"
    id="email"
    :value="email"
    @input="event => (email = event.target.value)" />
  <span>{{ emailError }}</span>
</template>
```

사용자 지정 검증 추가

- `validators.js`에서 검증 처리를 추가
- `rules.js`에서 추가한 검증과 다국어 메시지를 Vee-validate에 적용

```javascript
defineRule('password', value => {
  if (!value || !value.length) {
    return true
  }
  return validators.validatePassword(value)
})

const koDefineRuleMessages = {
  password:
    '... 한글 검증 메시지 ...',
}
const koNames = {
  names: {
    password: '비밀번호',
  }
}
```

## 🔸 데이터 표시 서식
- `formatters.js` 를 `import`하여 사용
- 사양에 맞게 함수를 추가

```vue
<script setup>
import { formatSimpleDate } from '@/plugins/formatters'
</script>

<template>
  <p>날짜: {{ formatSimpleDate(new Date()) }}</p>
</template>
```

## 🔸 @casl/ability 권한 관리

## 🔸 전역 Enum 선언
- 전역 상수 선언은 각 모듈과 같은 디렉토리에 파일을 생성한다.
- named export를 이용하여 내보내기를 한다.

```javascript
export const API_ERROR = Object.freeze({
  UNAUTHORIZED: '0001' // 인증에 실패했습니다.
})
```

## 🔸 초기상태, 요청중, 완료, 실패

### 초기상태

### 요청중

### 완료

### 실패
- API를 호출하고 응답 받은 에러코드를 이용하여 사양에 맞게 처리를 한다.
메시지를 표시할 경우는 에러코드를 사용하되 서버에서 응답 받은 메시지는 사용하지 않는다. 

## 🔸 Web storage 사용

## 🔸 다국어
- 참조문서: https://vue-i18n.intlify.dev/guide/
- `ko.json`, `en.json`에 라벨, 버튼, 메시지를 추가

- 개발자 도구 콘솔에 다음과 같은 메시지를 해결하기위해 `@intlify/vite-plugin-vue-i18n`를 설치하고
`vite.config.js`에 `plugins`을 추가한다.
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
