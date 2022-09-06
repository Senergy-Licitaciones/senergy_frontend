import Link from 'next/link'
import { IFormLogin } from '@mytypes/form'
import Loader from './Loader'
import { signIn } from 'next-auth/react'
import { TypeToken } from '@mytypes/models/enums'
import { IoLockOpenOutline } from 'react-icons/io5'
import { URL_BASE } from '../../config'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginResolver } from '@/utils/validators'
import { useState } from 'react'
import { BiKey, BiMailSend } from 'react-icons/bi'
import { Errors } from './Errors'
export default function FormEmpresaLogin () {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
    resolver: loginResolver
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const login:SubmitHandler<IFormLogin> = async (data) => {
    setLoading(true)
    const result = await signIn('credentials', { correo: data.correo, password: data.password, tipo: TypeToken.Proveedor, redirect: false, callbackUrl: `${URL_BASE}/empresaAccount/dashboard` }) as {error:string|null, status:number, url:string, ok:boolean}|undefined
    if (result) {
      if (result.error) { swal('Proceso Fallido', 'Credenciales incorrectas', 'error') } else {
        push('/empresaAccount/dashboard')
      }
    }
    setLoading(false)
  }
  return (
        <form onSubmit={handleSubmit(login)} >
          <Card>
            <Errors errors={errors} />
            <CardHeader className='p-4' >

                <span className='flex items-center justify-center text-sky-500 text-3xl' >
                <IoLockOpenOutline/>
                </span>
                <h1 className="text-center text-3xl 2xl:text-4xl">Proveedores de Energía Eléctrica</h1>
            </CardHeader>
            <CardBody className='grid gap-4' >
                <Input size='lg' {...register('correo')} error={!!errors.correo} label="Correo" icon={<BiMailSend/>} type="email" />
                <Input size='lg' {...register('password')} error={!!errors.password} label="Contraseña" icon={<BiKey/>} type="password" />
            </CardBody>
            <CardFooter divider>

                {
                    loading
                      ? <article className="flex justify-center" >
                        <Loader/>
                    </article>
                      : <Button fullWidth type="submit" >Iniciar sesión</Button>
                }
                <article className="flex justify-center mt-4">

                <Link href="/login">
                <a >
                  <Typography variant="paragraph" color="light-blue" >
                    Si posees una cuenta de <strong>usuario libre</strong> inicia sesión <strong>aquí</strong>!
                  </Typography>
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300 my-3 2xl:my-4 "/>
                <article className="flex justify-center">
                <Link href="/register/empresa">
                    <a>
                  <Typography variant="small" color="light-blue" >
                        ¿Aún no estás <strong>registrado</strong>? Ingresa <strong>aquí</strong>!
                  </Typography>
                    </a>
                </Link>
                </article>
            </CardFooter>
          </Card>
            </form>
  )
}
