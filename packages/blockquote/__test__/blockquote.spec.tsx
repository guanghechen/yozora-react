import { mount, render } from 'enzyme'
import React from 'react'
import type { DefaultTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Blockquote from '../src'

describe('basic rendering case', () => {
  const errorLogger = jest
    .spyOn(global.console, 'error')
    .mockImplementation((...args) => {
      throw new Error(args.join(' '))
    })

  afterAll(() => {
    errorLogger.mockRestore()
  })

  it('render a simple content', () => {
    const text = 'Hello, world!'
    const wrapper = render(
      <Blockquote>
        <span>
          <Blockquote>{text}</Blockquote>
        </span>
      </Blockquote>,
    )
    expect(wrapper.text()).toEqual(text)
  })

  it('render with custom className', () => {
    const text = 'Hello, world!'
    const className = 'custom-text'
    const wrapper = render(
      <Blockquote className={className}>
        <span>{text}</span>
      </Blockquote>,
    )
    expect(wrapper.hasClass(className)).toEqual(true)
    expect(wrapper.text()).toEqual(text)
  })

  it('children is required', () => {
    for (const value of [undefined, null] as any[]) {
      expect(() => {
        render(<Blockquote>{value}</Blockquote>)
      }).toThrow(/The prop `children` is marked as required/i)
    }
  })

  it('forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    const wrapper = mount(
      <Blockquote ref={ref} data-value="waw">
        1
      </Blockquote>,
    )

    const o = wrapper.getDOMNode()
    expect(o).toEqual(ref.current)
    expect(o.getAttribute('data-value')).toEqual('waw')
  })

  it('snapshot', () => {
    const wrapper = render(
      <Blockquote style={{ color: 'orange', fontSize: '16px' }}>
        some text1
        <span>some text2</span>
      </Blockquote>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('snapshot with theme', () => {
    const theme: DefaultTheme = {
      yozora: {
        blockquote: {
          color: 'red',
          padding: '0 1rem',
          // borderColor: 'orange',
          margin: 18,
          background: 'rgba(0, 0, 0, 0.15)',
        },
      },
    }

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Blockquote>
          some text1
          <span>some text2</span>
        </Blockquote>
      </ThemeProvider>,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
