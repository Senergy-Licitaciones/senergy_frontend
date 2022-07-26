import { useRouter } from 'next/router'
import { useTemplate } from '../../../stateManagement/contexts/HandleTemplateContext'
import { getFormatRoute } from '../../../utils/formats'
import DashboardNav from './DashboardNav'
import LicitacionNav from './LicitacionNav'
export default function DynamicNavProveedor () {
  const { template } = useTemplate()
  const { pathname } = useRouter()
  return (
        <aside className={`z-0 hidden md:block sticky dark:bg-gray-800 top-0 bottom-0 h-screen transition-all duration-500 ${template.dynamicNavState ? ' w-72 p-2' : ' w-0 overflow-hidden'}`} >
            <div className="relative " >
                {getFormatRoute(pathname) === 'licitaciones' || getFormatRoute(pathname) === 'historialOfertas' || getFormatRoute(pathname) === 'licitacionesGuardadas'
                  ? <LicitacionNav/>
                  : <DashboardNav/>
            }
            </div>
        </aside>
  )
}
