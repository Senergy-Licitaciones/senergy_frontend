import { IFormCrearOfertaProveedor } from '@mytypes/form'
import { convertDateToString, convertToDate } from '../../../utils/formats'
import { Button, Checkbox, Chip, Input } from '@material-tailwind/react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

type Props={
    watch:UseFormWatch<IFormCrearOfertaProveedor>,
    setForm:UseFormSetValue<IFormCrearOfertaProveedor>
}
export default function PotenciaBloque ({ setForm, watch }:Props) {
  const addBloque = () => {
    !watch('tarifaPotencia') && setForm(
      'potencia', [...watch('potencia'), { fechaInicio: new Date(), fechaFin: new Date(), potencia: 0 }]
    )
  }
  return (
        <article className="flex flex-col my-4">
          <label className='text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg' htmlFor='potencia-bloque'>Potencia</label>
           <div className='flex justify-center' >
           <Button disabled={!!watch('tarifaPotencia')} onClick={addBloque} >Agregar Bloque</Button>
           </div>
      <Checkbox name='tarifaPotencia' checked={watch('tarifaPotencia')} onChange={
        (e) => {
          setForm('tarifaPotencia', e.target.checked)
          setForm('potencia', e.target.checked ? [] : watch('potencia'))
        }
           } label='Modalidad por Tarifa' />

            {
                watch('potencia').map((_el, i) => (
                    <div key={'potencia-' + i} className='flex flex-col pl-4' >
                        <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potencia">Potencia Bloque: {i + 1}</label>
                        <div className="grid grid-flow-col gap-24 py-2 ">
                      <Input onChange={(e) => setForm(
                        'potencia', watch('potencia').map((el, pos) => {
                          if (pos === i) {
                            return {
                              fechaFin: el.fechaFin,
                              potencia: el.potencia,
                              fechaInicio: convertToDate(e.target.value)
                            }
                          }
                          return el
                        })
                      )} value={convertDateToString(watch('potencia')[i].fechaInicio)} name={'potencia-fechaInicio-' + i} label='Fecha de Inicio' type="date" />
                      <Input icon={<Chip value="US$/MWh" />} onChange={(e) => {
                        setForm('potencia', watch('potencia').map((el, pos) => {
                          if (pos === i) {
                            return {
                              ...el,
                              potencia: parseFloat(e.target.value)
                            }
                          }
                          return el
                        })
                        )
                      }} value={watch('potencia')[i].potencia} name="potencia-value" label='Potencia' type="number" />
                      <Input onChange={(e) => {
                        setForm('potencia', watch('potencia').map((el, pos) => {
                          if (pos === i) {
                            return {
                              ...el,
                              fechaFin: convertToDate(e.target.value)
                            }
                          }
                          return el
                        })
                        )
                      }} value={convertDateToString(watch('potencia')[i].fechaFin)} name={'potencia-fechaFin-' + i} label='Fecha Final' type="date" />

                        </div>
                    </div>
                ))
            }
        </article>
  )
}
