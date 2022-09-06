import { useEffect, useRef } from 'react'
import { IFormCrearLicitacionUser, NumMes } from '@mytypes/form'
import { UseMeses } from '@mytypes/hooks'
import { convertToDate } from '../../utils/formats'

export const useMeses:UseMeses = (update, form, setValue) => {
  const isMount = useRef(true)
  useEffect(() => {
    console.log('cambio de form', form)
    if (update) {
      if (isMount.current === false)generateMeses(form)
    } else {
      generateMeses(form)
    }
    isMount.current = false
  }, [form])
  const generateMeses = (data:IFormCrearLicitacionUser) => {
    const fechaInicio = convertToDate(data.fechaInicio)
    const fechaFin = convertToDate(data.fechaFin)
    if (fechaFin > fechaInicio) {
      const array:NumMes[] = []
      do {
        array.push({
          mes: `${fechaInicio.getMonth() + 1}/${fechaInicio.getFullYear()}`,
          hp: 0,
          hfp: 0
        })
        if (fechaInicio.getMonth() + 1 > 11) {
          fechaInicio.setFullYear(fechaInicio.getFullYear() + 1)
          fechaInicio.setMonth(0)
        } else {
          fechaInicio.setMonth(fechaInicio.getMonth() + 1)
        }
      // eslint-disable-next-line no-unmodified-loop-condition
      } while (fechaInicio <= fechaFin)
      console.log('array antes del set value', array)
      setValue('meses', array)
    }
  }
}
