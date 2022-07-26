import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import LicitacionDetails from '../../../../components/common/LicitacionDetails'
import LayoutUser from '../../../../components/layout/layoutUser/LayoutUser'
import { getLicitacion } from '../../../../services/licitaciones'
import { Licitacion } from '@mytypes/models'
import { TypeToken } from '@mytypes/models/enums'
type Props={
    licitacion:Omit<Licitacion, 'usuario'|'participantes'>,
    data:Session
}
export default function LicitacionView ({ licitacion }:Props) {
  return (
        <LayoutUser>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    const { id } = ctx.params as {id:string}
    if (!data) throw new Error('Debe iniciar sesión primero para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    const licitacion = await getLicitacion(id, data.accessToken)
    return {
      props: {
        licitacion,
        data
      }
    }
  } catch (err) {
    const error = err as Error
    console.log('error ', err)
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login'
      }
    }
  }
}
