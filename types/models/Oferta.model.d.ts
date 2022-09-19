import { FormCrearOfertaProveedor } from '../form'
import { Licitacion } from './Licitacion.model'

export interface Oferta extends FormCrearOfertaProveedor{
    _id:string,
    proveedor:string,
    licitacion:Partial<Licitacion>,
    createdAt:Date,
    updatedAt:Date
}
export interface OfertaById extends Omit<Oferta, 'licitacion'>{
    licitacion:string
}
