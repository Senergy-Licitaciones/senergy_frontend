import { CALENDAR_SIZE, DAYS_WEEK } from '../../consts'
import { convertToDate, formatMes } from '../../utils/formats'
import { useCalendar } from '../hooks/useCalendar'

type Props={
    fechaInicioApertura:string,
    fechaFinApertura:string
}
export default function CalendarioFechaApertura ({ fechaInicioApertura, fechaFinApertura }:Props) {
  const { both, cal } = useCalendar(fechaInicioApertura, fechaFinApertura)
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
              {
                DAYS_WEEK.map((day, i) => (
                  <li key={day + '-' + i} className='text-center uppercase' >{day}</li>
                ))
              }
            </ul>
            <ul className=' px-2   grid grid-cols-7 ' >
            {
              CALENDAR_SIZE.map((_day, i) => (
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
