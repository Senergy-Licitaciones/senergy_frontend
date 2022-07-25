/* eslint-disable no-unused-vars */
export enum TypeToken{
    User='user',
    Proveedor='proveedor'
}
export enum Parametro{
    PG='Precio del Gas Natural en boca de pozo',
  PGN='Precio del Gas Natural publicado por OSINERGMIN',
  PPI='Índice de Precios al Productor de los Estados Unidos',
  PR6='Precio del Residual R6 en la Planta Callao',
  PR500='Precio del Petróleo Residual R500',
  PC='Precio de referencia de importación del Carbón bituminoso'
}
export enum Role{
    Basico='basico',
    Premium='premium',
    Admin='admin'
}
export enum Energia{
    Hp='energiaHp',
    Hfp='energiaHfp'
}
export enum TypeFormulaIndex{
    Potencia='formulaIndexPotencia',
    Energia='formulaIndexEnergia'
}
