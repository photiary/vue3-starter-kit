<script setup>
import { formatSimpleDate } from '@/plugins/formatters'
</script>

<template>
  <div>
    <h1>Guideline page</h1>
    <div>날짜: {{ formatSimpleDate(new Date()) }}</div>
  </div>
</template>

<style scoped></style>
