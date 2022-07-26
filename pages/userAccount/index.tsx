import LayoutUser from '../../components/layout/layoutUser/LayoutUser'
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineDashboard, AiOutlineFileAdd, AiOutlineFolderView, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDocumentAdd, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Info } from '@mytypes/models'
import CalendarioFechaApertura from '../../components/common/CalendarioFechaApertura'
import { getSession } from 'next-auth/react'
import { TypeToken } from '@mytypes/models/enums'
import { getInfoDashboard } from '../../services/users'
const Highcharts = require('highcharts')
type Props={
    info:Info,
    token:string
}
export default function UserAccount ({ info }:Props) {
  const ids:{
        [index:string]:number
    } = {
      id1: 1,
      id2: 2,
      id3: 3,
      id4: 5
    }
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Licitaciones en progreso'
      },
      xAxis: {
        categories: ['hace 3 meses', 'hace 2 meses', 'hace 1 mes', 'Actualmente']
      },
      yAxis: {
        title: {
          text: 'Número de participantes'
        }
      },
      series: [{
        name: 'Licitacion 01',
        data: [70, 65, 45, 5]
      }, {
        name: 'Licitacion 02',
        data: [null, null, 64, 35]
      }, {
        name: 'Licitacion 03',
        data: [49, 45, 26, 3]
      }, {
        name: 'Licitacion 04',
        data: [null, 26, 14, 5]
      }]
    })
  }, [])
  return (
        <LayoutUser>
            <section className="grid 2xl:text-2xl grid-cols-1 md:grid-cols-4 gap-4 grid-flow-row" >
                <div className="bg-white shadow-lg dark:bg-gray-800 md:row-span-2 flex flex-col p-4" >
                    <article className="flex justify-between items-center" >
                    <h2 className="font-semibold dark:text-gray-400 ">Licitaciones</h2>
                    <span className="flex items-center rounded-full p-1  bg-green-100 text-2xl 2xl:text-3xl dark:bg-green-500 dark:text-white text-green-600" >
                        <HiOutlineDocumentAdd/>
                    </span>
                    </article>
                    <p className="text-3xl 2xl:text-4xl font-bold dark:text-gray-400 " >{info.numLicitaciones}</p>
                    <div className="flex justify-between items-center">
                    <article className="text-green-400 flex 2xl:text-base text-sm">
                    <p>+25%</p>
                    <span className="flex items-center ">
                        <BiTrendingUp/>
                    </span>
                    </article>
                    <p className="text-xs 2xl:text-sm text-gray-500 dark:text-slate-400" >desde el último mes</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg dark:bg-gray-800 md:row-span-2 flex flex-col p-4">
                    <article className="flex justify-between items-center" >
                    <h2 className="font-semibold dark:text-gray-400 ">Participantes</h2>
                    <span className="flex items-center rounded-full p-2 bg-orange-100 2xl:text-xl text-lg dark:bg-orange-400 dark:text-white text-orange-400" >
                        <FaUserAlt/>
                    </span>
                    </article>
                    <p className="text-3xl 2xl:text-4xl font-bold dark:text-gray-400 " >{info.numParticipantes}</p>
                    <div className="flex justify-between items-center">
                    <article className="text-red-400 flex 2xl:text-base text-sm">
                    <p>-10%</p>
                    <span className="flex items-center ">
                        <BiTrendingDown/>
                    </span>
                    </article>
                    <p className="text-xs 2xl:text-sm text-gray-500 dark:text-gray-400" >desde el último mes</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg dark:bg-gray-800 md:row-span-2 flex flex-col p-4" >
                    <article className="flex justify-between items-center" >
                    <h2 className="font-semibold dark:text-gray-400 ">Último Proveedor</h2>
                    <span className="flex items-center rounded-full p-1  bg-green-100 text-2xl 2xl:text-3xl dark:bg-green-500 dark:text-white text-green-600" >
                        <HiOutlineDocumentAdd/>
                    </span>
                    </article>
                    <p className="text-lg 2xl:text-xl text-center  dark:text-gray-400 " >{info.lastProvider}</p>
                    <div className="flex justify-between items-center">
                    <article className="text-green-400 flex 2xl:text-base text-sm">
                    <p>+25%</p>
                    <span className="flex items-center ">
                        <BiTrendingUp/>
                    </span>
                    </article>
                    <p className="text-xs 2xl:text-sm text-gray-500 dark:text-slate-400" >desde el último mes</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg md:row-span-3 flex flex-col p-4 dark:bg-gray-800">
                    <div className="flex justify-between">
                        <article className="flex flex-col">
                            <p className="font-semibold dark:text-gray-400">{info.empresa}</p>
                            <p className="text-yellow-500 2xl:text-base text-xs">Empresa</p>
                        </article>

                            <img className="w-12 2xl:w-16 2xl:h-16 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
                    </div>
                    <article className="flex text-gray-500 2xl:text-lg text-sm dark:text-gray-400">
                        <span className="flex items-center mr-2">
                            <HiOutlineLocationMarker/>
                        </span>
                        <p className="text-gray-700 dark:text-gray-400">{info.address}</p>
                    </article>
                    <article className="flex text-gray-500 2xl:text-lg text-sm dark:text-gray-400">
                        <span className="flex items-center mr-2">
                            <BsTelephone/>
                        </span>
                        <p className="text-gray-700 dark:text-gray-400">+51 {info.phone}</p>
                    </article>
                    <hr className="my-4 border-gray-700 "/>

                    <div className="flex flex-1 items-center justify-center">

                    <p className="text-gray-500 text-center 2xl:text-base text-xs dark:text-gray-400">{info.correo}</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg md:col-span-2 md:row-span-5 " >
                    <div id="container" className="w-full " >

                    </div>
                </div>
                <div className="bg-white shadow-lg dark:text-gray-400 text-gray-600 font-semibold dark:bg-gray-800 justify-between flex flex-col p-4 md:row-span-5">
                    <h2 className="text-xl text-center" >Licitación más reciente</h2>
                    {'message' in info.lastLicitacion
                      ? <h2>{info.lastLicitacion.message}</h2>
                      : <>
                    <article className="  flex flex-col items-center" >
                    <p>Número de participantes: </p>
                    <p className="text-2xl" > {info.lastLicitacion.participantes}</p>
                    </article>
                    <article className="flex flex-col items-center">
                        <p>Empresa: </p>
                        <p className="text-xl" >{info.empresa}</p>
                    </article>
                    <article className="flex flex-col items-center">
                        <p>RUC: </p>
                        <p className="text-xl" >{info.lastLicitacion.ruc}</p>
                    </article>
                    <button className="bg-green-500 flex py-2 rounded  items-center justify-center text-gray-200 " >
                        <span className="flex justify-center text-2xl mr-6 text-gray-200 items-center" >
                            <AiOutlineFolderView/>
                        </span>
                        <p>Ver licitación</p>
                    </button>
                    </>
                    }
                </div>
                <div className="bg-white shadow-lg dark:text-gray-400 text-gray-600 font-semibold dark:bg-gray-800 justify-between flex items-center flex-col p-4 md:row-span-3">
                    {'message' in info.lastLicitacion
                      ? <h2>{info.lastLicitacion.message}</h2>
                      : <CalendarioFechaApertura fechaInicioApertura={info.lastLicitacion.fechaInicioapertura} fechaFinApertura={info.lastLicitacion.fechaFinApertura} />
                    }
                </div>
                <div className="bg-white md:row-span-2 flex flex-col p-4 dark:bg-gray-800">
                    <h2 className="font-semibold dark:text-gray-400">Licitaciones detalles</h2>
                    <ul>
                        <li>
                            <Link href={`/userAccount/dashboard/${ids.id1}`} >
                            <a className="flex justify-between text-sm items-center py-1 my-1" >
                            <p className="text-gray-500">Licitación 01</p>

                            <p className="bg-red-500 text-white text-xs rounded px-2 py-1 shadow" >Cierre</p>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/userAccount/dashboard/${ids.id2}`}>
                            <a className="flex justify-between text-sm items-center py-1 my-1" >
                            <p className="text-gray-500">Licitación 02</p>

                            <p className="bg-yellow-500 text-white text-xs py-1 rounded px-2 shadow" >Evaluación</p>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/userAccount/dashboard/${ids.id3}`}>
                            <a className="flex justify-between text-sm items-center py-1 my-1" >
                            <p className="text-gray-500">Licitación 03</p>

                            <p className="bg-red-500 text-white text-xs py-1 rounded px-2 shadow" >Cierre</p>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/userAccount/dashboard/${ids.id4}`}>
                            <a className="flex justify-between text-sm items-center py-1 my-1" >
                            <p className="text-gray-500">Licitación 04</p>

                            <p className="bg-yellow-500 text-white text-xs rounded py-1 px-2 shadow ">Evaluación</p>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" rounded-lg bg-gradient-to-br  dark:text-white from-sky-400 to-yellow-400 md:row-span-4 flex flex-col items-center justify-center p-3 ">
                    <h2 className="text-center text-lg text-white font-bold" >Prueba el plan corporativo y disfruta sin restricciones</h2>
                    <button className="bg-gray-800 mt-3 text-white py-2 px-4 font-semibold rounded-lg" >
                        Iniciar ahora
                    </button>
                </div>
                <div className="bg-white dark:text-gray-400 text-gray-600 font-semibold dark:bg-gray-800 justify-between flex items-center flex-col p-4 md:row-span-4 md:col-span-2 ">
                    <h2>Funciones disponibles</h2>
                    <article className="flex justify-around w-full" >
                        <span className="w-16 animate-bounce flex text-2xl justify-center items-center h-16 rounded-full bg-gray-200 text-gray-600" >
                            <AiOutlineFileAdd/>
                        </span>
                        <span className="w-16 animate-bounce flex text-2xl justify-center items-center h-16 rounded-full bg-gray-200 text-gray-600" >
                            <AiOutlineMail/>
                        </span>
                        <span className="w-16 animate-bounce flex text-2xl justify-center items-center h-16 rounded-full bg-gray-200 text-gray-600" >
                            <AiOutlineDashboard/>
                        </span>
                    </article>
                </div>
            </section>

        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    console.log('data session ', data)
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    const info = await getInfoDashboard(data.accessToken)
    return {
      props: {
        info,
        token: data.accessToken
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login'
      }
    }
  }
}
