import { AxiosResponse } from 'axios'
import { FetcherBody } from '../../types/fetch'
import { NumMes } from '../../types/form'
import { senergy } from '../../utils/fetcher'
import handleAxiosError from '../../utils/handleErrors/handleAxiosError.utility'

const uploadFile:FetcherBody<
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
export default uploadFile
