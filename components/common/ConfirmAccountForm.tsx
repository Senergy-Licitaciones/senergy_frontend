/* import { useRouter } from 'next/router'
import { FormConfirmAccount, HandleSubmit } from '../../types/form'
import { ErrorResponse } from '../../types/methods'
import { methodPut } from '../../utils/fetch'
import { useForm } from '../hooks/useForm'
const initForm:FormConfirmAccount = {
  code: '',
  idUser: ''
} */
export default function ConfirmAccountForm () {
  /* const { form, handleChange } = useForm<FormConfirmAccount>(initForm)
  const { push } = useRouter()
  const confirmAccount:HandleSubmit = async (e) => {
    e.preventDefault()
    const response = await methodPut('auth/confirmAccount', { ...form, idUser: localStorage.getItem('idUserToConfirm') }) as Response | ErrorResponse
    console.log('response ', response)
    if ('error' in response) {
      console.log('error ', response.message)
    } else {
      localStorage.removeItem('idUserToConfirm')
      push('/login')
    }
  }
  return (
        <form onSubmit={confirmAccount} className=" sm:w-96 bg-white shadow-lg p-8 flex flex-col" >
            <h1 className="text-gray-400 text-center text-xl uppercase tracking-widest" >Confirmación de Correo</h1>
            <p className="text-gray-400 mt-4" >Ingresa el código de verificación enviado al correo que usaste para registrarte</p>
            <article className="flex flex-col my-4 " >
                <label className="text-gray-400" htmlFor="code">Código de Verificación</label>
                <input onChange={handleChange} value={form.code} className="rounded-lg" name="code" placeholder="60HJ7L" type="text" />
            </article>

            <button className="text-white bg-yellow-400 rounded-xl py-2 font-extrabold shadow-lg shadow-yellow-200" type="submit" >Enviar Código</button>
        </form>
  ) */
}
