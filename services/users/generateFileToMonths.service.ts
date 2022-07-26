import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { NumMes } from '@mytypes/form'
import { senergy } from '../../utils/fetcher.utility'
import { handleAxiosError } from '../../utils/handleErrors'

export const generateFileToMonths:FetcherBodyAuth<NumMes[], {filename:string}> = async (meses, token) => {
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
