import { AxiosResponse } from 'axios'
import { FetcherBody } from '@mytypes/fetch'
import { NumMes } from '@mytypes/form'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const uploadFile:FetcherBody<
{filename:string, form:FormData},
NumMes[]
> = async ({ filename, form }) => {
  try {
    const { data } = await senergy.post(`/user/validate-file/${filename}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }) as AxiosResponse<Array<NumMes>>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
