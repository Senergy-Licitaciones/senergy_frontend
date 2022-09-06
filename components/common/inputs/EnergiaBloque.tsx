import { Energia } from '@mytypes/models/enums'
import { IFormCrearOfertaProveedor } from '@mytypes/form'
import { convertDateToString, convertToDate } from '../../../utils/formats'
import { Button, Checkbox, Chip, Input } from '@material-tailwind/react'
import { FieldErrorsImpl, UseFormSetValue, UseFormWatch } from 'react-hook-form'

type Props={
    watch:UseFormWatch<IFormCrearOfertaProveedor>,
    tipoEnergia:Energia
    setForm:UseFormSetValue<IFormCrearOfertaProveedor>,
    errors:FieldErrorsImpl<IFormCrearOfertaProveedor>
}
export default function EnergiaBloque ({ watch, setForm, tipoEnergia }:Props) {
  console.log(tipoEnergia)
  const addBloque = () => {
    const tarifa = tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp'
    !watch(tarifa) &&
    setForm(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp', [...watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp'), { fechaInicio: new Date(), fechaFin: new Date(), energia: 0 }])
  }
  return (
        <article className="flex flex-col my-4">
          <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor={tipoEnergia + '-bloque'}>{tipoEnergia === Energia.Hp ? 'Energía en Horas Punta' : 'Energía en Horas Fuera de Punta'}</label>
           <div className='flex justify-center' >
            <Button disabled={tipoEnergia === Energia.Hp && watch('tarifaEnergiaHp') ? true : !!(tipoEnergia === Energia.Hfp && watch('tarifaEnergiaHfp'))} onClick={addBloque} >Agregar Bloque</Button>
           </div>
      <Checkbox onChange={(e) => {
        setForm(tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp', e.target.checked)
        setForm(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp', e.target.checked ? [] : watch(tipoEnergia))
      }} id={tipoEnergia + '-tarifa'} checked={tipoEnergia === Energia.Hp ? watch('tarifaEnergiaHp') : watch('tarifaEnergiaHfp')} name={tipoEnergia === Energia.Hp ? 'tarifaEnergiaHp' : 'tarifaEnergiaHfp'} label='Modalidad por Tarifa en Energía' />

            {
                watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp').map((_el, i) => (
                    <div key={tipoEnergia + '-' + i} className='flex flex-col pl-4' >
                        <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHp">{tipoEnergia === Energia.Hp ? 'Energía en Horas Punta' : 'Energía en Horas Fuera de Punta'} Bloque: {i + 1}</label>
                        <div className="grid grid-flow-col gap-24 py-2 ">
                      <Input onChange={(e) => setForm(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp', watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp').map((el, pos) => {
                        if (pos === i) {
                          return {
                            fechaFin: el.fechaFin,
                            energia: el.energia,
                            fechaInicio: convertToDate(e.target.value)
                          }
                        }
                        return el
                      })
                      )} value={convertDateToString(watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp')[i].fechaInicio)} name={'fechaInicio-' + i} label='Fecha de Inicio' type="date" />
                      <Input onChange={(e) => {
                        setForm(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp', watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp').map((el, pos) => {
                          if (pos === i) {
                            return {
                              ...el,
                              energia: parseFloat(e.target.value)
                            }
                          }
                          return el
                        })
                        )
                      }} icon={<Chip value="US$/MWh" />} value={watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp')[i].energia} name={tipoEnergia} label='Energía' type="number" />
                      <Input onChange={(e) => {
                        setForm(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp', watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp').map((el, pos) => {
                          if (pos === i) {
                            return {
                              ...el,
                              fechaFin: convertToDate(e.target.value)
                            }
                          }
                          return el
                        })
                        )
                      }} value={convertDateToString(watch(tipoEnergia === Energia.Hp ? 'energiaHp' : 'energiaHfp')[i].fechaFin)} name={'fechaFin-' + i} label='Fecha Final' type="date" />

                        </div>
                    </div>
                ))
            }
        </article>
  )
}
