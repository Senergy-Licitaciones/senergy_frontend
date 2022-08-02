import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import SteperUpdateLicitacion from '../../../../components/common/SteperUpdateLicitacion'
import LayoutUser from '../../../../components/layout/layoutUser/LayoutUser'
import { getLicitacion } from '../../../../services/licitaciones'
import { Licitacion } from '@mytypes/models'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props={
  licitacion:Omit<Licitacion, 'usuario'|'participantes'>,
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
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const { id } = ctx.params as {id:string}

    const licitacion = await getLicitacion(id, session.accessToken)
    return {
      props: {
        licitacion,
        id
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
