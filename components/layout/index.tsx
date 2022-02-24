import { ReactNode } from "react";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";
type Props = {
  children?: ReactNode
}
export default function LayoutHome({children}:Props):JSX.Element{
    return(
        <section className="flex flex-col" >
            <HeaderHome/>
            <main className="min-h-screen snap-y snap-mandatory ">
                {children}
            </main>
            <Footer/>
        </section>
    )
}