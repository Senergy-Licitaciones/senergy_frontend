import { useEffect, useState } from 'react'
import { HandleChange, HookForm } from '../../types/form'

export const useForm:HookForm = (initForm, validator) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [form, setForm] = useState(initForm)
  const [error, setError] = useState(validator(initForm))
  useEffect(() => {
    setError(validator(form))
  }, [form])
  const handleChange:HandleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  return {
    error,
    setError,
    form,
    handleChange,
    setForm,
    loading,
    setLoading
  }
}
