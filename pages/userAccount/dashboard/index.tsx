import { useEffect } from 'react'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
const Highchart = require('highcharts')
export default function HistorialLicitacioens () {
  useEffect(() => {
    Highchart.chart('container', {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['08/2021', '09/2021', '10/2021', '11/2021', '12/2021', '01/2022']
      },
      yAxis: {
        title: {
          text: 'Número de licitaciones'
        }
      },
      series: [{
        name: 'Agromos',
        data: [2, 1, 3, 4, 0, 2]
      }]
    })
  }, [])
  return (
        <LayoutUser>
            <section className="grid grid-cols-1 md:grid-cols-4 2xl:text-xl grid-flow-row gap-4">
                <div className="bg-white rounded p-4">
                    <h2 className="font-semibold text-gray-500">Total de licitaciones creadas</h2>
                    <p className="font-bold text-2xl">23</p>
                    <div id="container" className="w-full h-auto"></div>
                </div>
                <div className="bg-white rounded p-4 ">
                    <h2 className="font-semibold text-gray-500">Total de licitaciones canceladas</h2>
                    <p className="font-bold text-2xl">3</p>
                </div>
                <div className="bg-white rounded p-4">
                    <h2 className="font-semibold text-gray-500">Información adicional</h2>
                    <p className="font-bold text-2xl">67</p>
                </div>
                <div className="bg-white rounded p-4">
                    <h2 className="font-semibold text-gray-500">Información adicional</h2>
                    <p className="font-bold text-2xl">161</p>
                </div>

            </section>
        </LayoutUser>
  )
}
