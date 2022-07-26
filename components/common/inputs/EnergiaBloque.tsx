import { Dispatch, SetStateAction } from 'react'
import { Energia } from '@mytypes/models/enums'
import { FormCrearOfertaProveedor } from '@mytypes/form'
import { ErrorsForm } from '@mytypes/validators'
import { convertDateToString, convertToDate } from '../../../utils/formats'

type Props={
    form:FormCrearOfertaProveedor,
    tipoEnergia:Energia
    setForm:Dispatch<SetStateAction<FormCrearOfertaProveedor>>
    error:ErrorsForm<Omit<FormCrearOfertaProveedor, 'excesoEnergiaHp' | 'excesoEnergiaHfp' | 'formulaIndexEnergia' | 'formulaIndexPotencia' | 'potencia' | 'energiaHp' | 'tarifaPotencia' | 'tarifaEnergiaHp' | 'tarifaEnergiaHfp' | 'energiaHfp'>>
}
export default function EnergiaBloque ({ form, setForm, tipoEnergia }:Props) {
  console.log(tipoEnergia)
  const addBloque = () => {
    const tarifa = tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp'
    !form[tarifa] &&
    setForm({
      ...form,
      [tipoEnergia]: [...form[tipoEnergia], { fechaInicio: new Date(), fechaFin: new Date(), energia: 0 }]
    })
  }
  return (
        <article className="flex flex-col my-4">
          <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={tipoEnergia + '-bloque'}>{tipoEnergia === Energia.Hp ? 'Energía en Horas Punta' : 'Energía en Horas Fuera de Punta'}</label>
           <article className='flex justify-center' >
            <span id={tipoEnergia + '-bloque'} onClick={addBloque} className={`bg-green-500  text-white justify-center ${tipoEnergia === Energia.Hp ? (form.tarifaEnergiaHp ? 'opacity-30' : 'cursor-pointer') : (form.tarifaEnergiaHfp ? 'opacity-30' : 'cursor-pointer')} flex font-bold py-2 px-4 rounded`} >Agregar Bloque</span>
           </article>
           <article className='flex items-center pl-4 py-6'>
            <input onChange={(e) => {
              setForm({
                ...form,
                [tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp']: e.target.checked,
                [tipoEnergia]: e.target.checked ? [] : form[tipoEnergia]
              })
            }} type="checkbox" checked={tipoEnergia === Energia.Hp ? form.tarifaEnergiaHp : form.tarifaEnergiaHfp} name={tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp'}/>
            <label className='ml-4 text-sm text-gray-500' htmlFor={tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp'}>Modalidad por tarifa</label>
           </article>
            {
                form[tipoEnergia].map((_el, i) => (
                    <div key={tipoEnergia + '-' + i} className='flex flex-col pl-4' >
                        <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHp">{tipoEnergia === Energia.Hp ? 'Energía en Horas Punta' : 'Energía en Horas Fuera de Punta'} Bloque: {i + 1}</label>
                        <div className="flex justify-between py-2 ">
                            <div className='flex flex-col' >
                                <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={'fechaInicio-' + i}>Fecha de Inicio</label>
                                <input onChange={(e) => setForm({
                                  ...form,
                                  [tipoEnergia]: form[tipoEnergia].map((el, pos) => {
                                    if (pos === i) {
                                      return {
                                        fechaFin: el.fechaFin,
                                        energia: el.energia,
                                        fechaInicio: convertToDate(e.target.value)
                                      }
                                    }
                                    return el
                                  })
                                })} value={convertDateToString(form[tipoEnergia][i].fechaInicio)} name={'fechaInicio-' + i} type="date" />
                            </div>
                            <div className='flex flex-col' >
                                <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={'fechaFin-' + i}>Fecha Final</label>
                                <input onChange={(e) => {
                                  setForm({
                                    ...form,
                                    [tipoEnergia]: form[tipoEnergia].map((el, pos) => {
                                      if (pos === i) {
                                        return {
                                          ...el,
                                          fechaFin: convertToDate(e.target.value)
                                        }
                                      }
                                      return el
                                    })
                                  })
                                }} value={convertDateToString(form[tipoEnergia][i].fechaFin)} name={'fechaFin-' + i} type="date" />
                            </div>
                            <article className='flex flex-col' >
                              <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={tipoEnergia}>Energía</label>
                            <div className='flex' >
                        <input onChange={(e) => {
                          setForm({
                            ...form,
                            [tipoEnergia]: form[tipoEnergia].map((el, pos) => {
                              if (pos === i) {
                                return {
                                  ...el,
                                  energia: parseFloat(e.target.value)
                                }
                              }
                              return el
                            })
                          })
                        }} value={form[tipoEnergia][i].energia} name={tipoEnergia} className="rounded  dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Punta" type="number" />
                        <span className="flex bg-gray-200 px-2 items-center" >US$/MWh</span>
                            </div>
                            </article>
                        </div>
                    </div>
                ))
            }
        </article>
  )
}
