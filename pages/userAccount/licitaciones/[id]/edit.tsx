import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import SteperUpdateLicitacion from '../../../../components/common/SteperUpdateLicitacion'
import LayoutUser from '../../../../components/layout/layoutUser/LayoutUser'
import { Licitacion } from '../../../../types/data'
import { TypeToken } from '../../../../types/data/enums'
import { ErrorResponse } from '../../../../types/methods'
import { methodGetAuth } from '../../../../utils/fetch'
type Props={
  licitacion:Omit<Licitacion, 'usuario'|'participantes'>,
  data:Session,
  id:string
}
export default function LicitacionEdit ({ licitacion, id }:Props) {
  return (
        <LayoutUser>
            <section className='flex 2xl:text-2xl md:flex-row flex-col' >
                <SteperUpdateLicitacion licitacion={{
                  author: licitacion.author,
                  brg: licitacion.brg._id,
                  description: licitacion.description,
                  empresa: licitacion.empresa,
                  estado: licitacion.estado,
                  factorPlanta: licitacion.factorPlanta,
                  fechaFin: licitacion.fechaFin,
                  fechaFinApertura: licitacion.fechaFinApertura,
                  fechaInicio: licitacion.fechaInicio,
                  fechaInicioApertura: licitacion.fechaInicioApertura,
                  meses: licitacion.meses,
                  numLicitacion: licitacion.numLicitacion,
                  puntoSum: licitacion.puntoSum._id,
                  requisitos: licitacion.requisitos,
                  tipoLicitacion: '',
                  tipoServicio: licitacion.tipoServicio._id,
                  title: licitacion.title
                }} id={id} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    const { id } = ctx.params as {id:string}
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    const licitacion = await methodGetAuth(`licitacion/licitacionId/${id}`, data.accessToken) as ErrorResponse|Omit<Licitacion, 'usuario'|'participantes'>
    if ('error' in licitacion) throw new Error(licitacion.message)
    return {
      props: {
        data,
        licitacion,
        id
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}
