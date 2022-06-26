export const getFormatRoute = (pathname:string):string => pathname.split('/').pop() as string
export const getRouteTitle = (route:string):string => {
  switch (route) {
    case 'userAccount':{
      return 'Dashboard General' }
    case 'dashboard':{
      return 'Historial de licitaciones' }
    case 'lista-proveedores':{
      return 'Lista de proveedores'
    }
    case 'mejoresOfertas':{
      return 'Mejores ofertas'
    }
    case 'licitaciones':{
      return 'Mis licitaciones actuales'
    }
    case 'crearLicitacion':{
      return 'Crear licitación'
    }
    case 'actualizarLicitacion':{
      return 'Actualizar licitación'
    }
    case 'edit':{
      return 'Editar Licitación'
    }
    default:{
      return 'Detalles' }
  }
}
export const getRouteTitleProveedor = (route:string):string => {
  switch (route) {
    case 'dashboard':{
      return 'Dashboard de proveedor'
    }
    case 'licitaciones':{
      return 'Buscador de licitaciones'
    }
    case 'empresaAccount':{
      return 'Inicio'
    }
    case 'historialLicitaciones':{
      return 'Historial de participaciones en licitaciones '
    }
    case 'licitacionesGuardadas':{
      return 'Mis licitaciones guardadas'
    }
    case 'oferta':{
      return 'Generar Oferta'
    }
    case 'historialOfertas':{
      return 'Historial de Ofertas'
    }
    default:{
      return 'Detalles'
    }
  }
}
export const convertToDate = (date:string) => {
  const array = date.split('-')
  const fecha = new Date(`${array[1]}/${array[2]}/${array[0]}`)
  return fecha
}

export const formatMes = (mes:number):string => {
  switch (mes) {
    case 0:{
      return 'Enero'
    }
    case 1:{
      return 'Febrero'
    }
    case 2:{
      return 'Marzo'
    }
    case 3:{
      return 'Abril'
    }
    case 4:{
      return 'Mayo'
    }
    case 5:{
      return 'Junio'
    }
    case 6:{
      return 'Julio'
    }
    case 7:{
      return 'Agosto'
    }
    case 8:{
      return 'Septiembre'
    }
    case 9:{
      return 'Octubre'
    }
    case 10:{
      return 'Noviembre'
    }
    case 11:{
      return 'Diciembre'
    }
    default:{
      return 'Mes no válido'
    }
  }
}
