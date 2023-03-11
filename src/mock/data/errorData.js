import { API_ERROR } from '@/plugins/api/errorEnum'

/**
 * API 응답 에러 공용 데이터로 다른 Mock data에서 참조하여 사용한다.
 */
export const errorData = {
  UNAUTHORIZED: {
    code: API_ERROR.UNAUTHORIZED,
    message: '인증에 실패했습니다.'
  },
  PARAMETER_REQUIRED: {
    code: API_ERROR.PARAMETER_REQUIRED,
    message: '{파라미터}는 필수 입니다.'
  },
  NOT_FOUND_ACCOUNT: {
    code: API_ERROR.NOT_FOUND_ACCOUNT,
    message: '계정 정보를 찾을 수 없습니다.'
  }
}
