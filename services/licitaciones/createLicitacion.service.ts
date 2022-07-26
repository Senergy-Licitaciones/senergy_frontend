import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { FormCrearLicitacionUser } from '@mytypes/form'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const createLicitacion:FetcherBodyAuth<{form:FormCrearLicitacionUser, user:string}, {message:string}> = async ({ form, user }, token) => {
  try {
    const { data } = await senergy.post('/licitacion/crearLicitacion', {
      title: form.title,
      description: form.description,
      tipoServicio: form.tipoServicio,
      fechaInicioApertura: form.fechaInicioApertura,
      fechaFinApertura: form.fechaFinApertura,
      numLicitacion: form.numLicitacion,
      requisitos: form.requisitos,
      estado: form.estado,
      empresa: form.empresa,
      fechaInicio: form.fechaInicio,
      fechaFin: form.fechaFin,
      puntoSum: form.puntoSum,
      brg: form.brg,
      factorPlanta: form.factorPlanta,
      meses: form.meses,
      author: form.author,
      usuario: user
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
