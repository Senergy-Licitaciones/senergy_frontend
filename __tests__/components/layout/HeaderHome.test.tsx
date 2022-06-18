/* eslint-disable no-undef */
import { render, screen, within } from '@testing-library/react'
import HeaderHome from '../../../components/layout/HeaderHome'
import '@testing-library/jest-dom'
import { mockNextUseRouter } from '../../../__mocks__/mockUseRouter'
describe('Rendering Component', () => {
  beforeEach(() => {
    mockNextUseRouter({
      route: '',
      pathname: '',
      asPath: ''
    })
    render(<HeaderHome/>)
  })
  test('render HeaderHome nav desktop children component ', () => {
    const nav = screen.getByRole('navigation')
    const linkInicio = within(nav).getByRole('link', {
      name: /inicio/i
    }
    )
    expect(linkInicio).toBeInTheDocument()
    expect(linkInicio).toHaveAttribute('href', '/')
    const linkAbout = within(nav).getByRole('link', {
      name: /acerca de nosotros/i
    })
    expect(linkAbout).toBeInTheDocument()
    expect(linkAbout).toHaveAttribute('href', '/about')
    const linkPrecio = within(nav).getByRole('link', {
      name: /precios/i
    })
    expect(linkPrecio).toBeInTheDocument()
    expect(linkPrecio).toHaveAttribute('href', '/pricing')
  })
  test('render auth links ', () => {
    const article = screen.getByLabelText(/auth-links-desktop/i)
    const login = within(article).getByRole('link', {
      name: /iniciar sesión/i
    })
    expect(login).toBeInTheDocument()
    expect(login).toHaveAttribute('href', '/login')
    const register = within(article).getByRole('link', {
      name: /registrarse/i
    })
    expect(register).toBeInTheDocument()
    expect(register).toHaveAttribute('href', '/register')
  })
  test('render underlying link inicio ', () => {
    const names = [/inicio/i, /about/i, /pricing/i]
    const nav = screen.getByRole('navigation')
    const linkUnderlying = within(nav).getByRole('link', {
      name: names[0]
    })
    expect(linkUnderlying).toHaveClass('text-yellow-500 after:block')
  })
})

describe('underlying links', () => {
  test('underlying link about', () => {
    mockNextUseRouter({
      route: '',
      pathname: 'about',
      asPath: ''
    })
    render(<HeaderHome/>)
    const nav = screen.getByRole('navigation')
    const linkAbout = within(nav).getByRole('link', { name: /acerca de nosotros/i })
    expect(linkAbout).toHaveClass('text-yellow-500 after:block')
  })
  test('underlying link pricing', () => {
    mockNextUseRouter({
      route: '',
      pathname: 'pricing',
      asPath: ''
    })
    render(<HeaderHome/>)
    const nav = screen.getByRole('navigation')
    const linkPricing = within(nav).getByRole('link', { name: /precios/i })
    expect(linkPricing).toHaveClass('text-yellow-500 after:block')
  })
})
