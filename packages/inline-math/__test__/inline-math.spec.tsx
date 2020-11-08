import React from 'react'
import { mount, render } from 'enzyme'
import InlineMath from '../src'


describe('basic rendering case', () => {
  const errorLogger = jest
    .spyOn(global.console, 'error')
    .mockImplementation((...args) => {
      throw new Error(args.join(' '))
    })

  afterAll(() => {
    errorLogger.mockRestore()
  })

  it('render with custom className', () => {
    const code = 'x^2 + y^2 = z^2'
    const className = 'custom-inline-math'
    const wrapper = render(
      <InlineMath className={ className } value={ code } />
    )
    expect(wrapper.hasClass(className)).toEqual(true)
  })

  it('value is required', () => {
    for (const value of [undefined, null] as any[]) {
      expect(() => {
        mount(
          <InlineMath value={ value } />
        )
      }).toThrow(/Failed prop type: The prop `value` is marked as required/)
    }
  })

  it('forward ref', () => {
    const ref = React.createRef<HTMLSpanElement>()
    const wrapper = mount(
      <InlineMath ref={ ref } data-value="waw" value=""/>
    )

    const o = wrapper.getDOMNode()
    expect(o).toEqual(ref.current)
    expect(o.getAttribute('data-value')).toEqual('waw')
  })

  it('snapshot', () => {
    const code = 'x^2 + y^2 = z^2'
    const wrapper = mount(
      <InlineMath
        value={ code }
        style={ { color: 'orange', fontSize: '16px' } }
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
