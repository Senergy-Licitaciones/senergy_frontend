import Link from "next/link";
import React from "react";
import { FaBook, FaHeart } from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
import LayoutHome from "../components/layout";

export default function About():JSX.Element{
    return(

    <LayoutHome>
        <section className="flex p-4 flex-col items-center justify-around min-h-screen" >
            <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-center" >¿Quiénes somos?</h1>
            <div className="grid grid-flow-row gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:gap-16 grid-cols-1" >
                <div className="flex 2xl:text-2xl flex-col items-center text-center shadow-lg p-2" >
                    <h2 className="font-bold 2xl:text-3xl text-xl my-4 " >Nuestra misión</h2>
                    <span className="flex justify-center text-xl items-center text-white rounded-full w-16 h-16 bg-sky-300 " >
                        <IoBusinessSharp/>
                    </span>
                    <p>Lias quasi, similique at rem autem, molestias unde cupiditate, placeat illum laborum ducimus eum ullam officiis. Laudantium velit odit commodi modi, dolores aliquam vitae quam maxime.</p>
                </div>
                <div className="flex 2xl:text-2xl flex-col items-center text-center shadow-lg p-2" >
                    <h2 className="font-bold 2xl:text-3xl text-xl my-4" >Nuestra visión</h2>
                    <span className="flex justify-center text-xl items-center text-white rounded-full w-16 h-16 bg-sky-300 " >
                        <FaBook/>
                    </span>
                    <p>Lias quasi, similique at rem autem, molestias unde cupiditate, placeat illum laborum ducimus eum ullam officiis. Laudantium velit odit commodi modi, dolores aliquam vitae quam maxime.</p>
                </div>
                <div className="flex flex-col 2xl:text-2xl items-center text-center shadow-lg p-2" >
                    <h2 className="font-bold 2xl:text-3xl text-xl my-4" >Nuestros valores</h2>
                    <span className="flex justify-center text-xl items-center text-white rounded-full w-16 h-16 bg-sky-300 " >
                        <FaHeart/>
                    </span>
                    <p>Lias quasi, similique at rem autem, molestias unde cupiditate, placeat illum laborum ducimus eum ullam officiis. Laudantium velit odit commodi modi, dolores aliquam vitae quam maxime.</p>
                </div>
            </div>
            <Link href="/">
            <a className="2xl:text-2xl text-sky-400 font-semibold" >
                Conocer más de nosotros
            </a></Link>
        </section>
    </LayoutHome>
    )
}