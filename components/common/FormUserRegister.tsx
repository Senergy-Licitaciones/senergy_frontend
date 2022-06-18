import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormRegisterUser, HandleSubmit, HookRegistrarUsuario } from '../../types/form'
import { ErrorResponse, ResponseRegisterUser } from '../../types/methods'
import { methodPost } from '../../utils/fetch'
import { useForm } from '../hooks/useForm'
import Loader from './Loader'
const initForm:FormRegisterUser = {
  correo: '',
  password: '',
  empresa: '',
  phone: 0,
  ruc: 0,
  web: '',
  address: '',
  terms: true
}
export default function FormUserRegister () {
  const { form, handleChange, setForm, loading, setLoading } = useForm(initForm) as HookRegistrarUsuario
  const { push } = useRouter()
  const register:HandleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await methodPost('auth/registerUsuario',
      {
        correo: form.correo,
        password: form.password,
        ruc: form.ruc,
        address: form.address,
        phone: form.phone,
        empresa: form.empresa,
        web: form.web
      }) as ResponseRegisterUser | ErrorResponse
    console.log('response ', response)
    if ('error' in response) {
      console.log('Error encontrado ', response.message)
      setLoading(false)
    } else {
      localStorage.setItem('idUserToConfirm', response.idUser)
      setLoading(false)
      push('/register/confirmAccount')
    }
  }
  return (
        <form onSubmit={register} className="p-8 2xl:p-12 2xl:text-2xl flex flex-col">
                        <h1 className="font-extrabold text-4xl 2xl:text-5xl text-center ">Registro de usuarios</h1>
                        <hr className="bg-gray-400 my-4" />
                        <article className="flex flex-col my-2">
                            <label htmlFor="correo">Correo</label>
                            <input onChange={handleChange} value={form.correo} name="correo" type="email" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="password">Contraseña</label>
                            <input onChange={handleChange} value={form.password} name="password" type="password" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="empresa">Empresa</label>
                            <input onChange={handleChange} value={form.empresa} name="empresa" type="text" />
                        </article>
                        <article className="flex flex-col my-4" >
                            <label htmlFor="ruc">RUC</label>
                            <input onChange={handleChange} value={form.ruc} name="ruc" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="phone">Teléfono de contacto</label>
                            <input onChange={handleChange} value={form.phone} name="phone" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="web">Sitio web</label>
                            <input onChange={handleChange} value={form.web} type="text" name="web" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="address">Dirección</label>
                            <input onChange={handleChange} value={form.address} type="text" name="address" />
                        </article>
                        <article className="my-2 flex items-center">
                            <input onChange={(e) => setForm({ ...form, terms: e.target.checked })} checked={form.terms} className="focus:outline-purple-500 text-purple-600" type="checkbox" name="terms" />
                            <label className="ml-2" htmlFor="terminos">Acepto los <a className="text-blue-500" href="">Términos y condiciones</a></label>
                        </article>
                        {
                            loading
                              ? <article className="flex flex-col justify-center items-center" >
                                <Loader/>
                            </article>
                              : <button type="submit" className="my-4 2xl:py-3 rounded-md py-2 font-bold bg-blue-500 text-white">Registrarse</button>
                        }
                        <article className="flex justify-center">

                        <Link href="/login">
                        <a className="text-blue-500">¿Ya posees una cuenta?, inicia sesión ahora!</a>
                        </Link>
                        </article>
                        <hr className="my-4 bg-gray-400" />
                        <article className=" flex justify-center">
                        <Link href="/register/empresa">
                            <a className="text-blue-500">
                                Si deseas participar en licitaciones, regístrate como proveedor aquí!
                            </a>
                        </Link>
                        </article>
                    </form>
  )
}
