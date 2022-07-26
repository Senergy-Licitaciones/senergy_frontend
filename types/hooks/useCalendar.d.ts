export type UseCalendar=(fechaInicioApertura:string, fechaFinApertura:string)=>{
    both:boolean,
    cal:{
        fechaInicio:{
            day:number,
            dayWeek:number
        },
        fechaFin:{
            day:number,
            dayWeek:number
        }
    }
}
