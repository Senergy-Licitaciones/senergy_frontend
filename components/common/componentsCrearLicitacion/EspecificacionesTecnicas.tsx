import { Dispatch, SetStateAction } from 'react'
import { DataSelect } from '@mytypes/models'
import { IFormCrearLicitacionUser } from '@mytypes/form'
import { useMeses } from '../../hooks/useMeses'
import { Card, CardBody, CardFooter, CardHeader, Input, Option, Select } from '@material-tailwind/react'
import { Control, Controller, FieldErrorsImpl, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>,
    brgs:DataSelect[],
    puntoSums:DataSelect[],
    update:boolean,
    control:Control<IFormCrearLicitacionUser, any>,
    register:UseFormRegister<IFormCrearLicitacionUser>,
    errors:FieldErrorsImpl<IFormCrearLicitacionUser>,
    setValue:UseFormSetValue<IFormCrearLicitacionUser>,
    form:IFormCrearLicitacionUser,
    watch:UseFormWatch<IFormCrearLicitacionUser>
}
export default function EspecificacionesTecnicas ({ setValue, watch, step, form, control, setStep, puntoSums, brgs, update, errors, register }:Props) {
  console.log('form antes de use', form)
  useMeses(update, { ...form, fechaInicio: watch('fechaInicio'), fechaFin: watch('fechaFin') }, setValue)
  console.log('form dsps de use', form)
  return (
        <div >
                        <Card>
                            <CardHeader className='p-4' >
                        <p className="font-semibold dark:text-gray-400 ">Especificaciones Técnicas</p>
                            </CardHeader>
                            <CardBody className='grid gap-4' >
                        <Input {...register('empresa')} label="Razón Social" disabled size='lg' type="text" />
                        <Input error={!!errors.fechaInicio} {...register('fechaInicio')} label='Fecha de Inicio' size='lg' type="date" />
                        <Input error={!!errors.fechaFin} {...register('fechaFin')} label='Fecha Final' size='lg' type="date" />
                        <Controller name='puntoSum' control={control} render={({ field }) => (
                            <Select size='lg' error={!!errors.puntoSum} label="Punto de Suministro" {...field} >
                                {
                                    puntoSums.map((puntoSum) => (
                                        <Option key={puntoSum._id} value={puntoSum._id} >{puntoSum.name}</Option>
                                    ))
                                }
                            </Select>
                        )} />
                        <Controller name='brg' control={control} render={({ field }) => (
                            <Select size='lg' error={!!errors.brg} label="BRG" {...field} >
                                {
                                    brgs.map((brg) => (
                                        <Option key={brg._id} value={brg._id} >{brg.name}</Option>
                                    ))
                                }
                            </Select>
                        )} />
                        <Input error={!!errors.factorPlanta} size="lg" {...register('factorPlanta')} label='Factor Planta' type="number" />
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
