import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect } from 'react'
import swal from 'sweetalert'
import { FormCrearLicitacionUser, HandleSubmit } from '../../types/form'
import { ErrorResponse, Response } from '../../types/hooks'
import { methodPutAuth } from '../../utils/fetch'
import validatorCrearLicitacion from '../../utils/validators/crearLicitacion.validator'
import { useData } from '../hooks/useData'
import { useForm } from '../hooks/useForm'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    formInit:FormCrearLicitacionUser,
    id:string
}
export default function FormUpdateLicitacion ({ step, setStep, formInit, id }:Props) {
  const { form, setForm, loading, setLoading, handleChange, error } = useForm<FormCrearLicitacionUser, Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'requisitos'|'description'|'meses'>>(formInit, validatorCrearLicitacion)
  const { push } = useRouter()
  const { data: session, status } = useSession()
  const { brgs, puntoSums, servicios } = useData(session)
  useEffect(() => {
    if (status === 'unauthenticated')push('/login')
  }, [])
  const sendForm:HandleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (session) {
      const data = await methodPutAuth(`licitacion/actualizarLicitacion/${id}`, session.accessToken, form) as Response|ErrorResponse
      setLoading(false)
      if ('error' in data) {
        swal('Error', data.message, 'error')
      } else {
        swal('Operación exitosa', data.message, 'success').then(() => push('/userAccount/licitaciones'))
      }
    } else {
      setLoading(false)
      push('/login')
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
