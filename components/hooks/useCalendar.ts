import { useEffect, useState } from 'react'
import { UseCalendar } from '../../types/hooks/useCalendar'
import { convertToDate } from '../../utils/formats'

export const useCalendar:UseCalendar = (fechaInicioApertura, fechaFinApertura) => {
  const [both, setBoth] = useState(false)
  const [cal, setCal] = useState({
    fechaInicio: {
      day: 0,
      dayWeek: 0
    },
    fechaFin: {
      day: 0,
      dayWeek: 0
    }
  })
  useEffect(() => {
    const firstDate = convertToDate(fechaInicioApertura)
    const secondDate = convertToDate(fechaFinApertura)
    if (firstDate.getMonth() !== secondDate.getMonth()) {
      console.log('meses diferentes ', fechaInicioApertura, fechaFinApertura)
      setBoth(true)
    } else {
      firstDate.setDate(1)
      const getLastDate = () => {
        secondDate.setDate(31)
        if (secondDate.getMonth() === firstDate.getMonth()) return secondDate.getDate()
        secondDate.setFullYear(firstDate.getFullYear())
        secondDate.setMonth(firstDate.getMonth())
        secondDate.setDate(30)
        if (secondDate.getMonth() === firstDate.getMonth()) return secondDate.getDate()
        secondDate.setFullYear(firstDate.getFullYear())
        secondDate.setMonth(firstDate.getMonth())
        secondDate.setDate(29)
        return secondDate.getDate()
      }
      const lastDate = getLastDate()
      setCal({
        ...cal,
        fechaInicio: {
          dayWeek: firstDate.getDay(),
          day: firstDate.getDate()
        },
        fechaFin: {
          dayWeek: secondDate.getDay() - 1,
          day: lastDate
        }
      })
    }
  }, [])
  return {
    both,
    cal
  }
}
