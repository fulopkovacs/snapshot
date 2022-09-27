import {expect, it} from 'vitest'
import renderer from 'react-test-renderer'
import App from './App'

it('renders <App> properly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
