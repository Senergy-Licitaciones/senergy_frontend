import { Dispatch, SetStateAction } from 'react'
import { FormCrearOfertaProveedor } from '../../../types/form'
import { convertDateToString, convertToDate } from '../../../utils'

type Props={
    form:FormCrearOfertaProveedor,
    setForm:Dispatch<SetStateAction<FormCrearOfertaProveedor>>
}
export default function PotenciaBloque ({ form, setForm }:Props) {
  const addBloque = () => {
    !form.tarifaPotencia && setForm({
      ...form,
      potencia: [...form.potencia, { fechaInicio: new Date(), fechaFin: new Date(), potencia: 0 }]
    })
  }
  return (
        <article className="flex flex-col my-4">
          <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor='potencia-bloque'>Potencia</label>
           <article className='flex justify-center' >
            <span id="potencia-bloque" onClick={addBloque} className={`bg-green-500 text-white justify-center ${form.tarifaPotencia ? 'opacity-30' : 'cursor-pointer'} flex font-bold py-2 px-4 rounded`} >Agregar Bloque</span>
           </article>
           <article className='flex items-center pl-4 py-6' >
                <input onChange={(e) => {
                  setForm({
                    ...form,
                    tarifaPotencia: e.target.checked,
                    potencia: e.target.checked ? [] : form.potencia
                  })
                }} checked={form.tarifaPotencia} type="checkbox" name="tarifaPotencia" />
                <label className='ml-4 text-sm text-gray-500' htmlFor="tarifaPotencia">Modalidad por tarifa</label>
           </article>
            {
                form.potencia.map((_el, i) => (
                    <div key={'potencia-' + i} className='flex flex-col pl-4' >
                        <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potencia">Potencia Bloque: {i + 1}</label>
                        <div className="flex justify-between py-2 ">
                            <div className='flex flex-col' >
                                <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={'fechaInicio-' + i}>Fecha de Inicio</label>
                                <input onChange={(e) => setForm({
                                  ...form,
                                  potencia: form.potencia.map((el, pos) => {
                                    if (pos === i) {
                                      return {
                                        fechaFin: el.fechaFin,
                                        potencia: el.potencia,
                                        fechaInicio: convertToDate(e.target.value)
                                      }
                                    }
                                    return el
                                  })
                                })} value={convertDateToString(form.potencia[i].fechaInicio)} name={'potencia-fechaInicio-' + i} type="date" />
                            </div>
                            <div className='flex flex-col' >
                                <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={'fechaFin-' + i}>Fecha Final</label>
                                <input onChange={(e) => {
                                  setForm({
                                    ...form,
                                    potencia: form.potencia.map((el, pos) => {
                                      if (pos === i) {
                                        return {
                                          ...el,
                                          fechaFin: convertToDate(e.target.value)
                                        }
                                      }
                                      return el
                                    })
                                  })
                                }} value={convertDateToString(form.potencia[i].fechaFin)} name={'potencia-fechaFin-' + i} type="date" />
                            </div>
                            <article className='flex flex-col' >
                              <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor="potencia-value">Energía</label>
                            <div className='flex' >
                        <input onChange={(e) => {
                          setForm({
                            ...form,
                            potencia: form.potencia.map((el, pos) => {
                              if (pos === i) {
                                return {
                                  ...el,
                                  energia: parseFloat(e.target.value)
                                }
                              }
                              return el
                            })
                          })
                        }} value={form.potencia[i].potencia} name="potencia-value" className="rounded  dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Punta" type="number" />
                        <span className="flex bg-gray-200 px-2 items-center" >US$/MWh</span>
                            </div>
                            </article>
                        </div>
                    </div>
                ))
            }
        </article>
  )
}
