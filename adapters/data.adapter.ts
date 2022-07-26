import { DataSelect } from '@mytypes/models'
import { convertToDate } from '../utils/formats'

export const createDataAdapter = (response:Array<any>):DataSelect[] => {
  return response.map((data) => ({
    _id: data._id,
    name: data.name,
    createdAt: convertToDate(data.createdAt),
    updatedAt: convertToDate(data.updatedAt)
  }))
}
