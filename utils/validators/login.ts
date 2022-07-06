import { REGEX_FORM } from '../../consts/regex'
import { FormLogin } from '../../types/form'
import { ErrorsForm, ValidatorForm } from '../../types/validators'
const validatorLogin:ValidatorForm<FormLogin, FormLogin> = (form) => {
  const errors: ErrorsForm<FormLogin> = {
    correo: '',
    password: ''
  }
  if (!form.correo.trim()) {
    errors.correo = 'Campo requerido'
  } else if (!REGEX_FORM.EMAIL.test(form.correo.trim())) errors.correo = 'Correo inválido'
  if (!form.password.trim()) {
    errors.password = 'Campo requerido'
  } else if (form.password.trim().length < 8 || form.password.trim().length > 16) errors.password = 'La contraseña debe tener una longitud de entre 8 y 16 caracteres'
  return errors
}
export default validatorLogin
