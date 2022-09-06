import { Input } from '@material-tailwind/react'
import { IFormCrearLicitacionUser, NumMes } from '@mytypes/form'
import { UseFormSetValue } from 'react-hook-form'

type Props={
    form:IFormCrearLicitacionUser,
    setForm:UseFormSetValue<IFormCrearLicitacionUser>,
    index:number,
    typeEnergia:'hp'|'hfp',
}
export default function EspecificacionEnergia ({ setForm, form, index, typeEnergia }:Props) {
  return (
    <Input variant='static' size='lg' onChange={(e) => setForm('meses', form.meses.map((mes, i) => {
      if (i === index) {
        const newValue:NumMes = {
          ...mes,
          [typeEnergia]: parseFloat(e.target.value)
        }
        return newValue
      }
      return mes
    })
    )} value={form.meses[index][typeEnergia]} type="number" />
  )
}
