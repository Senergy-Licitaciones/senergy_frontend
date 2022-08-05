import { useEffect, useState } from 'react'
import { HandlerChange } from '@mytypes/form'
import { UseForm } from '@mytypes/hooks'

export const useForm:UseForm = (initForm, validator) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState(initForm)
  const [error, setError] = useState(validator(initForm))
  useEffect(() => {
    setError(validator(form))
  }, [form])
  const handleChange:HandlerChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleChangeNumber:HandlerChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: parseFloat(value)
    })
  }
  return {
    error,
    setError,
    form,
    handleChangeNumber,
    handleChange,
    setForm,
    loading,
    setLoading
  }
}
