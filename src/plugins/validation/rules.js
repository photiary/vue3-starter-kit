import { defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { setLocale, localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ko from '@vee-validate/i18n/dist/locale/ko.json'

import validators from '@/plugins/validation/validators'

// 디폴트 룰 추가
// 참조문서: https://vee-validate.logaretm.com/v4/guide/global-validators
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

// ----------------------------------------------------------------------------
// 사용자 지정 검증 추가
// ----------------------------------------------------------------------------
defineRule('password', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true
  }
  return validators.validatePassword(value)
})

defineRule('mobilePhone', value => {
  if (!value || !value.length) {
    return true
  }
  return validators.validateMobilePhone(value)
})

// ----------------------------------------------------------------------------
// 사용자 지정 검증 추가와 함께 디폴트 언어 패키지에 메시지 추가
// ----------------------------------------------------------------------------
const enDefineRuleMessages = {
  password:
    'The {field} field must be at least 8 characters with a combination of lowercase, lowercase and special characters',
  mobilePhone: 'The {field} field must be a mobile phone number without "-"'
}
const enNames = {
  names: {
    accountId: 'Account ID',
    password: 'Password',
    email: 'Email'
  }
}
Object.assign(en.messages, enDefineRuleMessages)
Object.assign(en, enNames)

const koDefineRuleMessages = {
  password:
    '{field}는 숫자, 소문자, 대문자, 특수문자 조합으로 8자 이상이어야 합니다',
  mobilePhone: '{field}는 "-" 를 제외한 휴대전화 번호이어야 합니다'
}
const koNames = {
  names: {
    accountId: '계정 ID',
    password: '비밀번호',
    email: '이메일'
  }
}
Object.assign(ko.messages, koDefineRuleMessages)
Object.assign(ko, koNames)

// 참조문서: https://vee-validate.logaretm.com/v4/guide/i18n/
configure({
  generateMessage: localize({
    en: en,
    ko: ko
  })
})

setLocale('ko')
