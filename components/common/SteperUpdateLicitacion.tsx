import { useState } from 'react'
import { FormCrearLicitacionUser } from '../../types/form'
import AsideSteper from './AsideSteper'
import FormUpdateLicitacion from './FormUpdateLicitacion'
type Props={
  licitacion:FormCrearLicitacionUser,
  id:string
}
export default function SteperUpdateLicitacion ({ licitacion, id }:Props) {
  const [step, setStep] = useState(1)
  return (
        <>
        <FormUpdateLicitacion formInit={licitacion} setStep={setStep} step={step} id={id} />
        <AsideSteper step={step} setStep={setStep} />
        </>
  )
}
