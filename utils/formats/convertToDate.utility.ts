export const convertToDate = (date:string):Date => {
  const array = date.split('-')
  const fecha = new Date(`${array[1]}/${array[2]}/${array[0]}`)
  return fecha
}
