import { Dispatch, SetStateAction, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { HEADS_TABLE_ESPECIFICACION_MES } from '../../../consts'
import { FormCrearLicitacionUser } from '../../../types/form'
import EspecificacionEnergia from '../inputs/EspecificacionEnergia'
import EspecificacionMesFile from '../inputs/EspecificacionMesFile'
import Loader from '../Loader'
import TableHead from '../tables/TableHead'
type Props={
    step:number,
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    loading:boolean,
    setLoading:Dispatch<SetStateAction<boolean>>
    update?:boolean
}
export default function EspecificacionMes ({ step, form, setForm, loading, update }:Props) {
  const [loadFile, setLoadFile] = useState<{status:boolean, filename:string, file:File|null}>({
    status: false,
    filename: '',
    file: null
  })
  return (
        <div className={`bg-white dark:bg-gray-900 p-4 ${step === 4 ? 'block' : 'hidden'}`}>
                        <p className="font-semibold dark:text-gray-400">Especificación por Mes <strong className='text-red-500' >*</strong></p>
                        <div className="max-h-96 overflow-y-auto" >
                          <EspecificacionMesFile form={form} loadFile={loadFile} setForm={setForm} setLoadFile={setLoadFile} />
                          <div className='flex items-center py-2 ' >
                          <hr className='flex-1' /><p className='text-gray-400 mx-4' >o</p><hr className='flex-1' />
                          </div>
                        <table className=" bg-gray-100 dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                            <TableHead heads={HEADS_TABLE_ESPECIFICACION_MES} />
                            <tbody className=" dark:divide-gray-500 divide-y" >
                                {form.meses.map((mes, index) => (
                                    <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x" key={index} >
                                        <td className="p-4 text-center" >{mes.mes}</td>
                                        <td className="p-4 text-center ">
                                            <EspecificacionEnergia form={form} index={index} setForm={setForm} typeEnergia="hp" />
                                        </td>
                                        <td className="p-4 text-center " >
                                            <EspecificacionEnergia form={form} index={index} setForm={setForm} typeEnergia="hfp" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>

                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <button type="submit" className="bg-green-600 flex items-center group py-2 px-4 text-white">
                                <span className="flex items-center transition-all duration-300 text-2xl mr-4 group-hover:animate-bounce justify-center" >
                                    <AiFillCheckCircle/>
                                </span>
                                <p>{update ? 'Actualizar licitación' : 'Crear licitación'}</p>
                            </button>
                            }
                        </article>
                    </div>
  )
}
