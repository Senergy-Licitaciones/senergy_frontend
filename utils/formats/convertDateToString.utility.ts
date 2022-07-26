export const convertDateToString = (fecha:Date):string => {
  const year = fecha.getFullYear()
  const month = fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1
  const day = fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate()
  return year + '-' + month + '-' + day
}
