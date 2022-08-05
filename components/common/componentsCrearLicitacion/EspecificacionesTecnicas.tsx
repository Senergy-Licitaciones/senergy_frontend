import { Dispatch, SetStateAction } from 'react'
import { DataSelect } from '@mytypes/models'
import { FormCrearLicitacionUser, HandlerChange } from '@mytypes/form'
import { ErrorsForm } from '@mytypes/validators'
import InputSelect from '../inputs/InputSelect'
import { useMeses } from '../../hooks/useMeses'
import InputFechas from '../inputs/InputFechas'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    handleChange:HandlerChange,
    error:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>
    form:FormCrearLicitacionUser,
    brgs:DataSelect[],
    puntoSums:DataSelect[],
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    handleChangeNumber:HandlerChange,
    update:boolean
}
export default function EspecificacionesTecnicas ({ step, setStep, handleChangeNumber, handleChange, form, puntoSums, brgs, setForm, update, error }:Props) {
  useMeses(update, form, setForm)
  return (
        <div className={`bg-white dark:bg-gray-900 p-4 ${step === 3 ? 'block' : 'hidden'}`}>
                        <p className="font-semibold dark:text-gray-400 ">Especificaciones Técnicas</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="empresa">Razón Social <strong className='text-red-500' >*</strong></label>
                            <input disabled value={form.empresa} name="empresa" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Nombre de Empresa" type="text" />
                        </article>
                       <InputFechas error={error} form={form} handleChange={handleChange} />
                        <InputSelect error={error.puntoSum} handleChange={handleChange} label="Punto de Suministro y Medición" name='puntoSum' options={puntoSums.map((item) => ({ value: item._id, label: item.name }))} value={form.puntoSum} />
                        <InputSelect error={error.brg} handleChange={handleChange} label="Barra de Referencia de Generación (BRG)" name='brg' options={brgs.map((item) => ({ value: item._id, label: item.name }))} value={form.brg} />
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="factorPlanta">Factor de Planta <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChangeNumber} value={form.factorPlanta} name="factorPlanta" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Factor de Planta" type="number" />
                            {error.factorPlanta && <p className='text-red-500 text-sm font-light' >{error.factorPlanta}</p> }
                        </article>
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                    </div>
  )
}
