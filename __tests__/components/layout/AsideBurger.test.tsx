/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import AsideBurger from '../../../components/layout/AsideBurger'
import '@testing-library/jest-dom'
describe('AsideBurger', () => {
  beforeEach(() => {
    render(<AsideBurger/>)
  })
  test('renders AsideBurger components children', () => {
    const aside = screen.getByRole('group')
    expect(aside).toHaveClass('-translate-x-full')
  })
  test('open burger ', async () => {
    const btn = await screen.findByRole('button', {
      name: /burger-open/i
    })
    fireEvent.click(btn)
    const aside = screen.getByRole('group')
    expect(aside).toHaveClass('translate-x-0')
  })
  test('close burger', () => {
    const btn = screen.getByRole('button', {
      name: /burger-close/i
    })
    fireEvent.click(btn)
    const aside = screen.getByRole('group')
    expect(aside).toHaveClass('-translate-x-full')
  })
})
