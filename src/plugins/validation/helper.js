import { computed } from 'vue'
import { useIsFieldValid, useIsFormValid } from 'vee-validate'

/**
 * 필드의 검증 결과에 따라 버튼의 활성화 여부를 판단한다.
 * @returns {*} true: Form 내부의 필드 하나라도 검증을 통과하지 못한 경우, false: Form 내부의 모든 필드가 검증을 통과한 경우
 */
export function useIsDisabledByForm() {
  const isValid = useIsFormValid()
  return computed(() => {
    return !isValid.value
  })
}

/**
 * 필드의 검증 결과에 따라 버튼의 활성화 여부를 판단한다.
 * @param name 필드이름
 * @returns {*} true: 필드 하나라도 검증을 통과하지 못한 경우, false: 지정한 모든 필드가 검증을 통과한 경우
 */
export function useIsDisabledByField(...name) {
  return computed(() => {
    const disabledPath = name.find(name => {
      const isValid = useIsFieldValid(name)
      return !isValid.value
    })
    return disabledPath ? true : false
  })
}
