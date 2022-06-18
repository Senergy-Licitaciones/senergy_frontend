import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HookData, HookParamsData } from '../../types/form'
import { methodGetAuth } from '../../utils/fetch'

export const useData:HookData = (session) => {
  const [data, setData] = useState<HookParamsData>({
    brgs: [],
    puntoSums: [],
    servicios: []
  })
  const { push } = useRouter()
  useEffect(() => {
    const runPromises = async (token:string) => {
      const [brgs, puntoSums, servicios] = await Promise.all([methodGetAuth('brg/getBrgs', token),
        methodGetAuth('puntoSum/getPuntoSums', token),
        methodGetAuth('servicio/getServicios', token)])
      setData({
        brgs,
        puntoSums,
        servicios
      })
    }
    session ? runPromises(session.accessToken) : push('/login')
  }, [])
  return {
    brgs: data.brgs,
    puntoSums: data.puntoSums,
    servicios: data.servicios
  }
}
