import { render } from '@redwoodjs/testing/web'

import ReadmePage from './ReadmePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReadmePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReadmePage />)
    }).not.toThrow()
  })
})
