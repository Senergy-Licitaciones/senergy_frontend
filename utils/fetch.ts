import axios from 'axios'
import { API } from '../consts/config'
import { ErrorResponse, ResponseMethodGet, ResponseMethodPost, ResponseMethodPut } from '../types/methods'

export const methodGetAuth = async (url:string, token:string) => {
  try {
    const { data } = await axios.get(`${API}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    console.log('error ', err)
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error: err
    }
  }
}
export const methodPostAuth = async (url:string, token:string, body:Object) => {
  try {
    const { data } = await axios.post(`${API}/${url}`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error: err
    }
  }
}
export const methodPutAuth = async (url:string, token:string, body:Object):Promise<ResponseMethodPut> => {
  try {
    const { data } = await axios.put(`${API}/${url}`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error
    }
  }
}
export const methodPost = async (url:string, body:Object):Promise<ResponseMethodPost> => {
  try {
    const { data } = await axios.post(`${API}/${url}`, body)
    return data
  } catch (err) {
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error
    }
  }
}
export const methodPut = async (url:string, body:Object):Promise<ResponseMethodPut> => {
  try {
    const { data } = await axios.put(`${API}/${url}`, body)
    return data
  } catch (err) {
    console.log('error put', err)
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error
    }
  }
}
export const methodGet = async (url:string):Promise<ResponseMethodGet> => {
  try {
    const { data } = await axios.get(`${API}/${url}`)
    return data
  } catch (err) {
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al realizar la petición',
      error
    }
  }
}
export const saveToken = async (form:{token:string}):Promise<void|ErrorResponse> => {
  try {
    const { data } = await axios.post('/api/login', form)
    console.log('data ', data)
  } catch (err) {
    console.log('error save token ', err)
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al iniciar sesión',
      error
    }
  }
}
export const clearToken = async ():Promise<void|ErrorResponse> => {
  try {
    await axios.put('/api/logout')
  } catch (err) {
    const error = err as Error
    return {
      message: 'Ha ocurrido un error al cerrar el token ',
      error
    }
  }
}
