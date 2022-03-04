import {BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs";
export default function Footer():JSX.Element{
    return(
        <footer className="flex flex-1 flex-col 2xl:text-2xl p-8 items-center bg-gray-800" >
            <nav className="text-gray-400 flex flex-col sm:flex-row ">
                <a className="mx-2">
                    Enlace 1
                </a><a className="mx-2">
                    Enlace 2
                </a><a className="mx-2">
                    Enlace 3
                </a><a className="mx-2">
                    Enlace 4
                </a><a className="mx-2">
                    Enlace 5
                </a>
            </nav>
            <nav className="text-gray-400 flex my-4">
                <a href="" className="mx-4">
                    <BsFacebook/>
                </a>
                <a href="" className="mx-4">
                    <BsTwitter/>
                </a>
                <a href="" className="mx-4">
                    <BsInstagram/>
                </a>
               
            </nav>
            <p className="text-gray-400">
                2022, Senergy. All rights reserved
            </p>
        </footer>
    )
}