import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FormCrearOfertaProveedor, HandleSubmit } from '../../types/form'
import { useForm } from '../hooks/useForm'
import swal from 'sweetalert'
import { methodPostAuth } from '../../utils/fetch'
import { ErrorResponse, Response } from '../../types/hooks'
import Loader from './Loader'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import validatorCrearOferta from '../../utils/validators/crearOferta.validator'
import EnergiaBloque from './inputs/EnergiaBloque'
import { Energia, TypeFormulaIndex } from '../../types/models/enums'
import FormulaIndex from './inputs/FormulaIndex'
import InputExcesoPotencia from './inputs/InputExcesoPotencia'
import PotenciaBloque from './inputs/PotenciaBloque'
const initForm:FormCrearOfertaProveedor = {
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
  excesoPotencia: 100
}
type Props={
    idLicitacion:string,
}
export default function FormCrearOferta ({ idLicitacion }:Props) {
  const { form, handleChange, setForm, setLoading, loading, error } = useForm<FormCrearOfertaProveedor, Omit<FormCrearOfertaProveedor, 'excesoEnergiaHp'|'excesoEnergiaHfp'|'formulaIndexEnergia'|'formulaIndexPotencia'>>(initForm, validatorCrearOferta)
  console.log('FormCrearOferta ', form)
  const { push } = useRouter()
  const { data: session } = useSession()
  const handleSubmit:HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (session) {
        setLoading(true)
        const data = await methodPostAuth('proveedor/crearOferta', session.accessToken, { ...form, excesoEnergiaHp: form.excesoPotencia > 100 ? form.excesoEnergiaHp : undefined, excesoEnergiaHfp: form.excesoPotencia > 100 ? form.excesoEnergiaHfp : undefined, licitacion: idLicitacion }) as Response|ErrorResponse
        setLoading(false)
        if ('error' in data) {
          console.log('data ', data)
          swal(data.message, data.error.toString(), 'error')
        } else {
          swal('Operación exitosa', data.message, 'success').then(() => push('/empresaAccount/licitaciones'))
        }
      } else {
        push('/login/empresa')
      }
    } catch (err) {
      console.log('error ', err)
      setLoading(false)
      swal('Ha ocurrido un error', 'Revise el formulario y vuelva a intentarlo', 'error')
    }
  }
  return (
        <form onSubmit={handleSubmit} >

        <div className={'bg-white p-4 dark:bg-gray-900 block'}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Generar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <PotenciaBloque form={form} setForm={setForm} />
                        <EnergiaBloque tipoEnergia={Energia.Hp} error={error} form={form} setForm={setForm} />
                        <EnergiaBloque error={error} form={form} setForm={setForm} tipoEnergia={Energia.Hfp} />
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="potenciaFacturar">Potencia a Facturar</label>
                            <select onChange={handleChange} value={form.potenciaFacturar} className="dark:bg-gray-800 dark:text-gray-400" name="potenciaFacturar" id="">
                                <option value="">-Seleccionar potencia a facturar-</option>
                                <option value={'MD en Horas Puntas del Mes'}>MD en Horas Puntas del Mes</option>
                                <option value={'Demanda coincidente con la Máxima'}>Demanda coincidente con la Máxima Demanda del SEIN</option>
                                <option value={'MD en Horas de Punta personalizada'}>MD en Horas de Punta personalizada</option>
                            </select>
                            {error.potenciaFacturar && <p className='text-red-500 font-light text-sm' >{error.potenciaFacturar}</p> }
                        </article>
                        <FormulaIndex form={form} formula={TypeFormulaIndex.Potencia} setForm={setForm} />
                        <FormulaIndex form={form} formula={TypeFormulaIndex.Energia} setForm={setForm} />
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potMinFacturable">Potencia Mínima Facturable</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.potMinFacturable} name="potMinFacturable" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Potencia Mínima Facturable" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >0% - 100%</span>
                            </div>
                            {error.potMinFacturable && <p className='text-red-500 text-sm font-light' >{error.potMinFacturable}</p> }
                        </article>
                        <InputExcesoPotencia error={error} form={form} handleChange={handleChange} />
                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <button type="submit" className="bg-green-600 py-2 px-4 text-white">Enviar</button>
                            }
                        </article>
                    </div>
        </form>
  )
}
