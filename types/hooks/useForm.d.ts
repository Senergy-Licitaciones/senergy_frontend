import { Dispatch, SetStateAction } from 'react'
import { HandlerChange } from '../form'
import { ErrorsForm, ValidatorForm } from '../validators'

export type UseForm=<Form, ValidationForm>(initForm:Form, validatorForm:ValidatorForm<Form, ValidationForm>)=>{
    form:Form,
    error:ErrorsForm<ValidationForm>,
    setError:Dispatch<SetStateAction<ErrorsForm<ValidatorForm>>>
    loading:boolean,
    setLoading:Dispatch<SetStateAction<boolean>>
    handleChange:HandlerChange
    setForm:Dispatch<SetStateAction<Form>>
}
