import { useSession } from 'next-auth/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { API } from '../../../consts/config'
import generateFileToMonths from '../../../services/users/generateFileToMonths.service'
import uploadFile from '../../../services/users/uploadFile.service'
import { FormCrearLicitacionUser, NumMes } from '../../../types/form'
import handleErrorSwal from '../../../utils/handleErrors/handleErrorSwal.utility'
import Loader from '../Loader'
type Props={
    step:number,
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    loading:boolean,
    setLoading:Dispatch<SetStateAction<boolean>>
    update?:boolean
}
export default function EspecificacionMes ({ step, form, setForm, loading, update }:Props) {
  const { data: session } = useSession()
  const [loadFile, setLoadFile] = useState<{status:boolean, filename:string, file:File|null}>({
    status: false,
    filename: '',
    file: null
  })
  if (!session) {
    return <Loader/>
  }
  const exportExcel = async () => {
    try {
      const data = await generateFileToMonths(form.meses, session.accessToken)
      setLoadFile({
        ...loadFile,
        status: true,
        filename: data.filename
      })
    } catch (err) {
      handleErrorSwal(err)
    }
  }
  const validateFile = async () => {
    try {
      const bodyForm = new FormData()
      loadFile.file && bodyForm.append('especificacionMes', loadFile.file)
      const data = await uploadFile({ filename: loadFile.filename, form: bodyForm })
      console.log('data', data)
      setForm({
        ...form,
        meses: data
      })
    } catch (err) {
      handleErrorSwal(err)
    }
  }
  return (
        <div className={`bg-white dark:bg-gray-900 p-4 ${step === 4 ? 'block' : 'hidden'}`}>
                        <p className="font-semibold dark:text-gray-400">Especificación por Mes <strong className='text-red-500' >*</strong></p>
                        <div className="max-h-96 overflow-y-auto" >
                          <div className='flex flex-col items-center ' >
                          {
                            !loadFile.status
                              ? <span className='bg-green-700 font-bold text-white py-2 px-4 cursor-pointer' onClick={exportExcel} >Exportar Excel</span>
                              : <div className='flex flex-col items-center' >
                          <a download="especificacion_mes.xlsx" href={`${API}/user/download/especificacionMes/${loadFile.filename}`} >Descargar archivo</a>
                          <article className='flex flex-col' >
                          <label htmlFor="">Subir archivo llenado</label>
                          <input accept='.xlsx' multiple={false} onChange={(e) => setLoadFile({ ...loadFile, file: e.target.files ? e.target.files[0] : null })} type="file" name="" />
                          </article>
                          <span className='cursor-pointer bg-sky-500 font-bold text-white py-2 px-4 ' onClick={validateFile} >Validar archivo</span>
                          </div>
                          }
                          </div>
                          <div className='flex items-center py-2 ' >
                          <hr className='flex-1' /><p className='text-gray-400 mx-4' >o</p><hr className='flex-1' />
                          </div>
                        <table className=" bg-gray-100 dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                            <thead>
                                <tr className="text-sm font-semibold dark:divide-gray-500 dark:text-gray-400 divide-x">

                                <th className="p-4" >MES</th>
                                <th className="p-4" >HP (MW)</th>
                                <th className="p-4" >HFP (MW)</th>
                                </tr>
                            </thead>
                            <tbody className=" dark:divide-gray-500 divide-y" >
                                {form.meses.map((mes, index) => (
                                    <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x" key={index} >
                                        <td className="p-4 text-center" >{mes.mes}</td>
                                        <td className="p-4 text-center ">
                                            <input className="bg-transparent w-24 dark:text-gray-400" onChange={(e) => setForm({
                                              ...form,
                                              meses: form.meses.map((mes, i) => {
                                                if (i === index) {
                                                  const newValue:NumMes = {
                                                    ...mes,
                                                    hp: parseFloat(e.target.value)
                                                  }
                                                  return newValue
                                                }
                                                return mes
                                              })
                                            })} value={form.meses[index].hp} type="number" />
                                        </td>
                                        <td className="p-4 text-center " >
                                            <input className="bg-transparent w-24 dark:text-gray-400" onChange={(e) => setForm({
                                              ...form,
                                              meses: form.meses.map((mes, i) => {
                                                if (i === index) {
                                                  const newValue:NumMes = {
                                                    ...mes,
                                                    hfp: parseFloat(e.target.value)
                                                  }
                                                  return newValue
                                                }
                                                return mes
                                              })
                                            })} value={form.meses[index].hfp} type="number" />
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
