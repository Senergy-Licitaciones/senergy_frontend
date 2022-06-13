/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import { getFormatRoute, getRouteTitle, getRouteTitleProveedor } from '../../utils'
describe('utils ', () => {
  test('getFormatRoute', () => {
    const mockGetFormatRoute = jest.fn(getFormatRoute)
    expect(mockGetFormatRoute('/')).toBe('')
    expect(mockGetFormatRoute('/about')).toBe('about')
  })
  test('getRouteTitle ', () => {
    const mockGetRouteTitle = jest.fn(getRouteTitle)
    expect(mockGetRouteTitle('userAccount')).toBe('Dashboard General')
    expect(mockGetRouteTitle('dashboard')).toBe('Historial de licitaciones')
    expect(mockGetRouteTitle('otro texto')).toBe('Detalles')
  })
  test('getRouteTitleProveedor', () => {
    const mockGetRouteTitleProveedor = jest.fn(getRouteTitleProveedor)
    expect(mockGetRouteTitleProveedor('dashboard')).toBe('Dashboard de proveedor')
    expect(mockGetRouteTitleProveedor('licitaciones')).toBe('Buscador de licitaciones')
    expect(mockGetRouteTitleProveedor('otro texto')).toBe('Detalles')
  })
})
