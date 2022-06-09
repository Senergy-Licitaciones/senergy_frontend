export const getFormatRoute=(pathname:string):string=>pathname.split("/").pop();
export const getRouteTitle=(route:string):string=>{
    switch (route) {
        case "userAccount":{
            return "Dashboard General"} 
        case "dashboard":{
            return "Historial de licitaciones"}
        case "proveedoresFrecuentes":{
            return "Proveedores frecuentes"
        }
        case "mejoresOfertas":{
            return "Mejores ofertas"
        }
        case "licitaciones":{
            return "Mis licitaciones actuales"
        }
        case "crearLicitacion":{
            return "Crear licitación"
        }
        case "actualizarLicitacion":{
            return "Actualizar licitación"
        }
        
        default:{
            return "Detalles"}
    }
}
export const getRouteTitleProveedor=(route:string):string=>{
    switch (route) {
        case "dashboard":{
            return "Dashboard de proveedor"
        }
        case "licitaciones":{
            return "Buscador de licitaciones"
        }
        case "empresaAccount":{
            return "Inicio"
        }
        case "historialLicitaciones":{
            return "Historial de participaciones en licitaciones "
        }
        case "licitacionesGuardadas":{
            return "Mis licitaciones guardadas"
        }
        case "oferta":{
            return "Generar Oferta"
        }
        case "historialOfertas":{
            return "Historial de Ofertas"
        }
        default:{
            return "Detalles"
        }
    }
}