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

# 🍔 프로젝트 생성
- 참조 문서: https://vuejs.org/guide/quick-start.html

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

# Unresolved variable or type module 해결하기 위해 설치
yarn add -D @types/node
```

# 🥡 체크 리스트
- [X] 사용 서버, 라이브러리등 프로젝트 설계에 맞는 버전 구성
- [X] 형상관리
- [ ] CI/CD 환경 구성 선택
- [ ] 개발(로컬, 서버), 운영 환경 분리
  - [ ] 환경변수
  - [ ] Mock 테스트 환경
  - [ ] CORS
  - [ ] Log
  - [ ] devtool
- [ ] 디렉토리 구조
- [X] 코딩 컨벤션
- [ ] 공통 처리
  - [ ] HTTP Headers
  - [ ] API 호출
    - [ ] 멀티 서버 접속
  - [ ] API 에러 핸들러
  - [ ] 입력 데이터 검증
  - [ ] 날짜 처리
  - [ ] 초기 상태, 요청 중, 완료, 실패
  - [ ] 화면 Layout
  - [ ] Dialog(대화상자) modal
  - [ ] 데이터 표시 서식
  - [ ] 권한 관리(메뉴, 컨텐츠, 버튼, 라우트 등)
- [ ] 전역 메시지(코드) 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 전역 상수(코드) 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 웹 스토리지(`sessionStorage` 또는 `localStorage`)
  - [ ] 개인정보 및 접속 토큰 저장

# 🍟 코딩 컨벤션 도구
- 참조문서: https://eslint.vuejs.org/user-guide/npm
- 참조문서: https://prettier.io/docs/en/install.html

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
yarn add axios
yarn add axios-mock-adapter

# URL querystring 확장 패키지 
yarn add qs
# 날짜 패키지
yarn add dayjs
# 권한 관리
yarn add @casl/ability
yarn add @casl/vue

yarn add lodash
```

# 🍿 디렉토리 구조

# 🥩 개발 가이드 라인

## Vue-router
- 참조문서: https://router.vuejs.org/

## Pinia Store 관리
- 참조문서: https://pinia.vuejs.org/

## Vee-validate 입력 데이터 검증
- 참조문서: https://vee-validate.logaretm.com/v4/

## 데이터 표시 서식
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

## @casl/ability 권한 관리
