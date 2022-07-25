import { Session } from 'next-auth'

export interface ParamsUseData{
    _id: string
    name: string
}

export type UseData = (session: Session) => {
    brgs:Array<ParamsUseData>,
    puntoSums:Array<ParamsUseData>,
    servicios:Array<ParamsUseData>
};
