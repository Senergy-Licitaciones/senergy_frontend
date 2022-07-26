import { Info } from '@mytypes/models'

export const createInfoUserDashboardAdapter = (response:any):Info => {
  return {
    address: response.address,
    correo: response.correo,
    empresa: response.empresa,
    lastLicitacion: response.lastLicitacion,
    lastProvider: response.lastProvider,
    numLicitaciones: response.numLicitaciones,
    numParticipantes: response.numParticipantes,
    phone: response.phone
  }
}
