import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import swal from 'sweetalert'
import { updateLicitacion } from '../../services/licitaciones'
import { FormCrearLicitacionUser, HandlerSubmit } from '../../types/form'
import { handleErrorSwal } from '../../utils/handleErrors'
import { validatorCrearLicitacion } from '../../utils/validators'
import { useData } from '../hooks/useData'
import { useForm } from '../hooks/useForm'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'
import Loader from './Loader'

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    formInit:FormCrearLicitacionUser,
    id:string
}
export default function FormUpdateLicitacion ({ step, setStep, formInit, id }:Props) {
  const { form, setForm, loading, setLoading, handleChange, error } = useForm<FormCrearLicitacionUser, Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>(formInit, validatorCrearLicitacion)
  const { push } = useRouter()
  const { data: session } = useSession()
  const { brgs, puntoSums, servicios } = useData(session)
  if (!session) return <Loader/>
  const sendForm:HandlerSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = await updateLicitacion({ form, id }, session.accessToken)
      setLoading(false)
      swal('Operación exitosa', data.message, 'success').then(() => push('/userAccount/licitaciones'))
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={sendForm} className="flex-1 mb-4 md:m-0" >
          <InfoGeneral error={error} step={step} setStep={setStep} handleChange={handleChange} servicios={servicios} form={form} />
          <InfoDetallada error={error} step={step} setForm={setForm} setStep={setStep} handleChange={handleChange} form={form} />
          <EspecificacionesTecnicas error={error} update={true} brgs={brgs} form={form} handleChange={handleChange} puntoSums={puntoSums} setForm={setForm} setStep={setStep} step={step} />
          <EspecificacionMes update={true} form={form} loading={loading} setForm={setForm} setLoading={setLoading} step={step} />
        </form>
  )
}
