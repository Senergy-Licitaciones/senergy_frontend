import DynamicNav from "./DynamicNav";
import HeaderUser from "./HeaderUser";
import StaticNav from "./StaticNav";

export default function LayoutUser({children}){
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