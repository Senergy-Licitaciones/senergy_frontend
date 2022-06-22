/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CalendarioFechaApertura from '../../../components/common/CalendarioFechaApertura'
describe('Render calendario', () => {
  beforeEach(() => {
    render(<CalendarioFechaApertura fechaInicioApertura='2022-07-01' fechaFinApertura='2022-07-17' />)
  })
  test('Fecha de apertura coloreada', () => {
    const liInicio = screen.getByText('1')
    const liFin = screen.getByText('17')
    const liOverFin = screen.getByText('18')
    expect(liInicio).toHaveClass('bg-green-200')
    expect(liFin).toHaveClass('bg-green-200')
    expect(liOverFin).not.toHaveClass('bg-green-200')
  })
})
