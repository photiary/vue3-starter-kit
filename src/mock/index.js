// Mock data
import authData from '@/mock/data/authData'
import accountData from '@/mock/data/accountData'

if (JSON.parse(import.meta.env.VITE_APP_USE_MOCK)) {
  const dataList = [authData, accountData]
  dataList.forEach(data => data.init())
}
