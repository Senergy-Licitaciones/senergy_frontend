import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import TableLicitacionesUser from '../../../components/common/TableLicitacionesUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { Licitacion } from '../../../types/data'
import { TypeToken } from '../../../types/data/enums'
import { ErrorResponse } from '../../../types/methods'
import { methodGetAuth } from '../../../utils/fetch'
type Props={
    data:Session,
    licitaciones:Array<Licitacion>
}
export default function UserLicitaciones ({ licitaciones }:Props) {
  return (
        <LayoutUser>
            <section>
                <TableLicitacionesUser licitaciones={licitaciones} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario primero')
    const licitaciones = await methodGetAuth('user/getLicitaciones', data.accessToken) as ErrorResponse|Array<Licitacion>
    if ('error' in licitaciones) throw new Error(licitaciones.message)
    return {
      props: {
        token: data.token,
        licitaciones
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
