export default function generateNumber (length:number):number {
  const product = Math.pow(10, length - 1)
  const num = Math.trunc(Math.random() * 9 * product + product)
  return num
}
