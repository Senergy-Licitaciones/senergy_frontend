import { Estado, PotenciaFacturar } from '../types/form/enums'

export const OPTIONS_POTENCIA_FACTURAR = [{ label: PotenciaFacturar.MD_mes, value: PotenciaFacturar.MD_mes },
  { label: PotenciaFacturar.MD_personalizada, value: PotenciaFacturar.MD_personalizada },
  { label: PotenciaFacturar.SEIN, value: PotenciaFacturar.SEIN }]
export const OPTIONS_ESTADO = [{ label: Estado.Abierto, value: Estado.Abierto }, { label: Estado.Proceso, value: Estado.Proceso }, { label: Estado.Cerrado, value: Estado.Cerrado }]
