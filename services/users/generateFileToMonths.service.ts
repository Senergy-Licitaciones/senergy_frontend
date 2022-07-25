import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '../../types/fetch'
import { NumMes } from '../../types/form'
import { senergy } from '../../utils/fetcher.utility'
import { handleAxiosError } from '../../utils/handleErrors'

const generateFileToMonths:FetcherBodyAuth<NumMes[], {filename:string}> = async (meses, token) => {
  try {
    const { data } = await senergy.post('/user/generate-file-to-months-details', { meses }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{filename:string}>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
export default generateFileToMonths
