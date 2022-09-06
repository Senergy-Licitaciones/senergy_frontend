import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IFormCrearOfertaProveedor } from '@mytypes/form'
import swal from 'sweetalert'
import Loader from './Loader'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import EnergiaBloque from './inputs/EnergiaBloque'
import { Energia, TypeFormulaIndex } from '@mytypes/models/enums'
import FormulaIndex from './inputs/FormulaIndex'
import InputExcesoPotencia from './inputs/InputExcesoPotencia'
import PotenciaBloque from './inputs/PotenciaBloque'
import { createOferta } from '../../services/proveedores'
import { handleErrorSwal } from '../../utils/handleErrors'
import { OPTIONS_POTENCIA_FACTURAR } from '../../constants'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Input, Option, Select } from '@material-tailwind/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { crearOfertaResolver } from '@/utils/validators'
import { useState } from 'react'
const initForm:IFormCrearOfertaProveedor = {
  potencia: [],
  energiaHp: [],
  tarifaPotencia: false,
  tarifaEnergiaHp: false,
  tarifaEnergiaHfp: false,
  energiaHfp: [],
  potenciaFacturar: '',
  formulaIndexPotencia: [],
  formulaIndexEnergia: [],
  potMinFacturable: 0,
  excesoPotencia: 100,
  excesoEnergiaHp: undefined,
  excesoEnergiaHfp: undefined
}
type Props={
    idLicitacion:string,
    parametros:Array<{_id:string, name:string}>
}
export default function FormCrearOferta ({ idLicitacion, parametros }:Props) {
  const { register, watch, formState: { errors }, handleSubmit, setValue, control } = useForm<IFormCrearOfertaProveedor>({
    resolver: crearOfertaResolver,
    defaultValues: initForm
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const { data: session } = useSession()
  if (!session) return <Loader/>
  const crearOferta:SubmitHandler<IFormCrearOfertaProveedor> = async (form) => {
    try {
      setLoading(true)
      const data = await createOferta({ form, licitacion: idLicitacion }, session.accessToken)
      setLoading(false)
      swal('Operación exitosa', data.message, 'success').then(() => push('/empresaAccount/licitaciones'))
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={handleSubmit(crearOferta)} >
          <Card>
          <CardHeader className='p-4' >

                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Generar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
          </CardHeader>
          <CardBody className='grid gap-4' >

                        <PotenciaBloque watch={watch} setForm={setValue} />
                        <EnergiaBloque tipoEnergia={Energia.Hp} watch={watch} errors={errors} setForm={setValue} />
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
                        <FormulaIndex parametros={parametros} watch={watch} formula={TypeFormulaIndex.Potencia} setForm={setValue} />
                        <FormulaIndex parametros={parametros} watch={watch} formula={TypeFormulaIndex.Energia} setForm={setValue} />
                        <Input error={!!errors.potMinFacturable} {...register('potMinFacturable')} icon={<Chip className='-left-12' value="0% - 100%" />} label='Potencia Mínima Facturable' type="number" />
                        <InputExcesoPotencia errors={errors} register={register} watch={watch} />
          </CardBody>
          <CardFooter divider >
                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <Button size='lg' type="submit" >Enviar</Button>
                            }
                        </article>
          </CardFooter>
          </Card>

        </form>
  )
}
