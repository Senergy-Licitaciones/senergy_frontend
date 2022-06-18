import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import LicitacionDetails from '../../../../components/common/LicitacionDetails'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { Licitacion } from '../../../../types/data'
import { ErrorResponse } from '../../../../types/methods'
import { methodGetAuth } from '../../../../utils/fetch'
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
    if (data.user.tipo !== 'proveedor') throw new Error('No tiene acceso a esta página')
    const licitacion = await methodGetAuth(`licitacion/licitacionId/${param.id}`, data.accessToken) as Omit<Licitacion, 'usuario' | 'participantes'>|ErrorResponse
    if ('error' in licitacion) throw new Error(licitacion.message)
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
