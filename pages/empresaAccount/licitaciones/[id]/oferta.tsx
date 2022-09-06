import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
import { getNamesParametros } from '@/services/data'
import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import FormCrearOferta from '../../../../components/common/FormCrearOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
type Props={
    id:string,
    parametros:Array<{_id:string, name:string}>
}
export default function LicitacionOferta ({ id, parametros }:Props) {
  return (
        <LayoutProveedor>
            <section>
             <FormCrearOferta parametros={parametros} idLicitacion={id} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as {id:string}
    const session = await unstable_getServerSession(context.req, context.res, configNextAuth) as Session
    const parametros = await getNamesParametros(session.accessToken)
    return {
      props: {
        id,
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
