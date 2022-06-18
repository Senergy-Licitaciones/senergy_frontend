import Link from 'next/link'
import { FormLogin, HandleSubmit, HookLogin } from '../../types/form'
import { useForm } from '../hooks/useForm'
import Loader from './Loader'
import { signIn } from 'next-auth/react'
import { TypeToken } from '../../types/data/enums'
const initForm:FormLogin = {
  correo: '',
  password: ''
}
export default function FormEmpresaLogin () {
  const { form, handleChange, loading, setLoading } = useForm(initForm) as HookLogin
  const login:HandleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await signIn('credentials', { correo: form.correo, password: form.password, tipo: TypeToken.Proveedor, callbackUrl: 'http://localhost:3000/empresaAccount/dashboard' })
    setLoading(false)
  }
  return (
        <form onSubmit={login} className=" p-8 2xl:p-16 2xl:text-2xl flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]" >
                <h1 className="font-bold text-3xl 2xl:text-4xl">Inicio de sesión de proveedores</h1>
                <hr className="my-4" />
                <article className="flex flex-col 2xl:my-6 ">
                <label className="font-bold" htmlFor="correo">Correo</label>
                <input onChange={handleChange} value={form.correo} name="correo" type="email"/>
                </article>
                <article className="flex my-3 2xl:my-6 flex-col">
                <label className="font-bold" htmlFor="password">Contraseña</label>
                <input onChange={handleChange} value={form.password} name="password" type="password"/>
                </article>
                {
                    loading
                      ? <article className="flex justify-center" >
                        <Loader/>
                    </article>
                      : <button className="bg-blue-500 text-white 2xl:my-4 my-3 font-bold py-2 rounded-md" type="submit" >Iniciar sesión</button>
                }
                <article className="flex justify-center">

                <Link href="/login">
                <a className="text-blue-400">
                    Si posees una cuenta de usuario inicia sesión aquí!
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300 my-3 2xl:my-4 "/>
                <article className="flex justify-center">
                <Link href="/register/empresa">
                    <a className="text-blue-400">
                        ¿Aún no estás registrado? Ingresa aquí!
                    </a>
                </Link>
                </article>
            </form>
  )
}
