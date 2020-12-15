import React from 'react'
import { mount, render } from 'enzyme'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Paragraph from '../src'


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
      <Paragraph>
        <span>
          <Paragraph>{ text }</Paragraph>
        </span>
      </Paragraph>
    )
    expect(wrapper.text()).toEqual(text)
  })

  it('render with custom className', () => {
    const text = 'Hello, world!'
    const className = 'custom-text'
    const wrapper = render(
      <Paragraph className={ className }>
        <span>{ text }</span>
      </Paragraph>
    )
    expect(wrapper.hasClass(className)).toEqual(true)
    expect(wrapper.text()).toEqual(text)
  })

  it('children is required', () => {
    for (const value of [undefined, null] as any[]) {
      expect(() => {
        render(<Paragraph>{ value }</Paragraph>)
      }).toThrow(/Failed prop type: The prop `children` is marked as required/i)
    }
  })

  it('forward ref', () => {
    const ref = React.createRef<HTMLParagraphElement>()
    const wrapper = mount(
      <Paragraph ref={ ref } data-value="waw">
        1
      </Paragraph>
    )

    const o = wrapper.getDOMNode()
    expect(o).toEqual(ref.current)
    expect(o.getAttribute('data-value')).toEqual('waw')
  })

  it('snapshot', () => {
    const wrapper = render(
      <Paragraph style={{ color: 'orange', fontSize: '16px' }}>
        some text1
        <span>some text2</span>
      </Paragraph>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('snapshot with theme', () => {
    const theme: DefaultTheme = {
      yozora: {
        paragraph: {
          color: 'red',
          padding: '0 1rem',
          margin: 18,
          // lineHeight: 1.5,
        }
      }
    }

    const wrapper = mount(
      <ThemeProvider theme={ theme }>
        <Paragraph>
          some text1
          <span>some text2</span>
        </Paragraph>
      </ThemeProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})