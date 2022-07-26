import { Licitacion } from '../types/models'
import { convertToDate } from '../utils/formats'

export const createLicitacionByIdAdapter = (response:any):Omit<Licitacion, 'usuario'|'participantes'> => {
  return {
    _id: response._id,
    title: response.title,
    description: response.description,
    fechaInicioApertura: response.fechaInicioApertura,
    fechaFinApertura: response.fechaFinApertura,
    tipoServicio: {
      _id: response.tipoServicio._id,
      name: response.tipoServicio.name
    },
    numLicitacion: response.numLicitacion,
    requisitos: response.requisitos,
    estado: response.estado,
    empresa: response.empresa,
    fechaInicio: response.fechaInicio,
    fechaFin: response.fechaFin,
    puntoSum: {
      _id: response.puntoSum._id,
      name: response.puntoSum.name
    },
    brg: {
      _id: response.brg._id,
      name: response.brg.name
    },
    factorPlanta: response.factorPlanta,
    meses: response.meses,
    author: response.author,
    createdAt: convertToDate(response.createdAt),
    updatedAt: convertToDate(response.updatedAt)
  }
}
