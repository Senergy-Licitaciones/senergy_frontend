import { Licitacion } from '@/types/models'

export const createLicitacionesAdapter = (response:any[]):Omit<Licitacion, 'tipoServicio'|'brg'|'puntoSum'>[] => {
  return response.map(licitacion => {
    return {
      _id: licitacion._id,
      title: licitacion.title,
      description: licitacion.description,
      fechaInicioApertura: licitacion.fechaInicioApertura,
      fechaFinApertura: licitacion.fechaFinApertura,
      numLicitacion: licitacion.numLicitacion,
      requisitos: licitacion.requisitos,
      estado: licitacion.estado,
      empresa: licitacion.empresa,
      fechaInicio: licitacion.fechaInicio,
      fechaFin: licitacion.fechaFin,
      factorPlanta: licitacion.factorPlanta,
      meses: licitacion.meses,
      author: licitacion.author,
      usuario: licitacion.usuario,
      participantes: licitacion.participantes,
      createdAt: new Date(licitacion.createdAt),
      updatedAt: new Date(licitacion.updatedAt)
    }
  })
}
