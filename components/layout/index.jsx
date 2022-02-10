import Footer from "./Footer";
import HeaderHome from "./HeaderHome";

export default function LayoutHome({children}){
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