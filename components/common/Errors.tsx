import { Alert, Typography } from '@material-tailwind/react'
import { Fragment } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
type Props={
    errors:FieldErrorsImpl
}
export function Errors ({ errors }:Props) {
  return (
        <Fragment>
            {
                Object.values(errors).map((error, i) => (
          <Alert key={i} color='red' className='fixed top-0 z-40' show={!!error} animate={{ mount: { x: 0 }, unmount: { x: 100 } }} >
              <Typography variant="lead">
                  {error?.message}
              </Typography>
          </Alert>
                ))
            }
        </Fragment>
  )
}
