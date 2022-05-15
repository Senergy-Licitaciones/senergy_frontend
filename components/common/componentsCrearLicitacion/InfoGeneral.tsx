import { Dispatch, SetStateAction } from "react";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import { DataSelect } from "../../../types/data";
import { FormCrearLicitacionUser, HandleChange } from "../../../types/form";
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    handleChange:HandleChange,
    form:FormCrearLicitacionUser,
    servicios:DataSelect[]
}
export default function InfoGeneral({step,setStep,handleChange,form,servicios}:Props){
    return(
        <div className={`bg-white p-4 dark:bg-gray-900 ${step===1 ?"block":"hidden"}`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Información general</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="title">Título de licitación</label>
                            <input onChange={handleChange} value={form.title} name="title" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 2xl:text-lg text-sm dark:text-gray-400" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea onChange={handleChange} value={form.description} name="descripcionLicitacion" className="dark:bg-gray-800 dark:text-gray-400 rounded 2xl:placeholder:text-lg placeholder:text-sm" placeholder="Agregar descripción de licitación"  id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaInicioApertura">Fecha de inicio de Apertura</label>
                            <input onChange={handleChange} value={form.fechaInicioApertura}  className="dark:bg-gray-800 dark:text-gray-400  " name="fechaInicioApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaFinApertura">Fecha de fin de Apertura</label>
                            <input onChange={handleChange} value={form.fechaFinApertura} className="dark:bg-gray-800 dark:text-gray-400  " name="fechaFinApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoLicitacion">Tipo de Licitación</label>
                            <select onChange={handleChange} value={form.tipoLicitacion} className="dark:bg-gray-800 dark:text-gray-400" name="tipoLicitacion" id="">
                                <option value="">-Seleccionar un tipo de Licitación</option>
                                
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoServicio">Tipo de Servicio</label>
                            <select onChange={handleChange} value={form.tipoServicio} className="dark:bg-gray-800 dark:text-gray-400" name="tipoServicio" id="">
                                <option value="">-Seleccionar un tipo de Servicio</option>
                                {servicios.map((el)=>(
                                    <option key={el._id} value={el._id}>{el.name}</option>
                                ))}
                            </select>
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
    )
}