import { Dispatch, SetStateAction } from 'react'
import { API, useSession } from '../../../config'
import { generateFileToMonths, uploadFile } from '../../../services/users'
import { FormCrearLicitacionUser } from '../../../types/form'
import { handleErrorSwal } from '../../../utils/handleErrors'
import Loader from '../Loader'

type Props={
    loadFile:{status:boolean, filename:string, file:File|null}
    setLoadFile:Dispatch<SetStateAction<{status:boolean, filename:string, file:File|null}>>,
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>
}
export default function EspecificacionMesFile ({ loadFile, setLoadFile, form, setForm }:Props) {
  const { data: session } = useSession()
  if (!session) return <Loader/>
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
      setLoadFile({
        status: false,
        filename: '',
        file: null
      })
    } catch (err) {
      handleErrorSwal(err)
    }
  }
  return (
    <div className='flex flex-col items-center ' >
                          {
                            !loadFile.status
                              ? <span className='bg-green-700 font-bold hover:opacity-70 transition-opacity duration-300 ease-in-out text-white py-2 px-4 cursor-pointer' onClick={exportExcel} >Exportar Excel</span>
                              : <div className='flex flex-col items-center' >
                          <a className='bg-green-700 py-2 px-4 text-white font-bold text-sm transition-opacity duration-300 ease-in-out hover:opacity-70 mb-2' download="especificacion_mes.xlsx" href={`${API}/user/download/especificacionMes/${loadFile.filename}`} >Descargar archivo</a>
                          <article className='flex flex-col' >
                          <label className='text-sm text-gray-700 my-2' htmlFor="especificacionMes">Subir archivo llenado</label>
                          <input accept='.xlsx' multiple={false} onChange={(e) => setLoadFile({ ...loadFile, file: e.target.files ? e.target.files[0] : null })} type="file" name="especificacionMes" />
                          </article>
                          <span className='cursor-pointer bg-sky-500 font-bold text-white py-2 px-4 my-2 transition-opacity duration-300 ease-in-out hover:opacity-70' onClick={validateFile} >Validar archivo</span>
                          </div>
                          }
                          </div>
  )
}
