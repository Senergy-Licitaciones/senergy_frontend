import SteperCrearLicitacion from '../../../components/common/SteperCrearLicitacion'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'

export default function CrearLicitacion () {
  return (
        <LayoutUser>
            <section className="flex 2xl:text-2xl md:flex-row flex-col">
                <SteperCrearLicitacion />
            </section>
        </LayoutUser>
  )
}
