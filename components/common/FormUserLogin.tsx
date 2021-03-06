import Link from 'next/link'
import { FormLogin, HandlerSubmit } from '@mytypes/form'
import { useForm } from '../hooks/useForm'
import Loader from './Loader'
import { signIn, useSession } from 'next-auth/react'
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
export default function FormUserLogin () {
  const { form, handleChange, loading, setLoading, error } = useForm<FormLogin, FormLogin>(initForm, validatorLogin)
  const { status } = useSession()
  const { push } = useRouter()
  console.log('status ', status)
  const loginUser:HandlerSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const result = await signIn('credentials', { correo: form.correo, password: form.password, tipo: TypeToken.User, redirect: false, callbackUrl: `${URL_BASE}/userAccount` }) as {error:string|null, ok:boolean, status:number, url:string}|undefined
    if (result) {
      if (result.error) { swal('Proceso Fallido', 'Credenciales incorrectas', 'error') } else {
        push('/userAccount')
      }
    }

    setLoading(false)
  }

  return (
        <form onSubmit={loginUser} className={' transition-all duration-500 2xl:p-12 2xl:text-2xl p-8 flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]'} >
                <span className='flex items-center justify-center text-3xl text-sky-500' >
                  <IoLockOpenOutline/>
                </span>
                <h1 className=" text-3xl text-center 2xl:text-4xl">Usuarios Libres</h1>
                <hr className='my-4'/>
                <article className="flex mb-4 flex-col">
                <label className="" htmlFor="correo">Correo</label>
                <input className=' border-gray-300 rounded bg-gray-100' onChange={handleChange} value={form.correo} name="correo" type="email"/>
                {error.correo && <p className='text-red-500 font-light text-sm' >{error.correo}</p> }
                </article>
                <article className="flex mb-6 flex-col">
                <label className="" htmlFor="password">Contrase??a</label>
                <input className=' border-gray-300 rounded bg-gray-100 ' onChange={handleChange} value={form.password} name="password" type="password"/>
                {error.password && <p className='text-red-500 font-light text-sm' >{error.password}</p> }
                </article>
                {
                    loading
                      ? <article className="flex justify-center" >
                        <Loader/>
                    </article>
                      : <button className="bg-sky-500 hover:bg-sky-700 duration-300 ease-in-out transition-colors mb-4 text-white font-bold py-2 rounded-md" type="submit" >Iniciar sesi??n</button>
                }
                <article className="flex justify-center ">

                <Link href="/login/empresa">
                <a className="text-sky-400">
                    Si eres un <strong>proveedor de energ??a el??ctrica</strong> inicia sesi??n <strong>aqu??</strong>!
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300 my-4"/>
                <article className="flex justify-center">
                <Link href="/register">
                    <a className="text-sky-400">
                        ??A??n no est??s <strong>registrado</strong>? Ingresa <strong>aqu??</strong>!
                    </a>
                </Link>
                </article>
            </form>
  )
}
