export interface FormCrearLicitacion{
    title:string,
    description:string,
    fechaInicioApertura:Date,
    fechaFinApertura:Date,
    numLicitacion:number,
    requisitos:string,
    estado:Estado,
    empresa:string,
    fechaInicio:Date,
    fechaFin:Date,
    puntoSum:string,
    brg:string,
    factorPlanta:number
}
enum Estado{
    Abierto="abierto",
    Cerrado="cerrado"
}