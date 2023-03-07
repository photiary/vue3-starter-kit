import dayjs from 'dayjs'

// -----------------------------------------------------------------------------
// 날짜
// -----------------------------------------------------------------------------
/**
 * Date를 "YYYY.MM.DD"로 변환한다. Date가 없으면 "----.--.--"로 반환한다.
 * @param {Date} date 날짜 객체
 * @returns {string} 형식이 지정된 날짜
 */
export const formatSimpleDate = date => {
  if (date) {
    return dayjs(date).format('YYYY.MM.DD')
  }
  return '----.--.--'
}

// -----------------------------------------------------------------------------
// 숫자
// -----------------------------------------------------------------------------
export const formatSimpleNumber = number => {
  return new Intl.NumberFormat().format(number)
}
