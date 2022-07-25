import swal from 'sweetalert'

const handleErrorSwal = (err:any) => {
  const error = err as Error
  swal('Error', error.message, 'error')
}
export default handleErrorSwal
