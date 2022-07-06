/* import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormRegisterProveedor, HandleSubmit } from '../../types/form'
import { ErrorResponse, ResponseRegisterProveedor } from '../../types/methods'
import { methodPost } from '../../utils/fetch'
import { useForm } from '../hooks/useForm'
import swal from 'sweetalert'
import Loader from './Loader'
const initForm:FormRegisterProveedor = {
  correo: '',
  password: '',
  razSocial: '',
  ruc: 0,
  web: '',
  pais: 'Perú',
  address: '',
  phone: 0,
  terms: true
} */
export default function FormEmpresaRegister () {
  /* const { form, handleChange, setForm, loading, setLoading } = useForm<FormRegisterProveedor>(initForm)
  const { push } = useRouter()
  const register:HandleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const data = await methodPost('auth/registerProveedor', {
        correo: form.correo,
        password: form.password,
        pais: form.pais,
        razSocial: form.razSocial,
        address: form.address,
        ruc: form.ruc,
        phone: form.phone,
        web: form.web
      }) as ResponseRegisterProveedor|ErrorResponse
      if ('error' in data) {
        console.log('error en request ', data.error)
        setLoading(false)
        swal(data.message, data.error.toString(), 'error')
      } else {
        console.log('data ', data)
        localStorage.setItem('correoProveedorConfirm', data.correo)
        setLoading(false)
        swal('Proveedor registrado', data.message, 'success').then(() => {
          push('/register/confirmProveedor')
        })
      }
    } catch (err) {
      console.log('error register ', err)
      const error = err as Error
      swal('Ha ocurrido un error', error.message, 'error')
    }
  }
  return (
        <form onSubmit={register} className="p-8 flex 2xl:text-2xl 2xl:p-12 flex-col">
                        <h1 className="font-extrabold text-4xl 2xl:text-5xl text-center ">Registro de proveedores</h1>
                        <hr className="bg-gray-400 my-4" />
                        <article className="flex flex-col my-2">
                            <label htmlFor="correo">Correo</label>
                            <input value={form.correo} onChange={handleChange} name="correo" type="email" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="password">Contraseña</label>
                            <input onChange={handleChange} value={form.password} name="password" type="password" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="razSocial">Razón social</label>
                            <input value={form.razSocial} onChange={handleChange} name="razSocial" type="text" />
                        </article>
                        <article className="flex flex-col my-4" >
                            <label htmlFor="ruc">RUC</label>
                            <input value={form.ruc} onChange={handleChange} name="ruc" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="address">Dirección</label>
                            <input value={form.address} onChange={handleChange} name="address" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="phone">Teléfono de contacto</label>
                            <input value={form.phone} onChange={handleChange} name="phone" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="web">Sitio web</label>
                            <input onChange={handleChange} value={form.web} type="text" name="web" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="pais">País</label>
                            <select onChange={handleChange} value={form.pais} name="pais">
                                <option value="Perú">Perú</option>
                                <option value="Chile">Chile</option>
                            </select>
                        </article>
                        <article className="my-2 flex items-center">
                            <input onChange={(e) => setForm({ ...form, terms: e.target.checked })} checked={form.terms} className="focus:outline-purple-500 text-purple-600" type="checkbox" name="terms" />
                            <label className="ml-2" htmlFor="terminos">Acepto los <a className="text-blue-500" href="">Términos y condiciones</a></label>
                        </article>
                        {
                            loading
                              ? <article className="flex justify-center" >
                                <Loader/>
                            </article>
                              : <button type="submit" className="my-4 rounded-md py-2 2xl:py-3 font-bold bg-blue-500 text-white">Registrarse</button>
                        }
                        <article className="flex justify-center">

                        <Link href="/login/empresa">
                        <a className="text-blue-500">¿Ya posees una cuenta?, inicia sesión ahora!</a>
                        </Link>
                        </article>
                        <hr className="my-4 bg-gray-400" />
                        <article className=" flex justify-center">
                        <Link href="/register">
                            <a className="text-blue-500">
                                Si deseas realizar licitaciones, regístrate como usuario aquí!
                            </a>
                        </Link>
                        </article>
                    </form>
  ) */
}
