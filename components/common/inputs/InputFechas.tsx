import { FormCrearLicitacionUser, HandlerChange } from '@mytypes/form'
import { ErrorsForm } from '@mytypes/validators'

type Props={
    handleChange:HandlerChange,
    form:FormCrearLicitacionUser,
    error:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>
}
export default function InputFechas ({ handleChange, error, form }:Props) {
  return (
        <>
        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de Inicio <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaInicio} name="fechaInicio" type="date" />
                            {error.fechaInicio && <p className='text-red-500 font-light text-sm' >{error.fechaInicio}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaFin">Fecha Final <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaFin} name="fechaFin" type="date" />
                            {error.fechaFin && <p className='text-red-500 font-light text-sm' >{error.fechaFin}</p> }
                        </article></>
  )
}
