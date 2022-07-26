import { InfoDashboardProveedor } from '../types/models'

export const createInfoDashboardAdapter = (response:any):InfoDashboardProveedor => {
  return {
    licitaciones: response.licitaciones,
    numLicitaciones: response.numLicitaciones,
    numOfertas: response.numOfertas,
    ofertas: response.ofertas,
    plan: response.plan,
    timeToExpireLic: response.timeToExpireLic
  }
}
