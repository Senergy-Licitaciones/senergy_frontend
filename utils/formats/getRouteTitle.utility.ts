export const getRouteTitle = (route:string):string => {
  switch (route) {
    case 'userAccount':{
      return 'Dashboard General'
    }
    case 'dashboard':{
      return 'Historial de licitaciones' }
    case 'listaProveedores':{
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
