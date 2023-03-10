<script setup>
import { ref } from 'vue'
import { formatSimpleDate } from '@/plugins/formatters'
import { Field } from 'vee-validate'

const email = ref('')
const password = ref('')
</script>

<template>
  <div>
    <h1>Guideline page</h1>
    <div>날짜: {{ formatSimpleDate(new Date()) }}</div>
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
  </div>
</template>

<style scoped></style>
