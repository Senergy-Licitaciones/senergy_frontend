import { Estado, PotenciaFacturar } from '@mytypes/form/enums'

export const OPTIONS_POTENCIA_FACTURAR = [{ label: PotenciaFacturar.MD_mes, value: PotenciaFacturar.MD_mes },
  { label: PotenciaFacturar.MD_personalizada, value: PotenciaFacturar.MD_personalizada },
  { label: PotenciaFacturar.SEIN, value: PotenciaFacturar.SEIN }]
export const OPTIONS_ESTADO = [{ label: Estado.Abierto.toUpperCase(), value: Estado.Abierto }, { label: Estado.Proceso.toUpperCase(), value: Estado.Proceso }, { label: Estado.Cerrado.toUpperCase(), value: Estado.Cerrado }]
