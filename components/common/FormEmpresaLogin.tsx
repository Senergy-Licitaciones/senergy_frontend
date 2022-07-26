import Link from 'next/link'
import { FormLogin, HandlerSubmit } from '@mytypes/form'
import { useForm } from '../hooks/useForm'
import Loader from './Loader'
import { signIn } from 'next-auth/react'
import { TypeToken } from '@mytypes/models/enums'
import { IoLockOpenOutline } from 'react-icons/io5'
import { URL_BASE } from '../../config'
import { useRouter } from 'next/router'
import swal from 'sweetalert'
import { validatorLogin } from '../../utils/validators'
const initForm:FormLogin = {
  correo: '',
  password: ''
}
export default function FormEmpresaLogin () {
  const { form, handleChange, loading, setLoading, error } = useForm<FormLogin, FormLogin>(initForm, validatorLogin)
  const { push } = useRouter()
  const login:HandlerSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const result = await signIn('credentials', { correo: form.correo, password: form.password, tipo: TypeToken.Proveedor, redirect: false, callbackUrl: `${URL_BASE}/empresaAccount/dashboard` }) as {error:string|null, status:number, url:string, ok:boolean}|undefined
    if (result) {
      if (result.error) { swal('Proceso Fallido', 'Credenciales incorrectas', 'error') } else {
        push('/empresaAccount/dashboard')
      }
    }
    setLoading(false)
  }
  return (
        <form onSubmit={login} className=" p-8 2xl:p-16 2xl:text-2xl flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]" >
                <span className='flex items-center justify-center text-sky-500 text-3xl' >
                <IoLockOpenOutline/>
                </span>
                <h1 className="text-center text-3xl 2xl:text-4xl">Proveedores de Energía Eléctrica</h1>
                <hr className="my-4" />
                <article className="flex flex-col 2xl:my-6 ">
                <label className="" htmlFor="correo">Correo</label>
                <input className='rounded bg-gray-100 border-gray-300' onChange={handleChange} value={form.correo} name="correo" type="email"/>
                {error.correo && <p className='text-red-500 font-light text-sm' >{error.correo}</p> }
                </article>
                <article className="flex my-3 2xl:my-6 flex-col">
                <label className="" htmlFor="password">Contraseña</label>
                <input className='rounded bg-gray-100 border-gray-300' onChange={handleChange} value={form.password} name="password" type="password"/>
                {error.password && <p className='text-red-500 font-light text-sm' >{error.password}</p> }
                </article>
                {
                    loading
                      ? <article className="flex justify-center" >
                        <Loader/>
                    </article>
                      : <button className="bg-sky-500 hover:bg-sky-700 transition-colors duration-300 text-white 2xl:my-4 my-3 font-bold py-2 rounded-md" type="submit" >Iniciar sesión</button>
                }
                <article className="flex justify-center">

                <Link href="/login">
                <a className="text-sky-400">
                    Si posees una cuenta de <strong>usuario libre</strong> inicia sesión <strong>aquí</strong>!
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300 my-3 2xl:my-4 "/>
                <article className="flex justify-center">
                <Link href="/register/empresa">
                    <a className="text-sky-400">
                        ¿Aún no estás <strong>registrado</strong>? Ingresa <strong>aquí</strong>!
                    </a>
                </Link>
                </article>
            </form>
  )
}
