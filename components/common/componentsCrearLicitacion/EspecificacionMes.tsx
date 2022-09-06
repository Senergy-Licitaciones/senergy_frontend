import { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { HEADS_TABLE_ESPECIFICACION_MES } from '../../../constants'
import { IFormCrearLicitacionUser } from '@mytypes/form'
import EspecificacionEnergia from '../inputs/EspecificacionEnergia'
import EspecificacionMesFile from '../inputs/EspecificacionMesFile'
import Loader from '../Loader'
import TableHead from '../tables/TableHead'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
type Props={
    step:number,
    loading:boolean,
    update?:boolean,
    setValue:UseFormSetValue<IFormCrearLicitacionUser>,
    form:IFormCrearLicitacionUser,
    watch:UseFormWatch<IFormCrearLicitacionUser>,
}
export default function EspecificacionMes ({ watch, loading, update, setValue, form }:Props) {
  const [loadFile, setLoadFile] = useState<{status:boolean, filename:string, file:File|null}>({
    status: false,
    filename: '',
    file: null
  })
  console.log('componente mes', form)
  return (
        <div >
            <Card>
                <CardHeader className='p-4' >
                        <p className="font-semibold dark:text-gray-400">Especificación por Mes <strong className='text-red-500' >*</strong></p>
                </CardHeader>
                <CardBody className='grid gap-4' >

                        <div className="max-h-96 overflow-y-auto" >
                          <EspecificacionMesFile form={form} loadFile={loadFile} setForm={setValue} setLoadFile={setLoadFile} />
                          <div className='flex items-center py-2 ' >
                          <hr className='flex-1' /><p className='text-gray-400 mx-4' >o</p><hr className='flex-1' />
                          </div>
                        <table className=" bg-gray-100 dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                            <TableHead heads={HEADS_TABLE_ESPECIFICACION_MES} />
                            <tbody className=" dark:divide-gray-500 divide-y" >
                                {watch('meses').map((mes, index) => (
                                    <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x" key={index} >
                                        <td className="p-4 text-center" >{mes.mes}</td>
                                        <td className="p-4 text-center ">
                                            <EspecificacionEnergia form={form} index={index} setForm={setValue} typeEnergia="hp" />
                                        </td>
                                        <td className="p-4 text-center " >
                                            <EspecificacionEnergia form={form} index={index} setForm={setValue} typeEnergia="hfp" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                </CardBody>
                <CardFooter divider>
                        <article className="flex justify-end pt-4">
                            {
                                loading
                                  ? <Loader/>
                                  : <Button className="flex items-center" type="submit" >
                                <span className="flex items-center transition-all duration-300 text-2xl mr-4 group-hover:animate-bounce justify-center" >
                                    <AiFillCheckCircle/>
                                </span>
                                <p>{update ? 'Actualizar licitación' : 'Crear licitación'}</p>
                            </Button>
                            }
                        </article>
                </CardFooter>
            </Card>

                    </div>
  )
}
