import { ReactNode, useEffect, useState } from 'react'
import Footer from './Footer'
import HeaderHome from './HeaderHome'
type Props = {
  children?: ReactNode,
  title:string
}
export default function LayoutHome ({ children }:Props) {
  const [content, setContent] = useState(false)
  useEffect(() => {
    setContent(true)
    return () => {
      setContent(false)
    }
  }, [])
  return (
        <section className="flex flex-col" >

            <HeaderHome/>
            <main className={`${content ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-1000 min-h-screen snap-y snap-mandatory `}>
                {children}
            </main>
            <Footer/>
        </section>
  )
}
