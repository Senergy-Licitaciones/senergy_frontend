import { Dispatch, SetStateAction } from "react"
import { FormCrearLicitacionUser, HandleChange } from "../../../types/form"

type Props={
    handleChange:HandleChange,
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    form:FormCrearLicitacionUser
}
export default function InfoDetallada({handleChange,step,setStep,form}:Props){
    return(
        <div className={`dark:bg-gray-900 bg-white p-4 ${step===2 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400">Información detallada</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="numLicitacion">Número de Licitación</label>
                            <input onChange={handleChange} value={form.numLicitacion} name="numLicitacion" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Número de Licitación" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="requisitos">Requisitos</label>
                            <textarea onChange={handleChange} value={form.requisitos} name="requisitos" className="rounded dark:bg-gray-800 placeholder:text-sm" placeholder="Agregar requisitos de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="estado">Estado</label>
                            <select onChange={handleChange} value={form.estado} className="dark:bg-gray-800 dark:text-gray-400" name="estado" id="">
                                <option value="">-Seleccione un estado-</option>
                                <option value="">Cerrado</option>
                                <option value="">Abierto</option>
                            </select>
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
    )
}