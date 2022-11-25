import Link from 'next/link'
import { IFormLogin } from '@mytypes/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import Loader from './Loader'
import { signIn, useSession } from 'next-auth/react'
import { TypeToken } from '@mytypes/models/enums'
import { IoLockOpenOutline } from 'react-icons/io5'
import { URL_BASE } from '../../config'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react'
import { BiKey, BiMailSend } from 'react-icons/bi'
import { loginResolver } from '@/utils/validators'
import { useState } from 'react'
import { Errors } from './Errors'
export default function FormUserLogin () {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
    resolver: loginResolver
  })
  const [loading, setLoading] = useState(false)
  const { status } = useSession()
  const { push } = useRouter()
  console.log('status ', status)
  const loginUser:SubmitHandler<IFormLogin> = async (data) => {
    setLoading(true)
    const result = await signIn('credentials', { correo: data.correo, password: data.password, tipo: TypeToken.User, redirect: false, callbackUrl: `${URL_BASE}/userAccount` }) as {error:string|null, ok:boolean, status:number, url:string}|undefined
    console.log('result ', result)
    if (result) {
      if (result.error) { swal('Proceso Fallido', 'Credenciales incorrectas', 'error') } else {
        push('/userAccount')
      }
    }

    setLoading(false)
  }

  return (
        <form onSubmit={handleSubmit(loginUser)} >
          <Card>
            <Errors errors={errors} />
            <CardHeader className='py-4' >
                <span className='flex items-center justify-center text-3xl text-sky-500' >
                  <IoLockOpenOutline/>
                </span>
                <h1 className=" text-3xl text-center 2xl:text-4xl">Usuarios Libres</h1>
            </CardHeader>
            <CardBody className='grid gap-4' >
              <Input {...register('correo')} error={!!errors.correo} label='Correo' icon={<BiMailSend/>} type="email" size='lg' />
                <Input {...register('password')} error={!!errors.password} label='Contraseña' icon={<BiKey/>} size="lg" type="password" />
            </CardBody>
            <CardFooter divider >

                {
                    loading
                      ? <article className="flex justify-center" >
                        <Loader/>
                    </article>
                      : <Button type="submit" fullWidth >Iniciar sesión</Button>
                }
                <article className="flex justify-center  mt-4">

                <Link href="/login/empresa">
                  <Typography color="light-blue" variant="paragraph" >
                    Si eres un <strong >proveedor de energía eléctrica</strong> inicia sesión <strong>aquí</strong>!
                  </Typography>
                </Link>
                </article>
                <hr className="bg-gray-300 my-4"/>
                <article className="flex justify-center">
                <Link href="/register">
                  
                  <Typography color="light-blue" variant="small" >

                        ¿Aún no estás <strong>registrado</strong>? Ingresa <strong>aquí</strong>!

                  </Typography>
                </Link>
                </article>
            </CardFooter>
          </Card>
            </form>
  )
}
