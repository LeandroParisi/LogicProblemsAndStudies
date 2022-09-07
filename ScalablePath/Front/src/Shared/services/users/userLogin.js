import api from '../api'
import getRoute from '../config'
import responseHandler from '../responseHandler'

const { url, method } = getRoute('users', 'login')

const userLogin = async (options) => {
  const response = await api({
    ...options, url, method,
  })
  return response
}
export default responseHandler(userLogin)
