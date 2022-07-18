import { Dispatch, SetStateAction, useState } from 'react'
import { TypeFormulaIndex } from '../../../types/data/enums'
import { FormCrearOfertaProveedor, HandleChange } from '../../../types/form'
type Props={
    setForm:Dispatch<SetStateAction<FormCrearOfertaProveedor>>,
    form:FormCrearOfertaProveedor,
    formula:TypeFormulaIndex
}
export default function FormulaIndex ({ setForm, form, formula }:Props) {
  const [index, setIndex] = useState('')
  const handleChangeIndex:HandleChange = (e) => {
    const { value } = e.target
    setIndex(value)
  }
  const generarFormula = () => {
    setForm({
      ...form,
      [formula]: [...form[formula], { index, factor: 0 }]
    })
  }
  return (
        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="formulaIndexPotencia">Fórmula de Indexación para Potencia</label>
                            <select onChange={handleChangeIndex} value={index} className="dark:bg-gray-800 dark:text-gray-400" name="formulaIndexPotencia" id="">
                                <option value="">-Seleccionar un índice-</option>
                                <option value="PPI">PPI</option>
                                <option value="PGN">PGN</option>
                                <option value="PG">PG</option>
                            </select>
                            <span onClick={generarFormula} className="bg-sky-600 block cursor-pointer py-2 px-4 text-white" >Agregar índice</span>
                            {form[formula].map((el, i) => (
                                <article key={`${formula}-${i}`} className="flex flex-col my-4" >
                                   <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor={el.index}>{el.index}</label>

                                    <input onChange={(e) => setForm({
                                      ...form,
                                      [formula]: form[formula].map((elemento, pos) => {
                                        if (pos === i) {
                                          return {
                                            ...elemento,
                                            factor: parseFloat(e.target.value)
                                          }
                                        }
                                        return elemento
                                      })
                                    })} value={form[formula][i].factor} name={el.index} className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar factor" type="number" />

                                </article>
                            ))}
                        </article>
  )
}
