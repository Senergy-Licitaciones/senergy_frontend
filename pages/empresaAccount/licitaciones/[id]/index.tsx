import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import LicitacionDetails from '../../../../components/common/LicitacionDetails'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { getLicitacion } from '../../../../services/licitaciones'
import { Licitacion } from '../../../../types/models'
import { TypeToken } from '../../../../types/models/enums'

type Props={
    licitacion:Omit<Licitacion, 'usuario' | 'participantes'>,
    data:Session
}
export default function LicitacionDetail ({ licitacion }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    const param = ctx.params as {id:string}
    if (!data) throw new Error('Debe Iniciar Sesión')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('No tiene acceso a esta página')
    const licitacion = await getLicitacion(param.id, data.accessToken)
    return {
      props: {
        licitacion,
        data
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        message: error.message
      },
      redirect: {
        destination: '/login/empresa'

      }
    }
  }
}
