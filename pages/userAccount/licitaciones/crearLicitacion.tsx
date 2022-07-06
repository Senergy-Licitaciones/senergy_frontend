import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import SteperCrearLicitacion from '../../../components/common/SteperCrearLicitacion'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { TypeToken } from '../../../types/data/enums'

export default function CrearLicitacion () {
  return (
        <LayoutUser>
            <section className="flex 2xl:text-2xl md:flex-row flex-col">
                <SteperCrearLicitacion />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    return {
      props: {
        data
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}
