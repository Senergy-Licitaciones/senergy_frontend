import { GetServerSideProps } from 'next'
import FormUpdateOferta from '../../../../components/common/FormUpdateOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { getOferta } from '../../../../services/ofertas'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
import { getNamesParametros } from '@/services/data'
import { createOfertaByIdAdapter } from '@/adapters'
import { OfertaByIdResponse } from '@/types/responses'

type Props={
    id:string,
    oferta:OfertaByIdResponse,
    parametros:Array<{_id:string, name:string}>
}
export default function EditOferta ({ oferta, parametros }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <FormUpdateOferta parametros={parametros} oferta={createOfertaByIdAdapter(oferta)} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const params = context.params as {id:string}
    const session = await unstable_getServerSession(context.req, context.res, configNextAuth) as Session
    const [oferta, parametros] = await Promise.all([getOferta(params.id, session.accessToken), getNamesParametros(session.accessToken)])
    return {
      props: {
        id: params.id,
        oferta,
        parametros
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
