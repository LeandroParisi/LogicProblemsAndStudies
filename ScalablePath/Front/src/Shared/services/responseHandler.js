import { toast } from 'react-toastify'

const responseHandler = (fetcher) => async (options) => {
  try {
    const response = await fetcher(options)
    if (response?.data?.message) {
      toast.success(response.data.message)
    }

    return { response: response.data.data, status: response.status }
  } catch ({ response: errorRes }) {
    toast.error(errorRes.data.error)
    return errorRes
  }
}

export default responseHandler
