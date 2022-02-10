import DynamicNavProveedor from "./DynamicNavProveedor";
import HeaderProveedor from "./HeaderProveedor";
import StaticNavProveedor from "./StaticNavProveedor";

export default function LayoutProveedor({children}){
    return(
        <section className="flex">
            <StaticNavProveedor/>
            <DynamicNavProveedor/>
            <HeaderProveedor>
                {children}
            </HeaderProveedor>
        </section>
    )
}