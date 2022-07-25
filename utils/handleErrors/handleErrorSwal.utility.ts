import swal from 'sweetalert'

export const handleErrorSwal = (err:any) => {
  const error = err as Error
  swal('Error', error.message, 'error')
}
