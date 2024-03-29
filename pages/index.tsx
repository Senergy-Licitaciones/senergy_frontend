import { Button, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import LayoutHome from '../components/layout'

export default function Home() {
    return (
        <LayoutHome title='Inicio' >
            <HomePage />
        </LayoutHome>
    )
}
export function HomePage() {
    return (
        <section className=" min-h-screen flex justify-center items-start py-20 snap-center">
            <div className="flex flex-col max-w-4xl">
                <Typography variant="h1" color="gray" className=" font-extrabold text-center">Encuentra el <span className='text-yellow-500'   >suministro de energía
                </span> adecuado para ti</Typography>

                <Typography variant="h2" color="gray" className=" text-md sm:text-xl 2xl:text-2xl text-center my-4 text-gray-400 font-semibold">Genera licitaciones para suministros de energía eléctrica de más de 2000 proveedores, de forma rápida y segura </Typography>
                <article className="flex p-4 flex-col sm:flex-row justify-center">
                    <Link href="/login" passHref >
                        <Button variant='gradient' className='text-gray-50' color="yellow"  >
                            Usuario Libre
                        </Button>
                    </Link>
                    <Link href="/login/empresa">
                        <Button variant="outlined" color='yellow' className=" ml-2 px-8 shadow-2xl border-2 border-yellow-500 " >
                            Proveedor de Energía Eléctrica
                        </Button>
                    </Link>

                </article>
            </div>
        </section>
    )
}
