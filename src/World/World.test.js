import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {cleanup, fireEvent, render, within} from 'react-testing-library'
import World from './World'
import WithResources from '../Resource Manager/HOC/WithResources';



afterEach(cleanup)

it('should render the component only when the condition passes', () => {
  const ConditionalComponent = WithResources(Component);
  

});

test('TodoApp should list the items in the passed order', () => {

  const {getByTestId} = render(<World />)


  const registerComponent = jest.fn()

  expect(registerComponent).toBeCalledWith({component: component});


})

