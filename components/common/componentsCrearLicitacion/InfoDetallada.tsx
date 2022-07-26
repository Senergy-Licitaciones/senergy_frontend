import { Dispatch, SetStateAction } from 'react'
import { OPTIONS_ESTADO } from '../../../consts'
import { FormCrearLicitacionUser, HandlerChange } from '../../../types/form'
import { ErrorsForm } from '../../../types/validators'
import generateNumber from '../../../utils/generateNumber.utility'
import InputSelect from '../inputs/InputSelect'

type Props={
    handleChange:HandlerChange,
    step:number,
    error:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>
    setStep:Dispatch<SetStateAction<number>>,
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>
}
export default function InfoDetallada ({ handleChange, step, setStep, form, setForm, error }:Props) {
  return (
        <div className={`dark:bg-gray-900 bg-white p-4 ${step === 2 ? 'block' : 'hidden'}`}>
                        <p className="font-semibold dark:text-gray-400">Información detallada</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="numLicitacion">Número de Licitación <strong className='text-red-500' >*</strong></label>
                            <div className='flex' >
                            <input onChange={handleChange} value={form.numLicitacion} name="numLicitacion" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Número de Licitación" type="number" />
                            <span onClick={() => setForm({ ...form, numLicitacion: generateNumber(5) })} className='flex px-2 bg-sky-500 transition-color duration-300 ease-in-out text-white justify-center items-center cursor-pointer hover:bg-sky-700' >Generar número</span>
                            </div>
                            {error.numLicitacion && <p className='text-red-500 font-light text-sm' >{error.numLicitacion}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="requisitos">Requisitos</label>
                            <textarea onChange={handleChange} value={form.requisitos} name="requisitos" className="rounded dark:bg-gray-800 placeholder:text-sm" placeholder="Agregar requisitos de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <InputSelect error={error.estado} handleChange={handleChange} label="Estado" name='estado' options={OPTIONS_ESTADO} value={form.estado} />
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="author">Responsable de Licitación <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.author} name="author" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Nombre completo" type="text" />
                            {error.author && <p className='text-red-500 font-light text-sm' >{error.author}</p> }
                        </article>
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                    </div>
  )
}
