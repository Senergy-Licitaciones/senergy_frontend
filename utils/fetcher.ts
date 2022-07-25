import axios from 'axios'
import { API } from '../consts/config'

export const senergy = axios.create({
  baseURL: API
})
