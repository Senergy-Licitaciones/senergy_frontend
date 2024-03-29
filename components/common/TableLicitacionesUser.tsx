import Link from 'next/link'
import { AiOutlineEdit, AiOutlineFileSearch } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { Licitacion } from '@mytypes/models'
import { Chip, IconButton, Input, Option, Select } from '@material-tailwind/react'
import { Estado } from '@/types/form/enums'
type Props={
    licitaciones:Array<Omit<Licitacion, 'puntoSum'|'brg'|'tipoServicio'>>
}
export default function TableLicitacionesUser ({ licitaciones }:Props) {
  console.log('table ', licitaciones)
  return (
        <>
        <div className="flex justify-between">
                    <article className="flex flex-col 2xl:w-44 w-32">
                        <Select label='Ítems por Página' value={'5'}>
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
                            <th className="p-4">#LICITACIÓN</th>
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4 text-xs ">FECHA INICIO APERTURA</th>
                            <th className="p-4 text-xs ">FECHA FIN APERTURA</th>
                            <th className="p-4">ESTADO</th>
                            <th className="p-4">AUTOR</th>
                            <th className="p-4">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        {licitaciones.map((el) => (
                        <tr key={el._id} className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">
                            <td className="font-semibold p-4" >
                                {el.numLicitacion}
                            </td>
                            <td className="font-semibold p-4 relative">
                                {el.title}
                                {el.createdAt.valueOf() !== el.updatedAt.valueOf() && <span className="absolute bottom-2 left-2 text-xs font-light dark:text-yellow-400 text-yellow-800">Modificado por {el.author} el {el.updatedAt.toLocaleDateString()}</span>}
                            </td>
                            <td className="p-4">
                                {el.fechaInicioApertura}
                            </td>
                            <td className="p-4">
                                {el.fechaFinApertura}
                            </td>
                            <td className="p-4 ">
                                <Chip color={el.estado === Estado.Abierto ? 'green' : el.estado === Estado.Cerrado ? 'red' : 'yellow'} value={el.estado} />
                            </td>
                            <td className="p-4">
                                {el.author}
                            </td>
                            <td className="p-4 grid grid-flow-col gap-2" >
                                <Link href={`/userAccount/licitaciones/${el._id}/edit`} >
                                    <IconButton className='text-xl' variant='text' color='green' >
                                    <AiOutlineEdit />
                                    </IconButton>
                                </Link>
                                 <Link href={`/userAccount/licitaciones/${el._id}`} >

                                    <IconButton className='text-xl' variant='text' color='yellow'>
                                    <AiOutlineFileSearch/>
                                    </IconButton>

                                </Link>
                            </td>
                        </tr>
                        ))}
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
                </article></>
  )
}
