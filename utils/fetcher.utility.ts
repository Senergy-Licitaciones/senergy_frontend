import axios from 'axios'
import { API } from '../config'

export const senergy = axios.create({
  baseURL: API
})
