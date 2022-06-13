import { Dispatch, SetStateAction, useEffect } from 'react'
import { DataSelect } from '../../../types/data'
import { FormCrearLicitacionUser, HandleChange, NumMes } from '../../../types/form'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    handleChange:HandleChange,
    form:FormCrearLicitacionUser,
    brgs:DataSelect[],
    puntoSums:DataSelect[],
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>
}
export default function EspecificacionesTecnicas ({ step, setStep, handleChange, form, puntoSums, brgs, setForm }:Props) {
  useEffect(() => {
    generateMeses()
  }, [form.fechaInicio, form.fechaFin])
  const generateMeses = () => {
    const fechaInicio = new Date(form.fechaInicio)
    const fechaFin = new Date(form.fechaFin)
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
                            <label className="text-gray-500 text-sm" htmlFor="empresa">Empresa:</label>
                            <input onChange={handleChange} value={form.empresa} name="empresa" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Nombre de Empresa" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de Inicio</label>
                            <input onChange={handleChange} value={form.fechaInicio} name="fechaInicio" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaFin">Fecha Final</label>
                            <input onChange={handleChange} value={form.fechaFin} name="fechaFin" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="puntoSum">Punto de Suministro y Medición</label>
                            <select onChange={handleChange} value={form.puntoSum} className="dark:bg-gray-800 dark:text-gray-400" name="puntoSum">
                                <option value="">-Seleccionar Punto de Suministro y Medición-</option>
                                {puntoSums.map((el) => (
                                    <option key={el._id} value={el._id}>{el.name}</option>
                                ))}
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="brg">Barra de Referencia de Generación (BRG) </label>
                            <select onChange={handleChange} value={form.brg} className="dark:bg-gray-800 dark:text-gray-400" name="brg">
                                <option value="">-Seleccionar Barra de Referencia de Generación (BRG)-</option>
                                {brgs.map((el) => (
                                    <option key={el._id} value={el._id}>{el.name}</option>
                                ))}
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="factorPlanta">Factor de Planta:</label>
                            <input onChange={handleChange} value={form.factorPlanta} name="factorPlanta" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Factor de Planta" type="number" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                    </div>
  )
}
