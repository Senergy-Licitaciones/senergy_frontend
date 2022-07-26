import { useEffect, useRef } from 'react'
import { NumMes } from '../../types/form'
import { UseMeses } from '../../types/hooks'
import { convertToDate } from '../../utils/formats'

export const useMeses:UseMeses = (update, form, setForm) => {
  const isMount = useRef(true)
  useEffect(() => {
    if (update) {
      if (isMount.current === false)generateMeses()
    } else {
      generateMeses()
    }
    isMount.current = false
  }, [form.fechaInicio, form.fechaFin])
  const generateMeses = () => {
    const fechaInicio = convertToDate(form.fechaInicio)
    const fechaFin = convertToDate(form.fechaFin)
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
      setForm({
        ...form,
        meses: array
      })
    }
  }
}
