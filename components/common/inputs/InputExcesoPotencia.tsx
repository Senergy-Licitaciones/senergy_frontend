import { FormCrearOfertaProveedor, HandleChange } from '../../../types/form'
import { ErrorsForm } from '../../../types/validators'

type Props={
    handleChange:HandleChange,
    form:FormCrearOfertaProveedor,
    error:ErrorsForm<Omit<FormCrearOfertaProveedor, 'excesoEnergiaHp' | 'excesoEnergiaHfp' | 'formulaIndexPotencia' | 'formulaIndexEnergia'>>
}
export default function InputExcesoPotencia ({ handleChange, form, error }:Props) {
  return (
        <>
        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="excesoPotencia">Exceso de Potencia</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.excesoPotencia} name="excesoPotencia" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage MDC" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >100% - 200%</span>
                            </div>
                            {error.excesoPotencia && <p className='text-red-500 text-sm font-light' >{error.excesoPotencia}</p> }
                        </article>
                        {
                          form.excesoPotencia > 100 &&
                          <>
                            <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="excesoEnergiaHp">Exceso de Energía en Horas Punta</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.excesoEnergiaHp} name="excesoEnergiaHp" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Energía HP" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >0% - 100%</span>
                            </div>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="excesoEnergiaHfp">Exceso de Energía en Horas Fuera de Punta</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.excesoEnergiaHfp} name="excesoEnergiaHfp" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Energia HFP" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >0% - 100%</span>
                            </div>
                        </article>
                          </>
                        }
        </>
  )
}
