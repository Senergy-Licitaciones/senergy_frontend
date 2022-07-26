import { GetServerSideProps } from 'next'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { Oferta } from '../../../../types/models'
import TableOfertas from '../../../../components/common/TableOfertas'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { TypeToken } from '../../../../types/models/enums'
import { getOfertas } from '../../../../services/ofertas'
type Props={
    ofertas:Oferta[],
    data:Session
}
export default function HistorialOfertas ({ ofertas }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <TableOfertas ofertas={ofertas} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe Iniciar Sesión')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('No tiene acceso a esta página')
    const ofertas = await getOfertas(data.accessToken)
    return {
      props: {
        ofertas,
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
