import { Session } from 'next-auth'
import { DataSelect } from '../models'

export type UseData = (session: Session|null) => {
    brgs:Array<DataSelect>,
    puntoSums:Array<DataSelect>,
    servicios:Array<DataSelect>
};
