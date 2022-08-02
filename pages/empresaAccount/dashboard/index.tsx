import { BiDollar, BiFileBlank, BiPencil } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import Highcharts from 'highcharts'
import LayoutProveedor from '../../../components/layout/layoutProveedor'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { InfoDashboardProveedor } from '@mytypes/models'
import { getInfoDashboard } from '../../../services/proveedores'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
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
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const infoDashboard = await getInfoDashboard(session.accessToken)
    console.log(infoDashboard)
    return {
      props: {
        token: session.accessToken,
        infoDashboard
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
