import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IFormCrearOfertaProveedor } from '@mytypes/form'
import swal from 'sweetalert'
import Loader from './Loader'
import { useRouter } from 'next/router'
import { Oferta } from '@mytypes/models'
import { useSession } from 'next-auth/react'
import { crearOfertaResolver } from '../../utils/validators'
import { editOferta } from '../../services/ofertas'
import { handleErrorSwal } from '../../utils/handleErrors'
import PotenciaBloque from './inputs/PotenciaBloque'
import EnergiaBloque from './inputs/EnergiaBloque'
import { Energia, TypeFormulaIndex } from '@mytypes/models/enums'
import FormulaIndex from './inputs/FormulaIndex'
import InputExcesoPotencia from './inputs/InputExcesoPotencia'
import { OPTIONS_POTENCIA_FACTURAR } from '../../constants'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Input, Option, Select } from '@material-tailwind/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
type Props={
    oferta:Oferta,
    parametros:Array<{_id:string, name:string}>
}
export default function FormUpdateOferta ({ oferta, parametros }:Props) {
  const { register, watch, formState: { errors }, handleSubmit, setValue, control } = useForm<IFormCrearOfertaProveedor>({
    resolver: crearOfertaResolver,
    defaultValues: oferta
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { data: session } = useSession()
  if (!session) return <Loader/>

  const onSubmit:SubmitHandler<IFormCrearOfertaProveedor> = async (form) => {
    try {
      setLoading(true)
      const data = await editOferta({ form, id: oferta._id }, session.accessToken)
      setLoading(false)

      swal('Operación exitosa', data.message, 'success').then(() => push('/empresaAccount/licitaciones/historialOfertas'))
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} >
          <Card>
            <CardHeader className='p-4' >

                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Editar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
            </CardHeader>
            <CardBody className='grid gap-4' >
                        <PotenciaBloque watch={watch} setForm={setValue} />
                        <EnergiaBloque errors={errors} setForm={setValue} watch={watch} tipoEnergia={Energia.Hp} />
                        <EnergiaBloque errors={errors} watch={watch} setForm={setValue} tipoEnergia={Energia.Hfp} />
          <Controller name='potenciaFacturar' control={control} render={({ field }) => (
            <Select label='Potencia a Facturar' {...field} error={!!errors.potenciaFacturar} >
              {
                OPTIONS_POTENCIA_FACTURAR.map((option, i) => (
                  <Option key={option.value + '-' + i} value={option.value} >{option.label}</Option>
                ))
              }
            </Select>
          )} />
                        <FormulaIndex parametros={parametros} watch={watch} setForm={setValue} formula={TypeFormulaIndex.Potencia} />
                        <FormulaIndex parametros={parametros} watch={watch} setForm={setValue} formula={TypeFormulaIndex.Energia} />
          <Input error={!!errors.potMinFacturable} {...register('potMinFacturable')} icon={<Chip className='-left-12' value="0% - 100%" />} label='Potencia Mínima Facturable' type="number" />

                        <InputExcesoPotencia errors={errors} register={register} watch={watch} />
            </CardBody>
            <CardFooter divider >
                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <Button type="submit" size="lg">Actualizar</Button>
                            }
                        </article>
            </CardFooter>
          </Card>
        </form>
  )
}
