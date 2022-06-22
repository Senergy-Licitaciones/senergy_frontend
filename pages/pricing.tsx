import LayoutHome from '../components/layout'

const Pricing = () => {
  return (
        <LayoutHome>
            <section className="flex py-4 px-2 flex-col justify-center min-h-screen items-center" >
                <h1 className=" text-xl lg:text-2xl text-center 2xl:font-semibold text-gray-700 2xl:text-5xl" >Escoge el plan que más se acomode a ti!</h1>
                <div className="grid 2xl:text-2xl py-3 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1 grid-flow-row " >
                    <div className="shadow-xl rounded overflow-hidden" >
                        <h2 className="bg-sky-500 uppercase 2xl:px-12 py-2 text-white text-center" >Plan gratuito</h2>
                        <div className="bg-gradient-to-b from-sky-300 to-white p-4 w-full flex justify-center " >
                            <span className="flex flex-col items-center w-24 h-24  justify-center bg-sky-300 text-white border-white border-4 rounded-full " >
                                <p className="font-extrabold text-lg" >S/.0.00</p>
                                <p className="text-sm font-light" >Sin costo</p>
                            </span>
                        </div>
                        <ul className="divide-y p-4" >
                            <li className="py-2" >
                                <p>Acceso como lector a las licitaciones publicadas</p>
                            </li>
                            <li className="py-2" >
                                <p>Panel de configuración básico</p>
                            </li>
                            <li className="py-2" >
                                <p>Acceso a los manuales de uso avanzado</p>
                            </li>
                        </ul>
                        <article className="flex justify-center py-4 " >
                            <button className="bg-gray-800 py-2 px-4 text-gray-100" >Iniciar ahora</button>
                        </article>
                    </div>
                    <div className="shadow-xl rounded overflow-hidden" >
                        <h2 className="bg-yellow-500 uppercase 2xl:px-12 py-2 text-white text-center" >Plan empresa</h2>
                        <div className="bg-gradient-to-b from-yellow-300 to-white p-4 w-full flex justify-center " >
                            <span className="flex flex-col items-center w-24 h-24  justify-center bg-yellow-300 text-white border-white border-4 rounded-full " >
                                <p className="font-extrabold text-lg" >S/.20.00</p>
                                <p className="text-sm font-light" >Pago mensual</p>
                            </span>
                        </div>
                        <ul className="divide-y p-4" >
                            <li className="py-2" >
                                <p>Acceso a todas las licitaciones publicadas</p>
                            </li>
                            <li className="py-2" >
                                <p>En el caso de ser proveedor podrá participar de culquier licitación</p>
                            </li>
                            <li className="py-2" >
                                <p>Funciones avanzadas en la creación de licitaciones</p>
                            </li>
                            <li className="py-2" >
                                <p>Acceso a una variedad de dashboards estadísiticos</p>
                            </li>
                        </ul>
                        <article className="flex justify-center py-4 " >
                            <button className="bg-gray-800 py-2 px-4 text-gray-100" >Iniciar ahora</button>
                        </article>
                    </div>
                    <div className="shadow-xl rounded overflow-hidden" >
                        <h2 className="bg-gray-500 uppercase 2xl:px-12 py-2 text-white text-center" >Plan corporativo</h2>
                        <div className="bg-gradient-to-b from-gray-300 to-white p-4 w-full flex justify-center " >
                            <span className="flex flex-col items-center w-24 h-24  justify-center bg-gray-300 text-white border-white border-4 rounded-full " >
                                <p className="font-extrabold text-lg" >S/.50.00</p>
                                <p className="text-sm font-light" >Pago mensual</p>
                            </span>
                        </div>
                        <ul className="divide-y p-4" >
                            <li className="py-2" >
                                <p>Acceso a todo tipo de licitaciones</p>
                            </li>
                            <li className="py-2" >
                                <p>Envío de invitaciones por correo ilimitadas</p>
                            </li>
                            <li className="py-2" >
                                <p>Acceso a todo tipo de dashboards</p>
                            </li>
                            <li className="py-2" >
                                <p>Atención preferencial en los procesos de licitación</p>
                            </li>
                        </ul>
                        <article className="flex justify-center py-4 " >
                            <button className="bg-gray-800 py-2 px-4 text-gray-100" >Iniciar ahora</button>
                        </article>
                    </div>
                </div>
            </section>
        </LayoutHome>
  )
}
export default Pricing
