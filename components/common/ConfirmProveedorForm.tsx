/* import { useRouter } from 'next/router'
import { FormConfirmProveedor, HandleSubmit } from '../../types/form'
import { ErrorResponse, Response } from '../../types/methods'
import { methodPut } from '../../utils/fetch'
import { useForm } from '../hooks/useForm'
import swal from 'sweetalert'
import Loader from './Loader'

const initForm:FormConfirmProveedor = {
  code: '',
  correo: ''
} */
export default function ConfirmProveedorForm () {
  /* const { form, handleChange, loading, setLoading } = useForm<FormConfirmProveedor>(initForm)
  const { push } = useRouter()
  const confirmAccount:HandleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const data = await methodPut('auth/confirmProveedorAccount', { ...form, correo: localStorage.getItem('correoProveedorConfirm') }) as Response | ErrorResponse
      if ('error' in data) {
        console.log('error ', data.error)
        setLoading(false)
        swal(data.message, data.error.toString(), 'error')
      } else {
        console.log('mensaje ', data.message)
        localStorage.removeItem('correoProveedorConfirm')
        setLoading(false)
        swal('Proceso exitoso', data.message, 'success').then(() => {
          push('/login/empresa')
        })
      }
    } catch (err) {
      console.log('error confirm ', err)
      const error = err as Error
      setLoading(false)
      swal('Ha ocurrido un error', error.message, 'error')
    }
  }
  return (
        <form onSubmit={confirmAccount} className=" sm:w-96 bg-white shadow-lg p-8 flex flex-col" >
            <h1 className="text-gray-400 text-center text-xl uppercase tracking-widest" >Confirmación de Correo de Proveedor</h1>
            <p className="text-gray-400 mt-4" >Ingresa el código de verificación enviado al correo que usaste para registrarte</p>
            <article className="flex flex-col my-4 " >
                <label className="text-gray-400" htmlFor="code">Código de Verificación</label>
                <input onChange={handleChange} value={form.code} className="rounded-lg" name="code" placeholder="60HJ7L" type="text" />
            </article>
            {
                loading
                  ? <article className="flex justify-center" >
                    <Loader/>
                </article>
                  : <button className="text-white bg-yellow-400 rounded-xl py-2 font-extrabold shadow-lg shadow-yellow-200" type="submit" >Enviar Código</button>
            }
        </form>
  ) */
}
