import { useEffect, useState } from 'react'
import { convertToDate, formatMes } from '../../utils'

type Props={
    fechaInicioApertura:string,
    fechaFinApertura:string
}
const days = [...Array(42).keys()]
export default function CalendarioFechaApertura ({ fechaInicioApertura, fechaFinApertura }:Props) {
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
  return (
        <div>
          <h1 className='text-center'>Calendario de Fecha de Apertura</h1>
          {both
            ? <div>
              <h1>Fechas de Meses diferentes</h1>
            </div>
            : <div>
            <h2 className='text-center font-bold text-yellow-500 ' >{formatMes(convertToDate(fechaInicioApertura).getMonth())}</h2>
            <ul className='grid grid-cols-7 gap-1 px-2' >
              <li className='text-center' >D</li>
              <li className='text-center'>L</li>
              <li className='text-center'>M</li>
              <li className='text-center'>M</li>
              <li className='text-center'>J</li>
              <li className='text-center'>V</li>
              <li className='text-center'>S</li>
            </ul>
            <ul className=' px-2   grid grid-cols-7 ' >
            {
              days.map((_day, i) => (
                <li className={` ${((convertToDate(fechaFinApertura).getDate() >= i - cal.fechaInicio.dayWeek + 1) && (convertToDate(fechaInicioApertura).getDate() <= i - cal.fechaInicio.dayWeek + 1)) ? 'bg-gray-700 dark:bg-gray-100 dark:text-gray-700 text-white ' : 'dark:text-gray-100'} text-xs w-7 h-7 rounded-full font-bold items-center flex justify-center`} key={`calendar-${i}`}>
                  {(cal.fechaFin.day > i - cal.fechaInicio.dayWeek && i - cal.fechaInicio.dayWeek >= 0)
                    ? i - cal.fechaInicio.dayWeek + 1
                    : ''}
                </li>
              ))
            }
            </ul>
          </div>
          }
        </div>
  )
}
