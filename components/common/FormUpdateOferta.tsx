import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FormCrearOfertaProveedor, HandlerSubmit } from '@mytypes/form'
import { useForm } from '../hooks/useForm'
import swal from 'sweetalert'
import Loader from './Loader'
import { useRouter } from 'next/router'
import { Oferta } from '@mytypes/models'
import { useSession } from 'next-auth/react'
import { validatorCrearOferta } from '../../utils/validators'
import { editOferta } from '../../services/ofertas'
import { handleErrorSwal } from '../../utils/handleErrors'
import PotenciaBloque from './inputs/PotenciaBloque'
import EnergiaBloque from './inputs/EnergiaBloque'
import { Energia, TypeFormulaIndex } from '@mytypes/models/enums'
import FormulaIndex from './inputs/FormulaIndex'
import InputExcesoPotencia from './inputs/InputExcesoPotencia'
import InputSelect from './inputs/InputSelect'
import { OPTIONS_POTENCIA_FACTURAR } from '../../constants'
type Props={
    oferta:Oferta
}
export default function FormUpdateOferta ({ oferta }:Props) {
  console.log('oferta ', oferta)
  const { form, handleChange, setForm, setLoading, loading, error } = useForm<FormCrearOfertaProveedor, Omit<FormCrearOfertaProveedor, 'excesoEnergiaHp'|'excesoEnergiaHfp'|'formulaIndexEnergia'|'formulaIndexPotencia'|'tarifaPotencia'|'tarifaEnergiaHp'|'tarifaEnergiaHfp'|'potencia'|'energiaHp'|'energiaHfp'>>({
    potencia: oferta.potencia,
    energiaHp: oferta.energiaHp,
    energiaHfp: oferta.energiaHfp,
    tarifaEnergiaHfp: oferta.tarifaEnergiaHfp,
    tarifaPotencia: oferta.tarifaPotencia,
    tarifaEnergiaHp: oferta.tarifaEnergiaHp,
    potenciaFacturar: oferta.potenciaFacturar,
    formulaIndexPotencia: oferta.formulaIndexPotencia,
    formulaIndexEnergia: oferta.formulaIndexEnergia,
    potMinFacturable: oferta.potMinFacturable,
    excesoPotencia: oferta.excesoPotencia,
    excesoEnergiaHp: oferta.excesoEnergiaHp,
    excesoEnergiaHfp: oferta.excesoEnergiaHfp
  }, validatorCrearOferta)

  const { push } = useRouter()
  const { data: session } = useSession()
  if (!session) return <Loader/>

  const handleSubmit:HandlerSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const data = await editOferta({ form, id: oferta._id }, session.accessToken)
      setLoading(false)

      swal('Operaci??n exitosa', data.message, 'success').then(() => push('/empresaAccount/licitaciones/historialOfertas'))
    } catch (err) {
      setLoading(false)
      handleErrorSwal(err)
    }
  }
  return (
        <form onSubmit={handleSubmit} >

        <div className={'bg-white p-4 dark:bg-gray-900 block'}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Editar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <PotenciaBloque form={form} setForm={setForm} />
                        <EnergiaBloque error={error} form={form} setForm={setForm} tipoEnergia={Energia.Hp} />
                        <EnergiaBloque error={error} form={form} setForm={setForm} tipoEnergia={Energia.Hfp} />
                        <InputSelect error={error.potenciaFacturar} handleChange={handleChange} label="Potencia a facturar" name='potenciaFacturar' options={OPTIONS_POTENCIA_FACTURAR} value={form.potenciaFacturar} />
                        <FormulaIndex form={form} setForm={setForm} formula={TypeFormulaIndex.Potencia} />
                        <FormulaIndex form={form} setForm={setForm} formula={TypeFormulaIndex.Energia} />
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potMinFacturable">Potencia M??nima Facturable</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.potMinFacturable} name="potMinFacturable" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Potencia M??nima Facturable" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >0% - 100%</span>
                            </div>
                            {error.potMinFacturable && <p className='text-red-500 font-light text-sm' >{error.potMinFacturable}</p> }
                        </article>
                        <InputExcesoPotencia error={error} form={form} handleChange={handleChange} />
                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <button type="submit" className="bg-green-600 py-2 px-4 text-white">Actualizar</button>
                            }
                        </article>
                    </div>
        </form>
  )
}
