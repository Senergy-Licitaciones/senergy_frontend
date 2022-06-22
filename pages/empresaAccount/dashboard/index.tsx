import { BiDollar, BiFileBlank, BiPencil } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'
import Highcharts from 'highcharts'
import LayoutProveedor from '../../../components/layout/layoutProveedor'
import { useEffect } from 'react'

export default function DashboardProveedor () {
  useEffect(() => {
    Highcharts.chart({
      title: { text: 'Seguimiento de ofertas' },
      chart: {
        type: 'line',
        renderTo: 'container'
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
      series: [
        {
          name: 'Oferta 01',
          type: 'line',
          data: [40, 34, 31, 26, 25, 18, 10, 5, 3],
          pointStart: Date.UTC(2022, 1, 1),
          pointInterval: 60 * 60 * 1000 * 24 * 7
        }, {
          name: 'Oferta 02',
          type: 'line',
          data: [45, 41, 36, 33, 30, 25, 21, 20, 15, 13, 5],
          pointStart: Date.UTC(2022, 2, 1),
          pointInterval: 60 * 60 * 24 * 7 * 1000
        }
      ]
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
                    <p className='text-2xl' >2</p>
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
                    <p className='text-2xl' >5</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >Nuevas este día</p>
              </div>
              <div className='bg-white rounded p-2 shadow' >
                <div className='flex justify-between items-center' >
                  <span className='flex items-center p-2 justify-center border-2 border-gray-500 text-gray-500 rounded-full text-2xl' >
                  <BiDollar/>
                  </span>
                  <div className='flex flex-col items-center' >
                    <h2 className='font-light' >Plan</h2>
                    <p className='text-2xl' >Gratuito</p>
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
                    <p className='text-2xl' >15d</p>
                  </div>
                </div>
                <hr className='my-2' />
                <p className='text-xs font-light' >Desde la última oferta</p>
              </div>
              <div id='container' className='bg-white rounded p-2 shadow col-span-4' >

              </div>
            </section>
        </LayoutProveedor>
  )
}
