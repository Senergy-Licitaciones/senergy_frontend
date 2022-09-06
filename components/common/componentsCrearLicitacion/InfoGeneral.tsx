import { Dispatch, SetStateAction } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { DataSelect } from '@mytypes/models'
import { IFormCrearLicitacionUser } from '@mytypes/form'
import { Card, CardBody, CardFooter, CardHeader, Input, Option, Select, Textarea } from '@material-tailwind/react'
import { Control, Controller, FieldErrorsImpl, UseFormRegister, UseFormWatch } from 'react-hook-form'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    register: UseFormRegister<IFormCrearLicitacionUser>
    servicios:DataSelect[],
    errors:FieldErrorsImpl<IFormCrearLicitacionUser>,
    control:Control<IFormCrearLicitacionUser, any>,
    watch:UseFormWatch<IFormCrearLicitacionUser>
}
export default function InfoGeneral ({ watch, control, register, errors, step, setStep, servicios }:Props) {
  console.log('watch ', watch('tipoServicio'), servicios)
  return (
        <div >
            <Card>
                <CardHeader className='p-4' >
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Información general</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                </CardHeader>
                <CardBody className='grid gap-4' >
                    <Input error={!!errors.title} {...register('title')} label="Título de Licitación" size="lg" type="text" />
                    <Textarea {...register('description')} label="Descripción" size='lg' />
                    <Input error={!!errors.fechaInicioApertura} {...register('fechaInicioApertura')} label="Fecha de Inicio de Apertura" type="date" />
                    <Input error={!!errors.fechaFinApertura} {...register('fechaFinApertura')} label="Fecha de Fin de Apertura" type="date" />
                    <Controller name='tipoServicio' control={control} render={({ field }) => (
                    <Select error={!!errors.tipoServicio} {...field} label='Tipo de Servicio' size='lg' >
                        {
                            servicios.map((servicio) => (
                                <Option key={servicio._id} value={servicio._id} >{servicio.name}</Option>
                            ))
                        }
                    </Select>
                    )} />
                </CardBody>
                <CardFooter divider >
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                </CardFooter>
            </Card>
                    </div>
  )
}
