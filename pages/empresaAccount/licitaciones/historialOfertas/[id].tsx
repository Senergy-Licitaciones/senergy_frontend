import { GetServerSideProps } from 'next'
import FormUpdateOferta from '../../../../components/common/FormUpdateOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { getOferta } from '../../../../services/ofertas'
import { Oferta } from '@mytypes/models'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'

type Props={
    id:string,
    oferta:Oferta
}
export default function EditOferta ({ oferta }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <h1>Editar Oferta</h1>
                <FormUpdateOferta oferta={oferta} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const params = context.params as {id:string}
    const session = await unstable_getServerSession(context.req, context.res, configNextAuth) as Session
    const oferta = await getOferta(params.id, session.accessToken)
    return {
      props: {
        id: params.id,
        oferta
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
