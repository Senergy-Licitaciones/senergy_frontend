import { REGEX_FORM } from '../../constants/regex'
import { FormLogin } from '@mytypes/form'
import { ErrorsForm, ValidatorForm } from '@mytypes/validators'
export const validatorLogin:ValidatorForm<FormLogin, FormLogin> = (form) => {
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
