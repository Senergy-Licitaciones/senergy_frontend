import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import TableLicitacionesUser from '../../../components/common/TableLicitacionesUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { getLicitaciones } from '../../../services/users'
import { Licitacion } from '@mytypes/models'
import { TypeToken } from '@mytypes/models/enums'
import { createLicitacionesAdapter } from '@/adapters'
type Props={
    data:Session,
    licitaciones:Array<Omit<Licitacion, 'puntoSum'|'brg'|'tipoServicio'|'createdAt'|'updatedAt'>&{createdAt:string, updatedAt:string}>
}
export default function UserLicitaciones ({ licitaciones }:Props) {
  return (
        <LayoutUser>
            <section>
                <TableLicitacionesUser licitaciones={createLicitacionesAdapter(licitaciones)} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario primero')
    const licitaciones = await getLicitaciones(data.accessToken)
    console.log(licitaciones)
    return {
      props: {
        data,
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
