import { NextRouter } from 'next/router'

// eslint-disable-next-line no-undef
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter (props: Partial<NextRouter>) {
  useRouter.mockImplementationOnce(() => ({
    ...props
  }))
}
