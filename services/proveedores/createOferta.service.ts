import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '../../types/fetch'
import { FormCrearOfertaProveedor } from '../../types/form'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const createOferta:FetcherBodyAuth<{form:FormCrearOfertaProveedor, licitacion:string}, {message:string}> = async ({ form, licitacion }, token) => {
  try {
    const { data } = await senergy.post('/proveedor/createOferta', {
      ...form,
      excesoEnergiaHp: form.excesoPotencia > 100 ? form.excesoEnergiaHp : undefined,
      excesoEnergiaHfp: form.excesoPotencia > 100 ? form.excesoEnergiaHfp : undefined,
      licitacion
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
