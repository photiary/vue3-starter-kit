<script setup>
import { ref } from 'vue'
import { formatSimpleDate } from '@/plugins/formatters'
import { setAuthLocalStorage } from '@/plugins/authHelper'
import accountApi from '@/api/accountApi'
import authApi from '@/api/authApi'

const loading = ref(false)
const account = ref(null)
const responseMessage = ref('')

// ----------------------------------------------------------------------------
// API 호출
// ----------------------------------------------------------------------------
const login = async () => {
  try {
    const resToken = await authApi.login(accountId.value, password.value)
    setAuthLocalStorage(resToken.data)
  } catch (error) {
    console.log('GuidelineView.login error:', error)
    responseMessage.value = error.response.data.message
  }
}

const fetchAccount = async () => {
  loading.value = true
  try {
    const resAccount = await accountApi.fetchAccount()
    account.value = resAccount.data
  } catch (error) {
    console.log('GuidelineView.fetchAccount error:', error)
    responseMessage.value = error.response.data.message
  } finally {
    // API 호출 마지막 응답에 데이터를 표시하도록 한다.
    loading.value = false
  }
}

// ----------------------------------------------------------------------------
// 입력 데이터 검증
// ----------------------------------------------------------------------------
import { useForm, useField } from 'vee-validate'
import { useIsDisabledByField } from '@/plugins/validation/helper'
// useIsFieldDirty, useIsFieldValid를 사용하기 위해서 useForm() 실행한다.
useForm({
  initialValues: { accountId: 'dummy', password: 'Dummy12!@' }
})
const { value: accountId, errorMessage: accountIdError } = useField(
  'accountId',
  'required'
)
const { value: email, errorMessage: emailError } = useField('email', 'email')
const { value: password, errorMessage: passwordError } = useField(
  'password',
  'required|password'
)
const isDisabled = !useIsDisabledByField('accountId', 'email', 'password')
</script>

<template>
  <div>
    <h1>Guideline page</h1>
    <div>
      <label for="accountId">계정 ID:</label>
      <input
        type="text"
        id="accountId"
        :value="accountId"
        @input="event => (accountId = event.target.value)" />
      <span>{{ accountIdError }}</span>
      <br />
      <label for="email">이메일:</label>
      <input
        type="text"
        id="email"
        :value="email"
        @input="event => (email = event.target.value)" />
      <span>{{ emailError }}</span>
      <br />
      <label for="password">암호:</label>
      <input
        type="password"
        id="password"
        :value="password"
        @input="event => (password = event.target.value)" />
      <span>{{ passwordError }}</span>
      <br />
      <button
        type="button"
        @click="login"
        :disabled="isDisabled">
        로그인
      </button>
    </div>
    <button
      type="button"
      @click="fetchAccount">
      계정조회
    </button>
    <div v-if="loading">불러오는 중...</div>
    <div v-else>
      <div>계정정보: {{ account }}</div>
      <div>날짜: {{ formatSimpleDate(account?.createAt) }}</div>
    </div>
    <div>응답메시지: {{ responseMessage }}</div>
  </div>
</template>

<style scoped></style>
