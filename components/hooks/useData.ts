import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getBrgs, getPuntoSums, getServicios } from '../../services/data'
import { UseData } from '../../types/hooks'
import { DataSelect } from '../../types/models'

export const useData:UseData = (session) => {
  const [data, setData] = useState<{
    brgs:Array<DataSelect>,
    puntoSums:Array<DataSelect>,
    servicios:Array<DataSelect>
  }>({
    brgs: [],
    puntoSums: [],
    servicios: []
  })
  const { push } = useRouter()
  useEffect(() => {
    const runPromises = async (token:string) => {
      const [brgs, puntoSums, servicios] = await Promise.all([getBrgs(token),
        getPuntoSums(token),
        getServicios(token)])
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
