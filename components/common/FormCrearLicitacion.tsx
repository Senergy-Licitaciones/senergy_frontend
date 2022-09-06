import { Dispatch, SetStateAction, useState } from 'react'
import { IFormCrearLicitacionUser } from '@mytypes/form'
import { useData } from '../hooks/useData'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import { crearLicitacionResolver } from '../../utils/validators'
import Loader from './Loader'
import { createLicitacion } from '../../services/licitaciones'
import { handleErrorSwal } from '../../utils/handleErrors'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Estado } from '@/types/form/enums'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
}
const initForm:IFormCrearLicitacionUser = {
  author: '',
  brg: '',
  description: '',
  empresa: '',
  fechaFin: '',
  fechaInicio: '',
  estado: Estado.Abierto,
  factorPlanta: 0,
  fechaFinApertura: '',
  fechaInicioApertura: '',
  meses: [],
  numLicitacion: 0,
  requisitos: '',
  puntoSum: '',
  tipoLicitacion: '',
  tipoServicio: '',
  title: ''
}
export default function FormCrearLicitacion ({ step, setStep }:Props) {
  const { data: session } = useSession()
  const { handleSubmit, watch, register, formState: { errors }, setValue, control, getValues } = useForm<IFormCrearLicitacionUser>({
    resolver: crearLicitacionResolver,
    defaultValues: {
      ...initForm,
      empresa: session ? session.user.name : ''
    }
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { servicios, brgs, puntoSums } = useData(session)
  console.log('values', getValues())
  if (!session) return <Loader/>
  const sendForm:SubmitHandler<IFormCrearLicitacionUser> = async (data) => {
    console.log('ejecutando form')
    try {
      setLoading(true)
      console.log('licitacion ', data)
      const response = await createLicitacion({ form: data, user: session.user.sub }, session.accessToken)
      setLoading(false)
      console.log('mensaje ', response.message)
      swal('Proceso exitoso', response.message, 'success').then(() => {
        push('/userAccount/licitaciones')
      })
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(sendForm)} className="flex-1 mb-4 md:m-0">
          {
            step === 1 && servicios.length !== 0
              ? <InfoGeneral watch={watch} control={control} errors={errors} register={register} servicios={servicios} setStep={setStep} step={step} />
              : step === 2
                ? <InfoDetallada setValue={setValue} control={control} step={step} setStep={setStep} errors={errors} register={register} />
                : step === 3
                  ? <EspecificacionesTecnicas watch={watch} control={control} errors={errors} form={getValues()} setValue={setValue} register={register} update={false} step={step} setStep={setStep} brgs={brgs} puntoSums={puntoSums} />
                  : step === 4
                    ? <EspecificacionMes watch={watch} loading={loading} form={getValues()} setValue={setValue} step={step} />
                    : <Loader/>
          }
        </form>
  )
}
