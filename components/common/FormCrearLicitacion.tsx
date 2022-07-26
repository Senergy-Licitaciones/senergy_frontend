import { Dispatch, SetStateAction } from 'react'
import { FormCrearLicitacionUser, HandlerSubmit } from '../../types/form'
import { useData } from '../hooks/useData'
import { useForm } from '../hooks/useForm'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'

import { Estado } from '../../types/form/enums'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import { validatorCrearLicitacion } from '../../utils/validators'
import Loader from './Loader'
import { createLicitacion } from '../../services/licitaciones'
import { handleErrorSwal } from '../../utils/handleErrors'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
}

const formInit:FormCrearLicitacionUser = {
  title: '',
  description: '',
  tipoLicitacion: '',
  tipoServicio: '',
  fechaInicioApertura: '',
  fechaFinApertura: '',
  numLicitacion: 0,
  requisitos: '',
  estado: Estado.Cerrado,
  empresa: '',
  fechaInicio: '',
  fechaFin: '',
  puntoSum: '',
  author: '',
  brg: '',
  factorPlanta: 0,
  meses: []
}
export default function FormCrearLicitacion ({ step, setStep }:Props) {
  const { data: session } = useSession()
  const { form, handleChange, setForm, loading, setLoading, error } = useForm<FormCrearLicitacionUser, Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'description'|'requisitos'|'meses'>>({ ...formInit, empresa: session ? session.user.name : '' }, validatorCrearLicitacion)
  const { push } = useRouter()
  if (!session) return <Loader/>
  const { servicios, brgs, puntoSums } = useData(session)
  const sendForm:HandlerSubmit = async (e) => {
    console.log('ejecutando form')
    e.preventDefault()
    try {
      setLoading(true)
      console.log('licitacion ', form)
      const data = await createLicitacion({ form, user: session.user.sub }, session.accessToken)
      setLoading(false)
      console.log('mensaje ', data.message)
      swal('Proceso exitoso', data.message, 'success').then(() => {
        push('/userAccount/licitaciones')
      })
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={sendForm} className="flex-1 mb-4 md:m-0">
                    <InfoGeneral error={error} servicios={servicios} setStep={setStep} step={step} handleChange={handleChange} form={form} />
                    <InfoDetallada error={error} setForm={setForm} handleChange={handleChange} step={step} setStep={setStep} form={form} />
                    <EspecificacionesTecnicas error={error} step={step} setForm={setForm} setStep={setStep} form={form} handleChange={handleChange} brgs={brgs} puntoSums={puntoSums} />
                    <EspecificacionMes loading={loading} setLoading={setLoading} form={form} step={step} setForm={setForm} />
        </form>
  )
}
