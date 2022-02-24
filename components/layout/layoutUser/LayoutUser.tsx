import { ReactNode } from "react";
import DynamicNav from "./DynamicNav";
import HeaderUser from "./HeaderUser";
import StaticNav from "./StaticNav";
type Props = {
  children?: ReactNode
}
export default function LayoutUser({children}:Props):JSX.Element{
    return(
        <section className="flex" >
            <StaticNav/>
            <DynamicNav/>
            <HeaderUser>
                {children}
            </HeaderUser>
        </section>
    )
}