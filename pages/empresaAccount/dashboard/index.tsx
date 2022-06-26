import { BiDollar, BiFileBlank, BiPencil } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import Highcharts from 'highcharts'
import LayoutProveedor from '../../../components/layout/layoutProveedor'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { methodGetAuth } from '../../../utils/fetch'
import { ErrorResponse } from '../../../types/methods'
import { TypeToken } from '../../../types/data/enums'
import { InfoDashboardProveedor } from '../../../types/data'
type Props={
  infoDashboard:InfoDashboardProveedor,
  token:string
}
export default function DashboardProveedor ({ infoDashboard }:Props) {
  console.log(infoDashboard)
  useEffect(() => {
    infoDashboard.numOfertas !== 0 && Highcharts.chart({
      title: { text: 'Seguimiento de ofertas' },
      chart: {
        type: 'line',
        renderTo: 'container-ofertas'
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime'
        // categories: ['Hace 2 meses', 'Hace un mes', 'Último mes']
      },
      yAxis: {
        title: {
          text: 'Participantes'
        }
      },
      series: infoDashboard.ofertas.map((off) => ({
        type: 'line',
        name: off.empresa,
        data: [off.participantes, 1],
        pointStart: (new Date(off.fechaInicio)).getTime(),
        pointInterval: (new Date(off.fechaFin)).getTime() - (new Date(off.fechaInicio)).getTime()

      }))
    })
    Highcharts.chart({
      title: { text: 'Seguimiento de licitaciones' },
      chart: {
        type: 'line',
        renderTo: 'container-licitaciones'
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime'
        // categories: ['Hace 2 meses', 'Hace un mes', 'Último mes']
      },
      yAxis: {
        title: {
          text: 'Participantes'
        }
      },
      series: infoDashboard.licitaciones.map((li) => ({
        name: li.empresa,
        type: 'line',
        data: [0, li.participantes],
        pointStart: (new Date(li.fechaInicioApertura)).getTime(),
        pointInterval: (new Date(li.fechaFinApertura)).getTime() - (new Date(li.fechaInicioApertura)).getTime()
      }))
    })
  }, [])
  return (
        <LayoutProveedor>
            <section className='grid grid-cols-4 gap-2' >
              <div className='bg-white rounded p-2 shadow' >
                <div className='flex justify-between items-center' >
                  <span className='flex items-center p-2 justify-center border-2 border-gray-500 text-gray-500 rounded-full text-2xl' >
                  <BiPencil/>
                  </span>
                  <div className='flex flex-col items-center' >
                    <h2 className='font-light' >Ofertas</h2>
                    <p className='text-2xl' >{infoDashboard.numOfertas}</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >Cantidad Total</p>
              </div>
              <div className='bg-white rounded p-2 shadow' >
                <div className='flex justify-between items-center' >
                  <span className='flex items-center p-2 justify-center border-2 border-gray-500 text-gray-500 rounded-full text-2xl' >
                  <BiFileBlank />
                  </span>
                  <div className='flex flex-col items-center' >
                    <h2 className='font-light' >Licitaciones</h2>
                    <p className='text-2xl' >{infoDashboard.numLicitaciones}</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >En estado Abierta</p>
              </div>
              <div className='bg-white rounded p-2 shadow' >
                <div className='flex justify-between items-center' >
                  <span className='flex items-center p-2 justify-center border-2 border-gray-500 text-gray-500 rounded-full text-2xl' >
                  <BiDollar/>
                  </span>
                  <div className='flex flex-col items-center' >
                    <h2 className='font-light' >Plan</h2>
                    <p className='text-2xl uppercase' >{infoDashboard.plan}</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >Desde el último mes</p>
              </div>
              <div className='bg-white rounded p-2 shadow' >
                <div className='flex justify-between items-center' >
                  <span className='flex items-center p-2 justify-center border-2 border-gray-500 text-gray-500 rounded-full text-2xl' >
                  <BsClock/>
                  </span>
                  <div className='flex flex-col items-center' >
                    <h2 className='font-light' >Tiempo</h2>
                    <p className='text-2xl' >{infoDashboard.timeToExpireLic}</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >Licitación próxima a vencer en:</p>
              </div>
              {infoDashboard.numOfertas === 0
                ? <div className='col-span-4 shadow bg-white p-2'>Ninguna Oferta realizada por el momento</div>
                : <div id='container-ofertas' className='bg-white rounded p-2 shadow col-span-4'></div>
              }
              <div id='container-licitaciones' className='bg-white rounded p-2 shadow col-span-4' ></div>
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('Debe iniciar sesión como proveedor para acceder a este recurso')
    const infoDashboard = await methodGetAuth('proveedor/infoDashboardProveedor', data.accessToken) as ErrorResponse|InfoDashboardProveedor
    if ('error' in infoDashboard) throw new Error(infoDashboard.message)
    return {
      props: {
        token: data.accessToken,
        infoDashboard
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login/empresa',
        permanent: false
      }
    }
  }
}
