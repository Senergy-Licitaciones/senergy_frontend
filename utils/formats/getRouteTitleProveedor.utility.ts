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
