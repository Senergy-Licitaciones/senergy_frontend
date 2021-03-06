import { Dispatch, SetStateAction } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { DataSelect } from '@mytypes/models'
import { FormCrearLicitacionUser, HandlerChange } from '@mytypes/form'
import { ErrorsForm } from '@mytypes/validators'
import InputSelect from '../inputs/InputSelect'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    handleChange:HandlerChange,
    error:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>
    form:FormCrearLicitacionUser,
    servicios:DataSelect[]
}
export default function InfoGeneral ({ step, setStep, handleChange, form, servicios, error }:Props) {
  return (
        <div className={`bg-white p-4 dark:bg-gray-900 ${step === 1 ? 'block' : 'hidden'}`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Información general</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="title">Título de licitación <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.title} name="title" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                            {error.title && <p className='text-red-500 font-light text-sm' >{error.title}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 2xl:text-lg text-sm dark:text-gray-400" htmlFor="description">Descripción de licitación</label>
                            <textarea onChange={handleChange} value={form.description} name="description" className="dark:bg-gray-800 dark:text-gray-400 rounded 2xl:placeholder:text-lg placeholder:text-sm" placeholder="Agregar descripción de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaInicioApertura">Fecha de inicio de Apertura <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaInicioApertura} className="dark:bg-gray-800 dark:text-gray-400  " name="fechaInicioApertura" type="date" />
                            {error.fechaInicioApertura && <p className='text-red-500 font-light text-sm' >{error.fechaInicioApertura}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaFinApertura">Fecha de fin de Apertura <strong className='text-red-500' >*</strong></label>
                            <input onChange={handleChange} value={form.fechaFinApertura} className="dark:bg-gray-800 dark:text-gray-400  " name="fechaFinApertura" type="date" />
                            {error.fechaFinApertura && <p className='text-red-500 font-light text-sm' >{error.fechaFinApertura}</p> }
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoLicitacion">Tipo de Licitación</label>
                            <select onChange={handleChange} value={form.tipoLicitacion} className="dark:bg-gray-800 dark:text-gray-400" name="tipoLicitacion" id="">
                                <option value="">-Seleccionar un tipo de Licitación</option>
                                <option value="Tipo01">Licitación Tipo 01</option>
                                <option value="Tipo02">Licitación Tipo 02</option>
                                <option value="Tipo03">Licitación Tipo 03</option>
                            </select>
                        </article>
                        <InputSelect error={error.tipoServicio} handleChange={handleChange} label="Tipo de Servicio" name='tipoServicio' options={servicios.map((item) => ({ label: item.name, value: item.name }))} value={form.tipoServicio} />
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                    </div>
  )
}
