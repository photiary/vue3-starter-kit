<script setup>
import { ref } from 'vue'
import { formatSimpleDate } from '@/plugins/formatters'
import { Field } from 'vee-validate'
import accountApi from '@/api/accountApi'

const loading = ref(true)
const email = ref('')
const password = ref('')
const account = ref(null)

const fetchAccount = async () => {
  try {
    const resAccount = await accountApi.fetchAccount()
    account.value = resAccount.data
  } catch (error) {
    console.log('GuidelineView.fetchAccount error:', error)
    this.message = error.response.data.message
  } finally {
    // API 호출 마지막 응답에 데이터를 표시하도록 한다.
    loading.value = false
  }
}
fetchAccount()
</script>

<template>
  <div>
    <h1>Guideline page</h1>
    <div v-if="loading">불러오는 중...</div>
    <div v-else>
      <div>
        <label for="email">이메일:</label>
        <Field
          name="이메일"
          rules="required|email"
          :value="email"
          @input="event => (email = event.target.value)"
          v-slot="{ field, errorMessage }">
          <input
            type="text"
            id="email"
            v-bind="field" />
          <span>{{ errorMessage }}</span>
        </Field>
        <br />
        <label for="password">암호:</label>
        <Field
          name="암호"
          rules="password"
          :value="password"
          @input="event => (password = event.target.value)"
          v-slot="{ field, errorMessage }">
          <input
            type="password"
            id="password"
            v-bind="field" />
          <span>{{ errorMessage }}</span>
        </Field>
      </div>
      <div>날짜: {{ formatSimpleDate(new Date()) }}</div>
      <div>계정정보: {{ account }}</div>
    </div>
  </div>
</template>

<style scoped></style>
