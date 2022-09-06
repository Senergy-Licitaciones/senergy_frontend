import { useState } from 'react'
import { TypeFormulaIndex } from '@mytypes/models/enums'
import { IFormCrearOfertaProveedor } from '@mytypes/form'
import { Button, Input, Option, Select } from '@material-tailwind/react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
type Props={
    setForm:UseFormSetValue<IFormCrearOfertaProveedor>,
    watch:UseFormWatch<IFormCrearOfertaProveedor>,
    formula:TypeFormulaIndex,
    parametros:Array<{_id:string, name:string}>
}
export default function FormulaIndex ({ setForm, watch, formula, parametros }:Props) {
  const [index, setIndex] = useState('')
  const generarFormula = () => {
    setForm(formula === TypeFormulaIndex.Energia ? 'formulaIndexEnergia' : 'formulaIndexPotencia', [...watch(formula === TypeFormulaIndex.Energia ? 'formulaIndexEnergia' : 'formulaIndexPotencia'), { indexId: index, factor: 0 }])
  }
  return (
        <>
          <Select value={index} onChange={(e) => setIndex(`${e}`)} size="lg" label={`Fórmula de Indexación para ${formula === TypeFormulaIndex.Energia ? 'Energía' : 'Potencia'}`} >
        {
          parametros.map((parametro) => <Option key={parametro._id} value={parametro._id}>{parametro.name}</Option>)
        }
          </Select>
          <Button onClick={generarFormula} size="lg" >Agregar índice</Button>
                            {watch(formula === TypeFormulaIndex.Potencia ? 'formulaIndexPotencia' : 'formulaIndexEnergia').map((el, i) => (
                                <Input key={formula + '-' + i} onChange={(e) => setForm(formula === TypeFormulaIndex.Energia ? 'formulaIndexEnergia' : 'formulaIndexPotencia', watch(formula === TypeFormulaIndex.Energia ? 'formulaIndexEnergia' : 'formulaIndexPotencia').map((elemento, pos) => {
                                  if (pos === i) {
                                    return {
                                      ...elemento,
                                      factor: parseFloat(e.target.value)
                                    }
                                  }
                                  return elemento
                                })
                                )} value={watch(formula === TypeFormulaIndex.Energia ? 'formulaIndexEnergia' : 'formulaIndexPotencia')[i].factor} name={el.indexId} size='lg' label={parametros.filter((parametro) => parametro._id === el.indexId)[0].name} type="number" />

                            ))}
            </>
  )
}
