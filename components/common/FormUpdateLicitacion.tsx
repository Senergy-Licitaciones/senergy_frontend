import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import swal from 'sweetalert'
import { updateLicitacion } from '../../services/licitaciones'
import { FormCrearLicitacionUser, IFormCrearLicitacionUser } from '@mytypes/form'
import { handleErrorSwal } from '../../utils/handleErrors'
import { useData } from '../hooks/useData'
import EspecificacionesTecnicas from './componentsCrearLicitacion/EspecificacionesTecnicas'
import EspecificacionMes from './componentsCrearLicitacion/EspecificacionMes'
import InfoDetallada from './componentsCrearLicitacion/InfoDetallada'
import InfoGeneral from './componentsCrearLicitacion/InfoGeneral'
import Loader from './Loader'
import { SubmitHandler, useForm } from 'react-hook-form'
import { crearLicitacionResolver } from '@/utils/validators'

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    formInit:FormCrearLicitacionUser,
    id:string
}
export default function FormUpdateLicitacion ({ step, setStep, formInit, id }:Props) {
  const { handleSubmit, register, control, watch, formState: { errors }, setValue, getValues } = useForm<IFormCrearLicitacionUser>({
    resolver: crearLicitacionResolver,
    defaultValues: {
      ...formInit
    }
  })
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const { brgs, puntoSums, servicios } = useData(session)
  if (!session) return <Loader/>
  const sendForm:SubmitHandler<IFormCrearLicitacionUser> = async (data) => {
    try {
      setLoading(true)
      const response = await updateLicitacion({ form: data, id }, session.accessToken)
      setLoading(false)
      swal('Operación exitosa', response.message, 'success').then(() => push('/userAccount/licitaciones'))
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(sendForm)} className="flex-1 mb-4 md:m-0" >
      {
        step === 1 && servicios.length !== 0
          ? <InfoGeneral watch={watch} control={control} errors={errors} register={register} servicios={servicios} setStep={setStep} step={step} />
          : step === 2
            ? <InfoDetallada setValue={setValue} control={control} step={step} setStep={setStep} errors={errors} register={register} />
            : step === 3
              ? <EspecificacionesTecnicas watch={watch} control={control} errors={errors} form={getValues()} setValue={setValue} register={register} update={true} step={step} setStep={setStep} brgs={brgs} puntoSums={puntoSums} />
              : step === 4
                ? <EspecificacionMes update watch={watch} loading={loading} form={getValues()} setValue={setValue} step={step} />
                : <Loader/>
            }
        </form>
  )
}
