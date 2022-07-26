import { Licitacion } from '@/types/models'
import { convertToDate } from '@/utils/formats'

export const createLicitacionesAdapter = (response:any[]):Licitacion[] => {
  return response.map(licitacion => {
    return {
      _id: licitacion._id,
      title: licitacion.title,
      description: licitacion.description,
      fechaInicioApertura: licitacion.fechaInicioApertura,
      fechaFinApertura: licitacion.fechaFinApertura,
      tipoServicio: {
        _id: licitacion.tipoServicio._id,
        name: licitacion.tipoServicio.name
      },
      numLicitacion: licitacion.numLicitacion,
      requisitos: licitacion.requisitos,
      estado: licitacion.estado,
      empresa: licitacion.empresa,
      fechaInicio: licitacion.fechaInicio,
      fechaFin: licitacion.fechaFin,
      puntoSum: {
        _id: licitacion.puntoSum._id,
        name: licitacion.puntoSum.name
      },
      brg: {
        _id: licitacion.brg._id,
        name: licitacion.brg.name
      },
      factorPlanta: licitacion.factorPlanta,
      meses: licitacion.meses,
      author: licitacion.author,
      usuario: licitacion.usuario,
      participantes: licitacion.participantes,
      createdAt: convertToDate(licitacion.createdAt),
      updatedAt: convertToDate(licitacion.updatedAt)
    }
  })
}
