import { Dispatch, SetStateAction } from 'react'
import { FormCrearLicitacionUser, NumMes } from '@mytypes/form'

type Props={
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    index:number,
    typeEnergia:'hp'|'hfp',
}
export default function EspecificacionEnergia ({ setForm, form, index, typeEnergia }:Props) {
  return (
    <input className="bg-transparent w-24 dark:text-gray-400" onChange={(e) => setForm({
      ...form,
      meses: form.meses.map((mes, i) => {
        if (i === index) {
          const newValue:NumMes = {
            ...mes,
            [typeEnergia]: parseFloat(e.target.value)
          }
          return newValue
        }
        return mes
      })
    })} value={form.meses[index][typeEnergia]} type="number" />
  )
}
