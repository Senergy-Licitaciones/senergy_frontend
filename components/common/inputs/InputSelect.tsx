import { HandlerChange, OptionSelect } from '../../../types/form'

type Props={
    name:string,
    options:Array<OptionSelect>,
    value:string,
    handleChange:HandlerChange,
    label:string,
    error:string
}
export default function InputSelect ({ label, name, options, value, handleChange, error }:Props) {
  return (
    <div className="flex flex-col my-4">
      <label className="text-gray-500 2xl:text-lg dark:text-gray-400 text-sm" htmlFor={name}>{label} <strong className='text-red-500' >*</strong> </label>
      <select className="dark:bg-gray-800 dark:text-gray-400 " name={name} value={value} onChange={handleChange}>
        <option value="">-Seleccionar {label} -</option>
        {options.map((option, i) => (
            <option key={option.value + '-' + i} className="capitalize" value={option.value}>{option.label}</option>
        ))}
        </select>
        {error && <p className='text-red-500 font-light text-sm' >{error}</p> }
    </div>
  )
}
