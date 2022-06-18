/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomePage } from '../pages/index'
describe('Home', () => {
  it('renders index Page', () => {
    render(<HomePage/>)
    const anchorUser = screen.getByText(/Iniciar como usuario/i)
    const anchorProvider = screen.getByText(/¿Eres un proveedor?/i)
    expect(anchorUser).toBeInTheDocument()
    expect(anchorUser).toHaveAttribute('href', '/login')
    expect(anchorProvider).toBeInTheDocument()
    expect(anchorProvider).toHaveAttribute('href', '/login/empresa')
  })
})
