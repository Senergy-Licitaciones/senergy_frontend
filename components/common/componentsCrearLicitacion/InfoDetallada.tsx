import { Dispatch, SetStateAction } from 'react'
import { IFormCrearLicitacionUser } from '@mytypes/form'
import generateNumber from '../../../utils/generateNumber.utility'
import { Card, CardBody, CardFooter, CardHeader, IconButton, Input, Option, Select, Textarea, Tooltip } from '@material-tailwind/react'
import { Control, Controller, FieldErrorsImpl, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { BiCalculator } from 'react-icons/bi'
import { Estado } from '@/types/form/enums'

type Props={
    step:number,
    errors:FieldErrorsImpl<IFormCrearLicitacionUser>,
    setStep:Dispatch<SetStateAction<number>>,
    register: UseFormRegister<IFormCrearLicitacionUser>,
    control:Control<IFormCrearLicitacionUser, any>,
    setValue:UseFormSetValue<IFormCrearLicitacionUser>
}
export default function InfoDetallada ({ step, setStep, errors, register, control, setValue }:Props) {
  return (
        <div >
            <Card>
                <CardHeader className='p-4' >
                        <p className="font-semibold dark:text-gray-400">Información detallada</p>
                </CardHeader>
                <CardBody className='grid gap-4'>
                    <Input error={!!errors.numLicitacion} {...register('numLicitacion')} label="Número de Licitación" icon={<Tooltip content="Generar Número" ><IconButton onClick={() => setValue('numLicitacion', generateNumber(5))} size='sm' ><BiCalculator/></IconButton></Tooltip>} size="lg" type="number" />
                    <Textarea {...register('requisitos')} label="Requisitos" size='lg' />
                    <Controller control={control} name="estado" render={({ field }) => (
                        <Select size='lg' {...field} error={!!errors.estado} label="Estado de Licitación" >
                            {
                                Object.values(Estado).map((estado, i) => (
                                    <Option key={i} value={estado} >{estado.toUpperCase()}</Option>
                                ))
                            }
                        </Select>
                    )} />
                    <Input {...register('author')} error={!!errors.author} label="Responsable de Licitación" size="lg" type="text" />
                </CardBody>
                <CardFooter divider>
                        <article className="flex justify-end pt-4">
                            <span onClick={() => setStep(step + 1)} className="bg-green-600 py-2 px-4 text-white block cursor-pointer">Continuar</span>
                        </article>
                </CardFooter>
            </Card>
                    </div>
  )
}
