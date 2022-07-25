import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { DataSelect } from '../../../types/data'
import { FormCrearLicitacionUser, HandleChange, NumMes } from '../../../types/form'
import { ErrorsForm } from '../../../types/validators'
import { convertToDate } from '../../../utils'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    handleChange:HandleChange,
    error:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>
    form:FormCrearLicitacionUser,
    brgs:DataSelect[],
    puntoSums:DataSelect[],
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    update?:boolean
}
export default function EspecificacionesTecnicas ({ step, setStep, handleChange, form, puntoSums, brgs, setForm, update, error }:Props) {
  const isMount = useRef(true)
  useEffect(() => {
    if (update) {
      if (isMount.current === false)generateMeses()
    } else {
      generateMeses()
    }
    isMount.current = false
  }, [form.fechaInicio, form.fechaFin])
  const generateMeses = () => {
    const fechaInicio = convertToDate(form.fechaInicio)
    const fechaFin = convertToDate(form.fechaFin)
    if (fechaFin > fechaInicio) {
      const array:NumMes[] = []
      do {
        array.push({
          mes: `${fechaInicio.getMonth() + 1}/${fechaInicio.getFullYear()}`,
          hp: 0,
          hfp: 0
        })
        if (fechaInicio.getMonth() + 1 > 11) {
          fechaInicio.setFullYear(fechaInicio.getFullYear() + 1)
          fechaInicio.setMonth(0)
        } else {
          fechaInicio.setMonth(fechaInicio.getMonth() + 1)
        }
      // eslint-disable-next-line no-unmodified-loop-condition
      } while (fechaInicio <= fechaFin)
      setForm({
        ...form,
        meses: array
      })
    }
  }
  return (
        <div className={`bg-white dark:bg-gray-900 p-4 ${step === 3 ? 'block' : 'hidden'}`}>
                        <p className="font-semibold dark:text-gray-400 ">Especificaciones Técnicas</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="empresa">Razón Social <strong className='text-red-500' >*</strong></label>
                            <input disabled value={form.empresa} name="empresa" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Nombre de Empresa" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de Inicio <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaInicio} name="fechaInicio" type="date" />
                            {error.fechaInicio && <p className='text-red-500 font-light text-sm' >{error.fechaInicio}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaFin">Fecha Final <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaFin} name="fechaFin" type="date" />
                            {error.fechaFin && <p className='text-red-500 font-light text-sm' >{error.fechaFin}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="puntoSum">Punto de Suministro y Medición <strong className='text-red-500' >*</strong></label>
                            <select onChange={handleChange} value={form.puntoSum} className="dark:bg-gray-800 dark:text-gray-400" name="puntoSum">
                                <option value="">-Seleccionar Punto de Suministro y Medición-</option>
                                {puntoSums.map((el) => (
                                    <option key={el._id} value={el._id}>{el.name}</option>
                                ))}
                            </select>
                            {error.puntoSum && <p className='text-red-500 font-light text-sm' >{error.puntoSum}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="brg">Barra de Referencia de Generación (BRG) <strong className='text-red-500' >*</strong></label>
                            <select onChange={handleChange} value={form.brg} className="dark:bg-gray-800 dark:text-gray-400" name="brg">
                                <option value="">-Seleccionar Barra de Referencia de Generación (BRG)-</option>
                                {brgs.map((el) => (
                                    <option key={el._id} value={el._id}>{el.name}</option>
                                ))}
                            </select>
                            {error.brg && <p className='text-red-500 font-light text-sm' >{error.brg}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="factorPlanta">Factor de Planta <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.factorPlanta} name="factorPlanta" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Factor de Planta" type="number" />
                            {error.factorPlanta && <p className='text-red-500 text-sm font-light' >{error.factorPlanta}</p> }
                        </article>
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                    </div>
  )
}
