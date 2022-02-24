import { ReactNode } from "react";
import DynamicNavProveedor from "./DynamicNavProveedor";
import HeaderProveedor from "./HeaderProveedor";
import StaticNavProveedor from "./StaticNavProveedor";
type Props={
    children?:ReactNode
}
export default function LayoutProveedor({children}:Props):JSX.Element{
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