import { Dispatch, SetStateAction, useEffect } from 'react'
import { FormCrearLicitacionUser, HandleSubmit } from '../../types/form'
import { useData } from '../hooks/useData'
import { useForm } from '../hooks/useForm'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'

import { methodPostAuth } from '../../utils/fetch'
import { Response, ErrorResponse } from '../../types/hooks'
import { Estado } from '../../types/form/enums'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import validatorCrearLicitacion from '../../utils/validators/crearLicitacion.validator'
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
  const { data: session, status } = useSession()
  const { form, handleChange, setForm, loading, setLoading, error } = useForm<FormCrearLicitacionUser, Omit<FormCrearLicitacionUser, 'tipoLicitacion'|'description'|'requisitos'|'meses'>>({ ...formInit, empresa: session ? session.user.name : '' }, validatorCrearLicitacion)
  const { push } = useRouter()
  const { servicios, brgs, puntoSums } = useData(session)
  useEffect(() => {
    if (status === 'unauthenticated')push('/login')
  }, [status])
  const sendForm:HandleSubmit = async (e) => {
    console.log('ejecutando form')
    e.preventDefault()
    setLoading(true)
    if (session) {
      console.log('licitacion ', form)
      const data = await methodPostAuth('licitacion/crearLicitacion', session.accessToken, {
        title: form.title,
        description: form.description,
        tipoServicio: form.tipoServicio,
        fechaInicioApertura: form.fechaInicioApertura,
        fechaFinApertura: form.fechaFinApertura,
        numLicitacion: form.numLicitacion,
        requisitos: form.requisitos,
        estado: form.estado,
        empresa: form.empresa,
        fechaInicio: form.fechaInicio,
        fechaFin: form.fechaFin,
        puntoSum: form.puntoSum,
        brg: form.brg,
        factorPlanta: form.factorPlanta,
        meses: form.meses,
        author: form.author,
        usuario: session.user.sub
      }) as Response | ErrorResponse
      setLoading(false)
      if ('error' in data) {
        console.log('error ', data.error, ' message ', data.message)
        swal('Error', data.message, 'error')
      } else {
        console.log('mensaje ', data.message)
        swal('Proceso exitoso', data.message, 'success').then(() => {
          push('/userAccount/licitaciones')
        })
      }
    } else {
      setLoading(false)
      push('/login')
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
