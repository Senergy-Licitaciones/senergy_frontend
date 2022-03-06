import LayoutProveedor from "../../components/layout/layoutProveedor";

export default function HomeProveedor():JSX.Element{
    return(
        <LayoutProveedor>
            <section>
                <h1 className="text-center dark:text-gray-400 text-2xl" >Bienvenido al panel de proveedores</h1>
            </section>
        </LayoutProveedor>
    )
}