import { Chip, Input } from '@material-tailwind/react'
import { IFormCrearOfertaProveedor } from '@mytypes/form'
import { FieldErrorsImpl, UseFormRegister, UseFormWatch } from 'react-hook-form'

type Props={
    register:UseFormRegister<IFormCrearOfertaProveedor>,
    watch:UseFormWatch<IFormCrearOfertaProveedor>
    errors:FieldErrorsImpl<IFormCrearOfertaProveedor>
}
export default function InputExcesoPotencia ({ register, errors, watch }:Props) {
  return (
        <>
        <Input error={!!errors.excesoPotencia} size="lg" icon={<Chip className='-left-12' value="100% - 200%" />} {...register('excesoPotencia')} type="number" label='Exceso de Potencia' />
                        {
                          watch('excesoPotencia') > 100 &&
                          <>
                          <Input error={!!errors.excesoEnergiaHp} {...register('excesoEnergiaHp')} size="lg" icon={<Chip className='-left-12' value="0% - 100%" />} label='Exceso de Energía en Horas Punta' type="number" />
          <Input error={!!errors.excesoEnergiaHfp} {...register('excesoEnergiaHfp')} icon={<Chip className='-left-12' value="0% - 100%" />} label='Exceso de Energía en Horas Fuera de Punta' type="number" />

                          </>
                        }
        </>
  )
}
