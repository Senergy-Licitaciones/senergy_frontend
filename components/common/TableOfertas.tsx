import { Oferta } from '@mytypes/models'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { Chip, IconButton, Input, Option, Select } from '@material-tailwind/react'
type Props={
    ofertas:Oferta[]
}
export default function TableOfertas ({ ofertas }:Props) {
  return (
        <>
        <div className="flex justify-between">
                    <article className="flex flex-col 2xl:w-44 w-32">
                        <Select label='Ítems por Página' defaultValue={'5'} id="">
                            <Option value={'5'}>5</Option>
                            <Option value={'10'}>10</Option>
                        </Select>
                    </article>
                    <article className="flex 2xl:text-2xl items-center relative" >
                    <Input label="Buscar" type="search"/>
                    <span className="flex items-center absolute dark:text-gray-300 text-gray-700 right-4">
                        <BsSearch/>
                    </span>
                    </article>
                </div>
                <table className="bg-white dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                    <thead>
                        <tr className="text-sm 2xl:text-lg dark:text-gray-400 dark:divide-gray-600 font-semibold divide-x">
                            <th className="p-4">CLIENTE</th>
                            <th className="p-4 text-xs 2xl:text-base ">FECHA INICIO APERTURA</th>
                            <th className="p-4 text-xs 2xl:text-base ">FECHA FIN APERTURA</th>
                            <th className="p-4">POTENCIA</th>
                            <th className="p-4">ENERGÍA HP</th>
                            <th className="p-4">ENERGÍA HFP</th>
                            <th className="p-4">
                                ACCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        {
                            ofertas.map((el) => (

                        <tr key={el._id} className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">

                            <td className="p-4 ">
                                {el.licitacion.empresa}
                            </td>
                            <td className="p-4">
                                {el.licitacion.fechaInicioApertura}
                            </td>
                            <td className="p-4">
                                {el.licitacion.fechaFinApertura}
                            </td>
                            <td className=" p-4">
                                <Chip color={el.tarifaPotencia ? 'light-blue' : 'light-green'} value={el.tarifaPotencia ? 'Tarifa' : 'Bloques'} />
                            </td>
                            <td className="p-4">
                                <Chip color={el.tarifaEnergiaHp ? 'light-blue' : 'light-green'} value={el.tarifaEnergiaHp ? 'Tarifa' : 'Bloques'} />
                            </td>
                            <td className="p-4">
                                <Chip color={el.tarifaEnergiaHfp ? 'light-blue' : 'light-green'} value={el.tarifaEnergiaHfp ? 'Tarifa' : 'Bloques'} />
                            </td>
                            <td className="p-4 flex justify-around " >
                                <Link href={`/empresaAccount/licitaciones/historialOfertas/${el._id}`} >
                                    <IconButton className='text-xl' variant='text' color='green' >
                                    <AiOutlineEdit/>
                                    </IconButton>

                                </Link>
                            </td>
                        </tr>
                            ))
                        }

                    </tbody>
                </table>
                <article className="flex justify-between items-center py-4" >
                    <div className="dark:text-gray-400 2xl:text-lg text-sm">
                        Mostrando de 1 a 5 de 17 items
                    </div>
                    <div className="flex 2xl:text-xl">
                        <span className="bg-yellow-500 flex shadow-xl cursor-pointer rounded-full 2xl:w-12 2xl:h-12 w-8 h-8 justify-center items-center text-white">
                            1
                        </span>
                        <span className="flex mx-2 rounded-full cursor-pointer hover:bg-white hover:text-black 2xl:w-12 2xl:h-12 w-8 h-8 justify-center items-center dark:text-gray-200" >
                            2
                        </span>
                    </div>
                </article>
            </>
  )
}
