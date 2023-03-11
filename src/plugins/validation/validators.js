/** 숫자, 소문자, 대문자, 특수문자 조합으로 8자 이상 */
const REG_EXP_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}/
/** 대한민국 휴대폰 번호 */
const REG_EXP_MOBILE_PHONE = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/

function validatePassword(value) {
  return REG_EXP_PASSWORD.test(value)
}
function validateMobilePhone(value) {
  return REG_EXP_MOBILE_PHONE.test(value)
}

export default {
  REG_EXP_PASSWORD,
  validatePassword,
  REG_EXP_MOBILE_PHONE,
  validateMobilePhone
}
